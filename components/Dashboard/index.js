import { auth } from "@/config/firebase";
import { Cards } from "./../../components/Cards";
import { HeaderDashboard } from "@/components/HeaderDashboard";
import { Button } from "@chakra-ui/react";

export const Dashboard = () => {
  const logout = () => auth.signOut()
  return (
    <div>
      <div>
        <HeaderDashboard />
        <Cards />
       {/*  <Button colorScheme="blue" onClick={logout} >Sair</Button> */}
      </div>
    </div>
  );
}
