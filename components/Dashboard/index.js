import { auth } from "@/config/firebase";
import { Cards } from "./../../components/Cards";
import { HeaderDashboard } from "@/components/HeaderDashboard";
import {Center} from "@chakra-ui/react";
import Title from "../Title";

import styles from '../../styles/Dashboard.module.css'

export const Dashboard = () => {
  const logout = () => auth.signOut();
  return (
    <div className={styles.container} >
      <div >
        <HeaderDashboard />
        <Center>
          <Title />
        </Center>
        <Cards />
        {/*  <Button colorScheme="blue" onClick={logout} >Sair</Button> */}
      </div>
    </div>
  );
};
