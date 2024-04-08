import { Heading, Text, VStack } from "@chakra-ui/react";

const Index = () => {
  return (
    <VStack spacing={4} p={8}>
      <Heading as="h1" size="2xl">
        Tech Bro Dating
      </Heading>
      <Text fontSize="xl">Swipe on tech bros near you!</Text>
    </VStack>
  );
};

export default Index;
