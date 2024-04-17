import { createCookieSessionStorage, redirect } from "@remix-run/node";

// TODO: env
const sessionSecret = process.env.SESSION_SECRET || "amoga";
if (!sessionSecret) {
  throw new Error("SESSION_SECRET must be set");
}

const storage = createCookieSessionStorage({
  cookie: {
    name: "RJ_session",
    secure: process.env.NODE_ENV === "production",
    secrets: [sessionSecret],
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30, // 30 days
    httpOnly: true,
  },
});

export async function createUserSession(token: string, redirectPath: string) {
  const session = await storage.getSession();
  session.set("token", token);
   // Сохраняем токен в куки

  return redirect(redirectPath, {
    headers: {
      "Set-Cookie": await storage.commitSession(session),
    },
  });
}

export async function createUserEmail(email: string, redirectPath: string) {
  const session = await storage.getSession();
  session.set('email', email)

  return redirect(redirectPath, {
    headers: {
      "Set-Cookie": await storage.commitSession(session),
    },
  })
}

export async function getUserEmail(request: Request) {
  return storage.getSession(request.headers.get("Cookie"))
}

export async function getUserSession(request: Request) {
  return storage.getSession(request.headers.get("Cookie"));
}

export async function destroyUserSession(request: Request) {
  const session = await getUserSession(request);
  return redirect("/signin", {
    headers: {
      "Set-Cookie": await storage.destroySession(session),
    },
  });
}
