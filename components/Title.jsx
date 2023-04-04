import { Text, Stack } from "@chakra-ui/react";

export default function Title() {
  return (
    <>
      <Stack alignItems="center" mt={14}>
        <Text fontSize="5xl" as='b' color={"whiteAlpha.900"}>Pricing</Text>
        <Text fontSize="4xl" color={"whiteAlpha.800"}>Pay as you go. Select your favorite provider</Text>
      </Stack>
    </>
  );
}
