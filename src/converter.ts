import dayjs from 'dayjs';
import numeral from 'numeral';

import { GrantSubmissionRequest, NonprofitRequest } from './types';

export interface NonprofitCsv {
  'Legal Name': string;
  EIN: string;
  Mission: string;
  'HQ Address 1': string;
  'HQ City': string;
  'HQ State': string;
  'HQ Zip Code': string;
}

export interface GrantSubmissionRequestCsv {
  'Grant Submission Name': string;
  'Requested Amount': string;
  'Awarded Amount': string;
  'Grant Type': 'OPERATING_GRANT' | 'PROJECT_GRANT' | 'OTHER';
  Tags: string;
  'Duration Start': string;
  'Duration End': string;
}

export function convertNonprofitCsvToNonprofitRequest(data: NonprofitCsv): NonprofitRequest {
  return {
    legalName: data['Legal Name'],
    ein: data['EIN'],
    mission: data['Mission'],
    address: {
      street: data['HQ Address 1'],
      city: data['HQ City'],
      state: data['HQ State'],
      zip: data['HQ Zip Code'],
    },
  };
}

export function convertGrantSubmissionRequestCsvToGrantSubmissionRequest(
  data: GrantSubmissionRequestCsv,
): GrantSubmissionRequest {
  return {
    grantName: data['Grant Submission Name'],
    requestedAmount: numeral(data['Requested Amount']).value() || 0,
    awardedAmount: numeral(data['Awarded Amount']).value() || 0,
    grantType: data['Grant Type'],
    tags: data['Tags'],
    duration: {
      grantStart: dayjs(data['Duration Start'], 'MM/DD/YYYY').format('YYYY-MM-DD'),
      grantEnd: dayjs(data['Duration End'], 'MM/DD/YYYY').format('YYYY-MM-DD'),
    },
  };
}
