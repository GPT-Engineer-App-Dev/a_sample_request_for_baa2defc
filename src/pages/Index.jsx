import { Box, Button, Container, FormControl, FormLabel, Input, Text, VStack, useToast } from "@chakra-ui/react";
import { useState } from "react";
import { FaPrint } from "react-icons/fa";

const Index = () => {
  const [formData, setFormData] = useState({
    email: "",
    sampleInfo: "",
  });
  const [uniqueNumber, setUniqueNumber] = useState(null);
  const toast = useToast();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const generateUniqueNumber = () => {
    return Math.floor(100000 + Math.random() * 900000).toString();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const generatedNumber = generateUniqueNumber();
    setUniqueNumber(generatedNumber);

    // TODO: Implement email automation to send form data and unique number to customer and samplerequest@cyklop.nl

    toast({
      title: "Form Submitted",
      description: "Your shipment tracking number has been generated.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  const handlePrintLabel = () => {
    // TODO: Implement print functionality for the shipping label
  };

  return (
    <Box bg="#002F5D" minH="100vh" color="white" py={10}>
      <Container maxW="container.md">
        <VStack spacing={4} as="form" onSubmit={handleSubmit}>
          <FormControl isRequired>
            <FormLabel>Email Address</FormLabel>
            <Input name="email" type="email" placeholder="Enter your email" onChange={handleInputChange} bg="white" color="black" />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Sample Information</FormLabel>
            <Input name="sampleInfo" placeholder="Enter sample information" onChange={handleInputChange} bg="white" color="black" />
          </FormControl>
          <Button type="submit" colorScheme="green" bg="#6CB42C" size="lg" leftIcon={<FaPrint />}>
            Submit
          </Button>
        </VStack>
        {uniqueNumber && (
          <Box mt={6} p={4} bg="white" color="black" borderRadius="md">
            <Text fontWeight="bold">Shipping Label:</Text>
            <Text>Cyklop CSC Att.: SampleLab M.Slot [{uniqueNumber}] Wilhelm Röntgenstraat 10, 8013NC, Zwolle, Nederland</Text>
            <Button mt={4} colorScheme="green" bg="#6CB42C" size="md" onClick={handlePrintLabel}>
              Print Shipping Label
            </Button>
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default Index;
