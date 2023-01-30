import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Stack,
  Avatar,
  Center,
  Skeleton
} from "@chakra-ui/react";
import { auth } from "@/config/firebase";

import { useRef } from "react";

export function Sidebar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  const logout = () => auth.signOut()

  return (
    <>
      <Button ref={btnRef} colorScheme="blue" onClick={onOpen} mr={2}>
        Perfil 👩‍💻
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Informações do Usuário</DrawerHeader>

          <DrawerBody>
            <Center>
              <Avatar bg="teal.500" src="https://bit.ly/broken-link" />
            </Center>

            <Stack mt={59}>
              <Skeleton height="30px" />
              <Skeleton height="30px" />
              <Skeleton height="30px" />
              <Skeleton height="30px" />
              <Skeleton height="30px" />
              <Skeleton height="30px" />
              <Skeleton height="30px" />
            </Stack>
          </DrawerBody>

          <DrawerFooter>
            {/* <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue" mr={3}>Save</Button> */}
            <Button colorScheme="blue" onClick={logout}>Logout</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
