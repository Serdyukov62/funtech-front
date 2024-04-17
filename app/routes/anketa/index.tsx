import { useNavigate } from "@remix-run/react";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { AnketaForm } from "~/components/Anketa/Anketa";
import { useStores } from "~/stores/rootStoreContext";

export default observer(function Anketa() {
  const {
    userStore: { loggedIn },
  } = useStores();
  const navigation = useNavigate();

  useEffect(() => {
    if (!loggedIn) navigation("/");
  }, [loggedIn]);

  return <AnketaForm />;
});
