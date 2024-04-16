import { LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { observer } from "mobx-react-lite";
import { AnketaForm } from "~/components/Anketa/Anketa";
import { useStores } from "~/stores/rootStoreContext";
import { getUserSession } from "~/utils/session.server";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  return getUserSession(request);
};

export default observer( function Anketa() {
  const token = useLoaderData<typeof loader>()
  const {userStore: user} = useStores()

  return (
    <>
      <AnketaForm id={user.user?.id} token={token.data.token} />
    </>
  );
});
