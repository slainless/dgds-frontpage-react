import { Box, VStack, Text, Image, Button, Flex, ListItem, UnorderedList, List, ListIcon, ListItemProps } from "@chakra-ui/react";
import { PlayButton } from "Components/Button";
import { HiBadgeCheck } from 'react-icons/hi'
import _ from "lodash";
import React from "react";
import { DoubleSectionWithH2 } from "components/layouts/section";

function ListItemWithIcon(props: ListItemProps) {
  return (
    <ListItem 
      display="flex" alignItems="center" ml={5} 
      {..._.omit(props, 'children')}
    >
      <ListIcon as={HiBadgeCheck} color="orange.300" width={8} height={8} mr={10}/>
      <Text as="span">{ props.children }</Text>
    </ListItem>
  )
}

export default function BenefitSection() {
  return (
    <DoubleSectionWithH2 
      id="keuntungan" title="Fitur Lengkap dan Mudah Digunakan"
      leftColumn={
        <>
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
        </>
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