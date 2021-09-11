import { HStack, VStack, Box, BoxProps, Text, TextProps, Heading, Grid, Image, StackProps, Flex, Portal, Button } from "@chakra-ui/react";
import { H4 } from "Components/Heading";
import _ from "lodash";
import React, { RefObject, useEffect, useRef, useState } from "react";
import useFetchHTML, { Parser } from "States/useFetchReact";
import useFetchMarkdown from "States/useFetchMarkdown";
import { SectionWithH2 } from "../Layout";
import useFetchText from "States/useFetchText";
import { PhotoCard } from "Components/Card";
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
import { ArrowButton } from "Components/Button";

type Testimony = {
  name: string
  title: string
  img: HTMLImageElement
  testimony: string
}

export default function TestimonySection() {
  const basicRem        = +window.getComputedStyle(document.documentElement).fontSize.replace('px', '')
  const [data, setData] = useState<string>('')
  const [testimonies, setTestimonies] = useState<Testimony[]>([])
  const [showIndex, setShowIndex] = useState<number>(-1)
  const initialRef                = useRef<(HTMLDivElement | null)[]>([])
  useEffect(() => {
    useFetchText('/docs/testimony.htm')
      .then(res => { setData(res) })
  }, [])

  useEffect(() => {
    if(data === '') return
    let html        = document.createElement('template')
    html.innerHTML  = data
    html            = html.content.querySelector('testimonies')!

    if(html == null) throw 'Dimana tag <testimonies>?'
    const testimonies = Array.from(html.querySelectorAll('item'))
      .map((item, index) => {
        const name      = item.querySelector('person-name')?.textContent!
        const title     = item.querySelector('person-title')?.textContent!
        const img       = item.querySelector('person-photo') as HTMLImageElement
        const testimony = item.querySelector('testimony')?.innerHTML!

        if([name, title, img, testimony].some(_.isNil))
          throw `Cek person-name/title/photo & testimony di index ${index}! Salah satu hilang...`
        
        return { name, title, img, testimony }
      })

    setTestimonies(testimonies)
  }, [data])

  function changeShowIndex(to: number) {
    return () => {
      setShowIndex(
        to === -1 ? testimonies.length -1 :
        to === testimonies.length ? 0 : 
        to
      )
    }
  }
  
  return (<SectionWithH2 title="Testimonial">
    {/* <HStack spacing={0}> */}
      <Flex id="sponsor-content" flexWrap="wrap" justifyContent="center">
        {
        testimonies.map((item, index) => (<>
          <Popover isLazy onClose={() => setShowIndex(-1)} isOpen={index === showIndex}
          placement="right">
          {/* <Popover initialFocusRef={initialRef.current[index]! as unknown as RefObject<FocusableElement>}> */}
            <PopoverTrigger>
              <Flex flexBasis={`${100/6}%`} my={5} key={index}
              ref={el => initialRef.current[index] = el}
              justifyContent="center" alignItems="center" onClick={() => {
                setShowIndex(index)
              }} _focus={{
                shadow: 'outline'
              }}>
                <PhotoCard alt={item.name} src={item.img?.getAttribute('src')!}
                width={36} height={48} objectPosition="50% 10px"
                bgColor="green.100"
                filter={ 
                  showIndex === -1 ? "none" : 
                  index === showIndex ? "none" : "grayscale(100%)" }/>
              </Flex>
            </PopoverTrigger>
            <Portal>
              <PopoverContent width="xl" _focus={{ outline: "none" }} shadow="dark-lg"
              onKeyDown={(e) => { 
                e.code === 'ArrowRight' ? 
                  changeShowIndex(index+1)() :
                  changeShowIndex(index-1)()
              }}>
                <PopoverArrow />
                <PopoverHeader as={Flex} justifyContent="space-between">
                  <ArrowButton aria-label="left-testimony" direction='left' onClick={changeShowIndex(index-1)}/>
                  <VStack spacing={0}>
                    <Text fontWeight="bold" fontSize={20}>{item.title}</Text>
                    <Text fontWeight="semibold" fontStyle="oblique">{item.name}</Text>
                  </VStack>
                  <ArrowButton aria-label="right-testimony" direction='right' onClick={changeShowIndex(index+1)}/>
                </PopoverHeader>
                <PopoverBody dangerouslySetInnerHTML={{ __html: item.testimony }}
                p={5} fontSize="sm">
                </PopoverBody>
                {/* <PopoverFooter as={VStack}>
                </PopoverFooter> */}
              </PopoverContent>
            </Portal>
          </Popover>
        </>))
      }
      </Flex>
      {/* <HStack spacing={5}>
        {
          testimonies.map((item, index) => (<>
            <PhotoCard alt={item.name} src={item.img?.getAttribute('src')!}
            width={36} height={48} objectPosition="50% 10px" display={showIndex === index ? 'flex' : 'none'}/>
            <VStack key={index} display={showIndex === index ? 'flex' : 'none'}
            bgColor="gray.50" shadow="lg" rounded="xl" p={10}>
              <Text dangerouslySetInnerHTML={{ __html: item.testimony }}/>
              <Text fontWeight="bold" children={item.title}/>
              <Text fontWeight="semibold" fontStyle="oblique" children={item.name}/>
            </VStack>
          </>))
        }
      </HStack> */}
      
    {/* </HStack> */}
  </SectionWithH2>)
}