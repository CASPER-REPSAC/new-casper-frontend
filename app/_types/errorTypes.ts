export interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}
export interface ErrorResponse {
  code: number;
  message: string;
}

/**
 * @deprecated
 */
class CustomError extends Error {
  message: string = '';

  code: number = 0;

  constructor({ message, code }: ErrorResponse) {
    super();
    this.message = message;
    this.code = code;
  }
}

export default CustomError;
