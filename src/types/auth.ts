// =============================================
// AUTH TYPES
// =============================================
export type SignupFormData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export type LoginFormData = {
  email: string;
  password: string;
};

export type AuthResult = {
  success: boolean;
  error?: string;
  user?: {
    id: string;
    email: string;
  };
};
