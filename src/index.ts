import fs from 'fs';
import Papa from 'papaparse';

import { createGrantSubmission, createNonprofit } from './api';
import {
  convertGrantSubmissionRequestCsvToGrantSubmissionRequest,
  convertNonprofitCsvToNonprofitRequest,
  GrantSubmissionRequestCsv,
  NonprofitCsv,
} from './converter';
import { GrantSubmissionRequest, NonprofitRequest } from './types';

async function main() {
  try {
    const [nonprofitData, submissionData] = await Promise.all([
      parseCsvFile<NonprofitCsv>('./src/data/nonprofit_data.csv'),
      parseCsvFile<GrantSubmissionRequestCsv>('./src/data/nonprofit_submission_data.csv'),
    ]);

    for (const [index, nonprofitCsv] of nonprofitData.entries()) {
      const grantSubmissionCsv = submissionData[index];

      const nonprofitRequest = convertNonprofitCsvToNonprofitRequest(nonprofitCsv);
      const grantSubmissionRequest = convertGrantSubmissionRequestCsvToGrantSubmissionRequest(grantSubmissionCsv);

      await importNonprofitData(nonprofitRequest, grantSubmissionRequest);
    }
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

async function parseCsvFile<T>(filePath: string): Promise<T[]> {
  const fileContent = fs.readFileSync(filePath, 'utf8');
  return new Promise((resolve, reject) => {
    Papa.parse<T>(fileContent, {
      header: true,
      complete: (results) => resolve(results.data),
      error: (error: Error) => reject(error),
    });
  });
}

async function importNonprofitData(nonprofitRequest: NonprofitRequest, grantSubmissionRequest: GrantSubmissionRequest) {
  try {
    const nonprofit = await createNonprofit(nonprofitRequest);
    const grantSubmission = await createGrantSubmission(nonprofit.id, grantSubmissionRequest);

    console.log('Import nonprofit success', nonprofit);
    console.log('Import grantSubmission success', grantSubmission);
  } catch (error) {
    console.error('Error importing data:', error);
  }
}

main();
