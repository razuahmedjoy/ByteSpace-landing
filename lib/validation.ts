export type AuthValues = { name?: string; email: string; password: string };
export type AuthErrors = Partial<Record<keyof AuthValues, string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const MIN_PASSWORD_LENGTH = 8;

export function validateAuth(values: AuthValues, { requireName = false } = {}): AuthErrors {
  const errors: AuthErrors = {};

  if (requireName && !values.name?.trim()) errors.name = "Please enter your full name.";

  if (!values.email.trim()) errors.email = "Email is required.";
  else if (!EMAIL_RE.test(values.email.trim())) errors.email = "Enter a valid email address.";

  if (!values.password) errors.password = "Password is required.";
  else if (values.password.length < MIN_PASSWORD_LENGTH)
    errors.password = `Password must be at least ${MIN_PASSWORD_LENGTH} characters.`;

  return errors;
}
