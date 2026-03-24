// =============================================
// JOB TYPES
// =============================================

import { Company } from "./company";

export type Job = {
  id: string;
  is_deleted: boolean;
  created_by: string;

  // Client Info
  contact_first_name: string | null;
  contact_last_name: string | null;
  company_id: string | null;
  client_email: string | null;
  client_phone: string | null;

  // Case Details
  case_number: string | null;
  county: string | null;
  plaintiff: string | null;
  defendant: string | null;
  court_name: string | null;
  date_filed: string | null;
  court_date: string | null;

  // Address
  address: string | null;
  city: string | null;
  state: string | null;
  zip: string | null;

  // Files
  documents: string[] | null;
  miscellaneous_docs: string[] | null;

  created_at: string;
  updated_at: string;

  // Joined data (when fetched with company)
  company?: Company;
};

export type CreateJobData = {
  contact_first_name?: string;
  contact_last_name?: string;
  company_id?: string;
  client_email?: string;
  client_phone?: string;
  case_number?: string;
  county?: string;
  plaintiff?: string;
  defendant?: string;
  court_name?: string;
  date_filed?: string;
  court_date?: string;
  address?: string;
  city?: string;
  state?: string;
  zip?: string;
  documents?: string[];
  miscellaneous_docs?: string[];
};

export type UpdateJobData = Partial<CreateJobData>;
