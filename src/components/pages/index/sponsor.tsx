import { Box, Flex, VStack, Text, HStack, Image } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import _ from "lodash";
import { SectionWithH2 } from "components/layouts/section";

type Data = { 
  name: string, 
  iconSrc: string 
}
export default function SponsorSection({ data }: { data: Data[] }) {
  return (
    <SectionWithH2 id="sponsor" title="Didukung Oleh">
      <Flex id="sponsor-content" flexWrap="wrap" justifyContent="center">{ 
        data.map?.(({ name, iconSrc }, index) => (
          <Flex 
            flexBasis={`${100/4}%`} my={5} key={index}
            justifyContent="center" alignItems="center"
          >
            <Image width="65%" alt={name} src={iconSrc}/>
          </Flex>
        ))
      }
      </Flex>
    </SectionWithH2>
  )
}