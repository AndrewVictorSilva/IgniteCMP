import {
  Card,
  CardHeader,
  Heading,
  CardBody,
  Text,
  CardFooter,
  Box,
  Flex,
  LinkOverlay,
  Image,
} from "@chakra-ui/react";

export function Cards() {
  return (
    <Flex
      justifyContent="center"
      /* alignItems="center" */
      mt={20}
      /* height="100vh" */
      /* backgroundImage="url(https://granulate.io/wp-content/themes/leader-child/assets/images/pricing-hero.svg)" */
    >
      <Box>
        <Card
          align="center"
          size="lg"
          bg="gray.200"
          style={{ width: "300px", height: "300px" }}
        >
          <CardBody>
            <Image
              src="https://granulate.io/wp-content/uploads/2021/07/Google-cloud.png"
              alt="Dan Abramov"
              mt={14}
            />
          </CardBody>
          <CardFooter>
            <Text as='b' >Google Cloud</Text>
          </CardFooter>
        </Card>
      </Box>
      <Box marginLeft="20px" marginRight="20px">
        <Card
          align="center"
          size="lg"
          bg="gray.200"
          style={{ width: "300px", height: "300px" }}
        >
          <CardBody>
            <Image
              src="https://granulate.io/wp-content/uploads/2021/07/Azure.png"
              alt="Dan Abramov"
              mt={14}
            />
          </CardBody>
          <CardFooter>
            <Text as='b' >Azure</Text>
          </CardFooter>
        </Card>
      </Box>
      <Box>
        <Card
          align="center"
          size="lg"
          bg="gray.200"
          style={{ width: "300px", height: "300px" }}
        >
          <CardBody>
            <LinkOverlay href="/aws">
              <Image
                src="https://granulate.io/wp-content/uploads/2021/07/AWS.png"
                alt="Dan Abramov"
                mt={14}
              />
            </LinkOverlay>
          </CardBody>
          <CardFooter>
            <Text as='b' >AWS</Text>
          </CardFooter>
        </Card>
      </Box>
    </Flex>
  );
}

/* <SimpleGrid spacing={6} templateColumns="repeat(3, minmax(200px, 1fr))">
      <Card align="center">
        <CardHeader>
          <Heading size="md"> AWS</Heading>
        </CardHeader>
        <CardBody></CardBody>
        <CardFooter>
          <Button colorScheme="blue">View here</Button>
        </CardFooter>
      </Card>
      <Card align="center">
        <CardHeader>
          <Heading size="md"> Azure</Heading>
        </CardHeader>
        <CardBody>
          <Text>View a summary of all your customers over the last month.</Text>
        </CardBody>
        <CardFooter>
          <Button colorScheme="blue">View here</Button>
        </CardFooter>
      </Card>
      <Card align="center">
        <CardHeader>
          <Heading size="md"> Google Cloud</Heading>
        </CardHeader>
        <CardBody>
          <Text>View a summary of all your customers over the last month.</Text>
        </CardBody>
        <CardFooter>
          <Button colorScheme="blue">View here</Button>
        </CardFooter>
      </Card>
    </SimpleGrid> */
