export interface Address {
  street: string;
  city: string;
  state: string;
  zip: string;
}

export interface NonprofitRequest {
  legalName: string;
  ein: string;
  mission: string;
  address: Address;
}

export interface Nonprofit {
  id: number;
  legalName: string;
  ein: string;
  mission: string;
  address: Address;
}

export interface Duration {
  grantStart: string;
  grantEnd: string;
}

export interface GrantSubmission {
  id: number;
  nonprofitId: number;
  grantName: string;
  requestedAmount: number;
  awardedAmount: number;
  grantType: 'OPERATING_GRANT' | 'PROJECT_GRANT' | 'OTHER';
  tags: string;
  duration: Duration;
}

export interface GrantSubmissionRequest {
  grantName: string;
  requestedAmount: number;
  awardedAmount: number;
  grantType: 'OPERATING_GRANT' | 'PROJECT_GRANT' | 'OTHER';
  tags: string;
  duration: Duration;
}
