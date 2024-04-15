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

    if (!response.ok) {
      throw new Error("Ошибка в запросе к стороннему сервису");
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
    console.log(data);
    return this.request<AuthServiceResponse>("users", data);
  }
}

export default AuthService;
