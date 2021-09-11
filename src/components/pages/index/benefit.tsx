import { Box, VStack, Text, Image, Button, Flex, ListItem, UnorderedList, List, ListIcon, ListItemProps } from "@chakra-ui/react";
import { PlayButton } from "Components/Button";
import { HiBadgeCheck } from 'react-icons/hi'
import { H2 } from "Components/Heading";
import _ from "lodash";
import React from "react";
import { DoubleSection } from "../Layout";

const ListItemWithIcon = (props: ListItemProps) => (
  <ListItem {..._.omit(props, 'children')} display="flex" alignItems="center"
  ml={5}>
    <ListIcon as={HiBadgeCheck} color="orange.300" width={8} height={8} mr={10}/>
    <Text as="span">{ props.children }</Text>
  </ListItem>
)
export default function BenefitSection() {
  return (
    <DoubleSection id="keuntungan"
    leftColumn={
      <VStack justifyContent="center" alignItems="flex-start">
        <H2 textAlign="left">Fitur Lengkap dan Mudah Digunakan</H2>
        <Text>
          Digides merupakan platform tata kelola desa yang menawarkan sejumlah layanan seperti sistem informasi 
          pembangunan desa, administrasi, kependudukan, pelayanan publik, anggaran, dan berbagai layanan lainnya.
        </Text>
        <List spacing={2}>
          <ListItemWithIcon>Mudah digunakan</ListItemWithIcon>
          <ListItemWithIcon>Terintegrasi antara Android dan Website</ListItemWithIcon>
          <ListItemWithIcon>Dapat berjalan secara online dan offline</ListItemWithIcon>
          <ListItemWithIcon>Mudah dalam memasukkan data</ListItemWithIcon>
          <ListItemWithIcon>Kompatibel dengan PRODESKEL</ListItemWithIcon>
          <ListItemWithIcon>Terintegrasi dengan IDM</ListItemWithIcon>
        </List>
      </VStack>
    }
    rightColumn={
      <Flex position="relative" justifyContent="center" alignItems="center">
        <Image src="https://digitaldesa.id/templates/homepage/media/misc/icon-landing/fiturlengkap2.svg"
        rounded="xl" width="60%"/>
      </Flex>
    }
    />
  )
}