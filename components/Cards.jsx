import {
  SimpleGrid,
  Card,
  CardHeader,
  Heading,
  CardBody,
  Text,
  CardFooter,
  Button,
  Center,
  Box,
} from "@chakra-ui/react";

export function Cards() {
  return (
    <Box>
      <SimpleGrid spacing={4} templateColumns="repeat(3, minmax(200px, 1fr))">
        <Card align="center" >
          <CardHeader >
            <Heading size="md" >
              {" "}
              AWS
            </Heading>
          </CardHeader>
          <CardBody>
            
            
          </CardBody>
          <CardFooter>
            <Button colorScheme="blue">View here</Button>
          </CardFooter>
        </Card>
        <Card align="center">
          <CardHeader>
            <Heading size="md" > Azure</Heading>
          </CardHeader>
          <CardBody>
            <Text>
              View a summary of all your customers over the last month.
            </Text>
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
            <Text>
              View a summary of all your customers over the last month.
            </Text>
          </CardBody>
          <CardFooter>
            <Button colorScheme="blue">View here</Button>
          </CardFooter>
        </Card>
      </SimpleGrid>
    </Box>
  );
}
