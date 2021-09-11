import { Heading, VStack, HStack, Button } from "@chakra-ui/react";
import React from "react";

export default function TitleSection() {
  return (
  <VStack id="title"
    height="100vh" mx="calc(var(--page-px) * -1)"
    bgImage="https://digitaldesa.id/templates/homepage/media/bg/bg-landing5.jpg" bgSize="cover"
    alignItems="center" justifyContent="center"
  >
    <Heading as="h1" fontSize="6xl" fontWeight="bold" 
      rounded="xl" shadow="xl" px={10} py={2}
      textTransform="uppercase" bgColor="whiteAlpha.700"
    >
      Transformasi Digital Desa
    </Heading>
    <Heading as="span" fontSize="lg" fontWeight="medium"
      color="white"
    >
      Perluas Jangkauan, lakukan percepatan pelayanan dengan <em>Smart System</em> yang terintegrasi
    </Heading>
    <HStack pt='5' spacing={5}>
      <Button variant="brand-rounded" boxShadow="outline">Request Demo</Button>
      <Button variant="alt-rounded">Coba Gratis</Button>
    </HStack>
  </VStack>
  )
}