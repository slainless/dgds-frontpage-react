import { Box, HStack, VStack, Text, Flex, Heading, Grid, Image } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import _ from "lodash";
import { SectionWithH2 } from "components/layouts/section";

type Stat = { name: string, number: number, iconSrc: string }
export default function StatisticSection({ data }: { data: Stat[] }) {
  console.log(data)
  return (
    <SectionWithH2 id="pengguna" title="Pengguna Aktif">
      <Grid templateColumns="repeat(3, 1fr)" width="100%">{ 
        data.map?.((stat, index) => 
        (
          <VStack key={index}>
            <Flex justifyContent="center">
              <Image src={stat.iconSrc} width="50%"/>
            </Flex>
            <Heading as="span" fontSize="5xl" fontWeight="bold" fontFamily="monospace">{stat.number}</Heading>
            <Heading as="span" fontSize="2xl">{stat.name}</Heading>
          </VStack>
        )
      )}
      </Grid>
    </SectionWithH2>
  )
}