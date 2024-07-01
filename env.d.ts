declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production';

      NEXT_PUBLIC_API_URL: string;

      NEXT_PUBLIC_GOOGLE_REDIRECT_URI: string;
      NEXT_PUBLIC_GOOGLE_CLIENT_ID: string;
      NEXT_PUBLIC_GOOGLE_CLIENT_SECRET: string;

      NEXT_PUBLIC_GITHUB_REDIRECT_URI: string;
      NEXT_PUBLIC_GITHUB_CLIENT_ID: string;
    }
  }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {};
