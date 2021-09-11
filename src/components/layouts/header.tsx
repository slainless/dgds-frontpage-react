import React from "react";
import { Flex, HStack, Spacer } from "@chakra-ui/layout";
import { Link, Image } from "@chakra-ui/react";

export default function Header() {
  return <Flex bgColor="brand.500">
    <Link href="/" width={36}>
      <Image href="https://digitaldesa.id/templates/homepage/media/logo/neo-logo-digides.svg"
      width="100%"/>
    </Link>
    <Spacer/>
    <HStack>
      <Link href="/">Beranda</Link>
      <Link href="/">Fitur</Link>
      <Link href="/artikel">Artikel</Link>
      <Link href="/kontak">Kontak</Link>
    </HStack>
  </Flex>
}