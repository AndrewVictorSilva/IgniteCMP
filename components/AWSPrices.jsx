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
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import { useRef, useState } from "react";

export default function AWSPrices() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  const [value, setValue] = useState(0);
  const handleChange = (value) => setValue(value);

  return (
    <>
      <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
        Filter
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Filter Options</DrawerHeader>

          <DrawerBody>
            <NumberInput
              maxW="100px"
              mr="2rem"
              value={value}
              onChange={handleChange}
            >
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
            <Slider
              flex="1"
              focusThumbOnChange={false}
              value={value}
              onChange={handleChange}
            >
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb fontSize="sm" boxSize="32px" children={value} />
            </Slider>
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>

      <TableContainer>
        <Table variant="simple">
          <TableCaption>This is all dummy data</TableCaption>
          <Thead>
            <Tr>
              <Th>Name (Instance Type) </Th>
              <Th>Tenancy</Th>
              <Th isNumeric>Price per Hour</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>t4g.nano</Td>
              <Td>Shared</Td>
              <Td isNumeric>$0.0028</Td>
            </Tr>
            <Tr>
              <Td>t4g.nano Linux</Td>
              <Td>Shared</Td>
              <Td isNumeric>$0.0031</Td>
            </Tr>
            <Tr>
              <Td>t3a.nano</Td>
              <Td>Shared</Td>
              <Td isNumeric>$0.0042</Td>
            </Tr>
          </Tbody>
          {/* <Tfoot>
            <Tr>
              <Th>To convert</Th>
              <Th>into</Th>
              <Th isNumeric>multiply by</Th>
            </Tr>
          </Tfoot> */}
        </Table>
      </TableContainer>
    </>
  );
}
