export interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}
export interface ErrorResponse {
  code: number;
  message: string;
}
