interface AuthServiceResponse {
  auth_token: string;
}

interface UserInfo {
  id: number;
  name: string;
  email: string;
}

type Credentials = {
  email: string;
  password: string;
};

import { BASE_URL } from "~/constants/api";

class AuthService {
  private async request<T>(
    endpoint: string,
    data: Record<string, string>
  ): Promise<T> {
    const response = await fetch(`${BASE_URL}/${endpoint}/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const dataResponse = await response.json();
    const errors = Object.values(dataResponse);

    if (!response.ok) {
      throw new Error(errors.join("\n"));
    }

    return response.json() as Promise<T>;
  }

  public async signIn(credentials: Credentials): Promise<AuthServiceResponse> {
    return this.request<AuthServiceResponse>("auth/token/login", credentials);
  }

  public async verifyToken(token: string): Promise<UserInfo> {
    return this.request<UserInfo>("verify-token", { token });
  }

  public async signUp(data: Credentials): Promise<AuthServiceResponse> {
    return this.request<AuthServiceResponse>("users", data);
  }
}

export default AuthService;
