import { Box, Flex, VStack, Text, HStack, Image } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import _ from "lodash";
import { SectionWithH2 } from "components/layouts/section";
import { DynamicImage } from 'components/image';
import { getImage } from 'gatsby-plugin-image';

type Data = { 
  name: string, 
  iconSrc: string
  iconFile?: any
}
export default function SponsorSection({ data }: { data: Data[] }) {
  return (
    <SectionWithH2 id="sponsor" title="Didukung Oleh">
      <Flex id="sponsor-content" flexWrap="wrap" justifyContent="center">{ 
        data.map?.(({ name, iconSrc, iconFile }, index) => {
          const image = getImage(iconFile)
          return <Flex 
            flexBasis={`${100/4}%`} my={5} key={index}
            justifyContent="center" alignItems="center"
          >
            {/* <Image alt={name} src={iconSrc}/> */}
            <DynamicImage width="65%" alt={name} image={image} src={iconFile?.publicURL}/>
          </Flex>
        })
      }
      </Flex>
    </SectionWithH2>
  )
}