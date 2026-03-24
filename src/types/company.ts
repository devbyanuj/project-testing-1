// =============================================
// COMPANY TYPES
// =============================================
export type Company = {
  id: string;
  name: string;
  created_by: string;
  is_deleted: boolean;
  created_at: string;
  updated_at: string;
};

export type CreateCompanyData = {
  name: string;
};
