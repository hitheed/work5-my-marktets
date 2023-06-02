import cookie from 'cookie';

interface ITokenStorage {
  addToken: (token: string) => void;
  removeToken: (key: string) => void;
  getToken: () => string;
}

export class TokenStorage implements ITokenStorage {
  tokenKey: string;

  constructor(tokenKey: string) {
    this.tokenKey = tokenKey;
  }

  addToken(token: string): void {
    document.cookie = `${this.tokenKey}=${JSON.stringify(token)}`;
  }
  removeToken(): void {
    document.cookie = `${this.tokenKey}= ;expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
  }
  getToken(): string {
    return cookie.parse(document.cookie)[this.tokenKey];
  }
}
