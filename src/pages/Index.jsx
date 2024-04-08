import { Heading, Text, VStack, HStack, Image } from "@chakra-ui/react";

const techBroImage = "https://example.com/tech-bro.jpg";

const Index = () => {
  return (
    <VStack spacing={8} p={8} minHeight="100vh" backgroundImage={techBroImage} backgroundSize="cover" backgroundPosition="center">
      <HStack>
        <Image src={techBroImage} boxSize="50px" />
        <Heading as="h1" size="xl">
          Tech Bro Dating
        </Heading>
      </HStack>
      <Text fontSize="2xl">Swipe on tech bros near you!</Text>
      <Image src={techBroImage} boxSize="200px" />
    </VStack>
  );
};

export default Index;
