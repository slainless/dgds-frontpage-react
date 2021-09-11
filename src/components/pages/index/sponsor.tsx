import { Box, Flex, VStack, Text, HStack, Image } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Section, SectionWithH2 } from "../Layout";
import _ from "lodash";
import useFetchHJSON from "States/useFetchHJSON";

type Sponsor = { name: string, logoSrc: string }
export default function SponsorSection() {
  const [sponsors, setSponsors] = useState<Sponsor[]>([])
  useEffect(() => {
    useFetchHJSON<Sponsor[]>('/docs/sponsor.hjson')
      .then(([hjson, parsed]) => setSponsors(parsed))
  }, [])

  return (
  <SectionWithH2 id="sponsor" title="Didukung Oleh">
    <Flex id="sponsor-content" flexWrap="wrap" justifyContent="center">{ 
        sponsors.map((item, index) => (
          <Flex flexBasis={`${100/4}%`} my={5} key={index}
          justifyContent="center" alignItems="center">
            <Image width="65%" alt={item.name} src={item.logoSrc}/>
          </Flex>
        ))
      }</Flex>
  </SectionWithH2>)
}