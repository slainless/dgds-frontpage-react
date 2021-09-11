import { Box, Flex, VStack, Text, HStack, Heading, Image, useDisclosure, Button } from "@chakra-ui/react";
import React, { SyntheticEvent, useEffect, useState } from "react";
import { Section, SectionWithH2 } from "../Layout";
import _ from "lodash";
import useFetchHJSON from "States/useFetchHJSON";

const getElementRect = (query: string): DOMRect =>
  document.querySelector(query)!.getBoundingClientRect().toJSON()

function fixScroll(): Promise<[DOMRect, DOMRect]> {
  const el      = '#toggle-button'
  const target  = document.querySelector('#digunakan')!
  const oldRect = getElementRect(el)
  return new Promise(res => {
    const observer = new ResizeObserver(entries => {
      const newRect = getElementRect(el)
      res([oldRect, newRect])
      observer.disconnect()
    })
    observer.observe(target)
  })
}

type Regency = { logoSrc: string, regency: string, villageNum: number }
export default function UsedBySection() {
  const [regencies, setRegencies]   = useState<Regency[]>([])
  const { isOpen, onToggle }        = useDisclosure()

  function _onToggle(el: SyntheticEvent) {
    onToggle()
    fixScroll()
      .then(([oldRect, newRect]) => {
        const oldTop = oldRect.top
        const newTop = newRect.top
        // if(newTop > 0)
        //   window.scrollBy(0, newTop - oldTop)
        // else
          window.scrollBy(0, newTop - oldTop)
      })
  }

  useEffect(() => {
    useFetchHJSON<Regency[]>('/docs/user.hjson')
      .then(([hjson, parsed]) => setRegencies(parsed))
  }, [])

  return (
  <SectionWithH2 id="digunakan" title="Telah digunakan oleh beberapa desa secara mandiri di">
    <VStack spacing={5}>
      <Flex id="digunakan-content" flexWrap="wrap" justifyContent="center">{ 
        regencies.map((item, index) => (
          <VStack flexBasis={`${100/6}%`} my={5} key={index}
          display={isOpen === false && index > 11 ? 'none' : 'flex'}>
            <Flex justifyContent="center" alignItems="center">
              <Image width="80%" src={item.logoSrc}/>
            </Flex>
            <Heading as='h4' size="md" textAlign="center">Kab. {item.regency}</Heading>
            <Text>{item.villageNum} Desa/Kelurahan</Text>
          </VStack>
        ))
      }</Flex>
      {
        isOpen ?
          <Button variant="alt-rounded" children='Sembunyikan' id="toggle-button" shadow="outline" onClick={_onToggle}/> :
          <Button variant="brand-rounded" children='Selengkapnya' id="toggle-button" shadow="outline" onClick={_onToggle}/>
      }
    </VStack>
  </SectionWithH2>)
}