import { Box, VStack, Text, Image, Button, Heading } from "@chakra-ui/react";
import { PlayButton } from "components/button";
import { DoubleSection, DoubleSectionWithH2 } from "components/layouts/section";
import React from "react";
import { StaticImage } from 'gatsby-plugin-image'

export default function FeatureSection() {
  return (
    <DoubleSectionWithH2 
      id="fitur" title="Fitur Digides"
      leftColumn={
        <Text>
          Berbagai fitur aplikasi desa gratis untuk menghilangkan kesenjangan teknologi di desa. 
          Berbagai macam layanan dalam satu platform DIGIDES yang juga berdasar pada UU Desa dan Permendagri
        </Text>
      }
      rightColumn={
        <Box position="relative">
          <Box sx={{ '& > *': { rounded: 'xl' }}} as="span">
            <StaticImage 
              src="../../../images/solusiDigitalBG.png"
            />
          </Box>
          <PlayButton 
            position="absolute" aria-label="Play video"
            top="50%" left="50%"
            transform="translate(-50%, -50%) scale(2)"
            _hover={{
              color: "white",
              bgColor: "green.500"
            }}
            _active={{
              color: "white",
              bgColor: "orange.300"
            }}
            bgColor='whiteAlpha.500'
            color='whiteAlpha.800'
          />
        </Box>
      }
    />
  )
}