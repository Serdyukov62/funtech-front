import { LoaderFunction } from '@remix-run/node';
import { getUserSession } from './session.server';

export const loaderHelper: LoaderFunction = async (args) => {
    const { request } = args;
    const session = await getUserSession(request);
    const token = session.get("token");
  
    if (!token) {
      throw new Response("Unauthorized", { status: 401 });
    }
  
    return { token };
  };