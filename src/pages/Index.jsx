import { Heading, Text, VStack, HStack, Image } from "@chakra-ui/react";

const techBroImage = "https://media.wired.com/photos/63d1cb0a453ec92ac3956227/master/w_2240,c_limit/Tech-Bro-Villains-Glass-Onion-Culture-KO2_20210825_50405_R_f.jpg";

const Index = () => {
  return (
    <VStack spacing={8} p={8} minHeight="100vh" backgroundImage={`url(${techBroImage})`} backgroundSize="cover" backgroundPosition="center">
      <HStack>
        <Image src={techBroImage} alt="Tech Bro" boxSize="50px" />
        <Heading as="h1" size="xl">
          Tech Bro Dating
        </Heading>
      </HStack>
      <Text fontSize="2xl">Swipe on tech bros near you!</Text>
      <Image src={techBroImage} alt="Tech Bro" boxSize="200px" />
    </VStack>
  );
};

export default Index;
