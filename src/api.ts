import { GrantSubmission, GrantSubmissionRequest, Nonprofit, NonprofitRequest } from './types';

const API_URL = process.env.API_URL;

if (!API_URL) {
  throw new Error('API_URL is not defined in the environment variables');
}

export async function createNonprofit(data: NonprofitRequest): Promise<Nonprofit> {
  try {
    const response = await fetch(`${API_URL}/api/v1/nonprofits`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error creating nonprofit:', error);
    throw error;
  }
}

export async function createGrantSubmission(
  nonprofitId: number,
  data: GrantSubmissionRequest,
): Promise<GrantSubmission> {
  try {
    const response = await fetch(`${API_URL}/api/v1/nonprofits/${nonprofitId}/submissions`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error creating grant submission:', error);
    throw error;
  }
}
