import { Box, HStack, VStack, Text, Flex, Heading, Grid, Image } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Section, SectionWithH2 } from "../Layout";
import _ from "lodash";
import useFetchHJSON from "States/useFetchHJSON";

const Stack = (props: Stat) => (
  <VStack>
    <Flex justifyContent="center">
      <Image src={props.iconSrc} width="50%"/>
    </Flex>
    <Heading as="span" fontSize="5xl" fontWeight="bold" fontFamily="monospace">{props.number}</Heading>
    <Heading as="span" fontSize="2xl">{props.name}</Heading>
  </VStack>
)

type Stat = { name: string, number: number, iconSrc: string }
export default function StatisticSection() {
  const [statistics, setStatistics] = useState<Stat[]>([])
  useEffect(() => {
    useFetchHJSON<Stat[]>('/docs/stat.hjson')
      .then(([hjson, parsed]) => setStatistics(parsed))
  }, [])

  return (
    <SectionWithH2 id="pengguna" title="Pengguna Aktif">
      <Grid templateColumns="repeat(3, 1fr)" width="100%">
        { statistics.map(stat => <Stack key={_.kebabCase(stat.name)} {...stat}/>) }
      </Grid>
    </SectionWithH2>
  )
}