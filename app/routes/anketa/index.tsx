import { useNavigate } from "@remix-run/react";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { AnketaForm } from "~/components/Anketa/Anketa";
import { useStores } from "~/stores/rootStoreContext";

export default observer(function Anketa() {
  const {
    userStore: { user,loggedIn },
  } = useStores();

  

  const navigate = useNavigate();

  useEffect(() => {
      user?.profile_full && !loggedIn && navigate("/");
  },[])

  return <AnketaForm />;
});
