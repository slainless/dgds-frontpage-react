import { HStack, VStack, Box, BoxProps, Text, TextProps, Heading, Grid, Image, StackProps, Flex, Portal, Button, ImageProps } from "@chakra-ui/react";
import _ from "lodash";
import React, { RefObject, useEffect, useRef, useState } from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
} from "@chakra-ui/react"
import type { FocusableElement } from "@chakra-ui/utils";
import { ArrowButton } from "components/button";
import { SectionWithH2 } from "components/layouts/section";
import { PhotoCard } from "components/card";

type Data = {
  name: string
  title: string
  media: ImageProps
  content: string
}

export default function TestimonySection({ data }: { data: Data[] }) {
  const basicRem        = +window.getComputedStyle(document.documentElement).fontSize.replace('px', '')
  const [showIndex, setShowIndex] = useState<number>(-1)
  const initialRef                = useRef<(HTMLDivElement | null)[]>([])

  function changeShowIndex(to: number) {
    return () => {
      setShowIndex(
        to === -1 ? data.length -1 :
        to === data.length ? 0 : 
        to
      )
    }
  }
  
  return (
    <SectionWithH2 title="Testimonial">
      <Flex id="sponsor-content" flexWrap="wrap" justifyContent="center">{
        data.map?.(({ name, title, media, content }, index) => (
          <Popover 
            isLazy onClose={() => setShowIndex(-1)} isOpen={index === showIndex}
            placement="right"
          >
            <PopoverTrigger>
              <Flex 
                flexBasis={`${100/6}%`} my={5} key={index}
                ref={el => initialRef.current[index] = el}
                justifyContent="center" alignItems="center" 
                onClick={() => { setShowIndex(index) }} 
                _focus={{
                  shadow: 'outline'
                }}
              >
                <PhotoCard 
                  alt={name} {...media}
                  width={36} height={48} objectPosition="50% 10px"
                  bgColor="green.100"
                  filter={showIndex === -1 ? "none" : index === showIndex ? "none" : "grayscale(100%)" }
                />
              </Flex>
            </PopoverTrigger>
            <Portal>
              <PopoverContent 
                width="xl" _focus={{ outline: "none" }} shadow="dark-lg"
                onKeyDown={(e) => { 
                  e.code === 'ArrowRight' ? 
                    changeShowIndex(index+1)() :
                    changeShowIndex(index-1)()
                }}
              >
                <PopoverArrow />
                <PopoverHeader as={Flex} justifyContent="space-between">
                  <ArrowButton aria-label="left-testimony" direction='left' onClick={changeShowIndex(index-1)}/>
                  <VStack spacing={0}>
                    <Text fontWeight="bold" fontSize={20}>{title}</Text>
                    <Text fontWeight="semibold" fontStyle="oblique">{name}</Text>
                  </VStack>
                  <ArrowButton aria-label="right-testimony" direction='right' onClick={changeShowIndex(index+1)}/>
                </PopoverHeader>
                <PopoverBody 
                  dangerouslySetInnerHTML={{ __html: content }}
                  p={5} fontSize="sm"
                />
              </PopoverContent>
            </Portal>
          </Popover>
        ))
      }
      </Flex>
    </SectionWithH2>
  )
}