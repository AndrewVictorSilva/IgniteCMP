import {
  Button,
  Flex,
  Box,
  Heading,
  Spacer,
  ButtonGroup,
} from "@chakra-ui/react";
import { auth } from "@/config/firebase";
import { Sidebar } from "./Sidebar";

export function HeaderDashboard() {
  const logout = () => auth.signOut()
  return (
    <>
      <Flex
        minWidth="max-content"
        alignItems="center"
        gap="2"
        bg="gray.200"
      >
        <Box p="6" >
          <Heading size="md" >Projeto CMP</Heading>
        </Box>
        <Spacer />
        <ButtonGroup gap="2">
          <Sidebar/>
        </ButtonGroup>
      </Flex>
    </>
  );
}
