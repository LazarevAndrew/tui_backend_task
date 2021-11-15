import axios, { AxiosError } from "axios";

export const apiClient = axios.create({
  baseURL: "https://api.github.com",
});

/* eslint-disable  @typescript-eslint/no-explicit-any */
export function isApiClientError(error: any): error is AxiosError {
  return error.isAxiosError === true;
}
