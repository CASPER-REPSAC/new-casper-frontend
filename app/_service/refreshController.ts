/**
 * @description Refresh token queue manager
 * - managing queue of 401 failed requests
 * - managing refreshing state
 * - retrying failed requests
 */

class RefreshTokenController<RequestResponse, RefreshResponse> {
  public isRefreshing = false;
  private refreshSubscribers: {
    requestFn: () => Promise<RequestResponse>;
    resolve: (value: RequestResponse) => void;
    reject: (error: unknown) => void;
  }[] = [];
  private refreshPromise: Promise<{
    executed: boolean;
    data: RefreshResponse;
  }> | null;

  constructor() {
    this.isRefreshing = false;
    this.refreshSubscribers = [];
    this.refreshPromise = null;
  }

  public retryFailedRequests = async () => {
    try {
      await Promise.all(
        this.refreshSubscribers.map(({ requestFn, resolve, reject }) =>
          requestFn().then(resolve).catch(reject),
        ),
      );
    } finally {
      this.refreshSubscribers = [];
    }
  };

  public addFailedRequest = (requestFn: () => Promise<RequestResponse>) => {
    const promise = new Promise<RequestResponse>((resolve, reject) => {
      this.refreshSubscribers.push({ requestFn, resolve, reject });
      return requestFn;
    });

    return promise;
  };

  public executeRefreshOnce = async (
    requestFn: () => Promise<RefreshResponse>,
  ) => {
    if (this.isRefreshing) {
      await this.refreshPromise;
      return { executed: false, data: null };
    }

    this.isRefreshing = true;

    this.refreshPromise = (async () => {
      try {
        const data = await requestFn();
        return { executed: true, data };
      } finally {
        this.isRefreshing = false;
        this.refreshPromise = null;
      }
    })();

    return { executed: true, data: null };
  };

  public get _isRefreshing_onlyForTest(): boolean {
    return this.isRefreshing;
  }

  public set _setIsRefreshing_onlyForTest(value: boolean) {
    this.isRefreshing = value;
  }

  public get _refreshSubscribers_onlyForTest() {
    return this.refreshSubscribers;
  }

  public set _setRefreshSubscribers_onlyForTest(
    value: {
      requestFn: () => Promise<RequestResponse>;
      resolve: (value: unknown) => void;
      reject: (error: unknown) => void;
    }[],
  ) {
    this.refreshSubscribers = value;
  }
}

const refreshTokenController = new RefreshTokenController();
export default refreshTokenController;
