export interface ErrorProps {
  error: CustomError & { digest?: string };
  reset: () => void;
}
export interface ErrorResponse {
  code: number;
  message: string;
}

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
