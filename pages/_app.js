import { Header } from "@/components/Header";
import { ChakraProvider } from "@chakra-ui/react";

import './../styles/globals.css'
import './../styles/Dashboard.module.css'

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
