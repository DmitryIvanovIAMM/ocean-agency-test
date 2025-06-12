export interface LoginAudit {
  id: string;
  userId: string;
  loginTime: Date;
  ipAddress: string;
  userAgent: string;
  success: boolean;
  errorMessage?: string; // Optional field for error messages in case of failed login
}
export interface LoginAuditsResponse {
  audits: LoginAudit[];
  // TODO: Uncomment and implement pagination if needed
  // totalCount: number;
  // pageSize: number;
  // currentPage: number;
}

export const fetchLoginAudits = async (
  page: number,
  pageSize: number,
): Promise<LoginAuditsResponse> => {
  const response = await fetch(
    `/api/login-audits?page=${page}&pageSize=${pageSize}`,
  );
  if (!response.ok) {
    throw new Error('Failed to fetch login audits');
  }
  return response.json();
};
