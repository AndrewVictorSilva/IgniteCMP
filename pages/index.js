import { useEffect, useState } from "react";
import { Login, Dashboard } from "@/components";
import { auth } from "@/config/firebase";
import { Container, Spinner } from "@chakra-ui/react";

export default function Home() {
  const [authenticated, setAuthenticated] = useState({
    loading: true,
    user: false,
  });

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setAuthenticated({
        loading: false,
        user,
      });
    });
  }, []);

  if (authenticated.loading) {
    return (
      <Container mt={80} centerContent>
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      </Container>
    );
  }

  // const authenticatedUser = auth.currentUser;
  return authenticated.user ? <Dashboard /> : <Login />;
}
