import { compare } from "bcryptjs";

export const verifypassword = async (password, hashedPassword) => {
  const isValid = await compare(password, hashedPassword);
  return isValid;
};
