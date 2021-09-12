import { Box, BoxProps, HStack, VStack, Text, HeadingProps, Heading, TextProps, Flex, Grid, Image, ImageProps } from "@chakra-ui/react";
import { SectionWithH2 } from "components/layouts/section";
import _ from "lodash";
import React, { useEffect, useState } from "react";

type Data = {
  title: string
  content: string
  iconSrc: string
  media: ImageProps
}
export default function SolutionSection({ data }: { data: Data[] }) {
  const [showIndex, setShowIndex] = useState<number>(0)
  const interval = 5000
  useEffect(() => {
    const loopMoving = setTimeout(() => {
      if(showIndex === data.length - 1) setShowIndex(0)
      else setShowIndex(showIndex + 1)
    }, interval)
    
    return () => { clearTimeout(loopMoving) }
  }, [showIndex])

  return (
  <SectionWithH2 id="solusi" title="Solusi yang Kami Berikan">
    <Grid 
      templateColumns="23% auto 23%" templateRows="repeat(3, 1fr)"
      rowGap={6} columnGap={6}
    >
      <Flex 
        gridColumn="2" gridRow="1/span 3" 
        justifyContent="center" alignItems="center"
      >{ 
        data.map?.((data, index) => (
          <Image 
            {...data.media} display={index === showIndex ? 'flex' : 'none'}
            key={data.title + 'icon'}
          />
      ))}
      </Flex>{ 
        data.map?.((data, index) => (
          <Box 
            key={data.title}
            data-active={index === showIndex ? true : null}
            onClick={() => setShowIndex(index)}
            width="100%" p={5} shadow="lg" bgColor="gray.50"
            borderTop='3px solid transparent'
            _hover={{
              transform: "scale(1.1)"
            }}
            sx={{
              '&[data-active]': {
                borderTopColor: 'green.500',
                transform: 'scale(1.1)'
              },
              '&[data-active] h4': {
                fontWeight: 'bold'
              }
            }}
          >
            <HStack width="100%" pb={3} alignItems="center">
              <Box width={14} mr={5}>
                <Image src={data.iconSrc}/>
              </Box>
              <Text as="h4" textAlign="center" fontWeight="semibold">{data.title}</Text>
            </HStack>
            <Text fontSize="xs">{data.content}</Text>
          </Box>
      ))}
    </Grid>
  </SectionWithH2>)
}