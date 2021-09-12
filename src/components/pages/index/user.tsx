import { Box, Flex, VStack, Text, HStack, Heading, Image, useDisclosure, Button } from "@chakra-ui/react";
import React, { SyntheticEvent, useEffect, useState } from "react";
import _ from "lodash";
import { SectionWithH2 } from "components/layouts/section";

const getElementRect = (query: string): DOMRect =>
  document.querySelector(query)!.getBoundingClientRect().toJSON()

function observeResize(): Promise<[DOMRect, DOMRect]> {
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

type Data = { 
  iconSrc: string, 
  name: string, 
  number: number 
}
export default function UsedBySection({ data }: { data: Data[] }) {
  const { isOpen, onToggle }        = useDisclosure()

  function _onToggle(el: SyntheticEvent) {
    onToggle()
    observeResize()
      .then(([oldRect, newRect]) => {
        const oldTop = oldRect.top
        const newTop = newRect.top
        // if(newTop > 0)
        //   window.scrollBy(0, newTop - oldTop)
        // else
          window.scrollBy(0, newTop - oldTop)
      })
  }

  return (
    <SectionWithH2 id="digunakan" title="Telah digunakan oleh beberapa desa secara mandiri di">
      <VStack spacing={5}>
        <Flex id="digunakan-content" flexWrap="wrap" justifyContent="center">{ 
          data.map?.(({ iconSrc, name, number }, index) => (
            <VStack 
              flexBasis={`${100/6}%`} my={5} key={index}
              display={isOpen === false && index > 11 ? 'none' : 'flex'}
            >
              <Flex justifyContent="center" alignItems="center">
                <Image width="80%" src={iconSrc}/>
              </Flex>
              <Heading as='h4' size="md" textAlign="center">Kab. {name}</Heading>
              <Text>{number} Desa/Kelurahan</Text>
            </VStack>
          ))
        }
        </Flex>
        <Button
          variant={isOpen ? 'alt-rounded' : 'brand-rounded'}
          children={isOpen ? 'Sembunyikan' : 'Selengkapnya'}
          id="toggle-button" shadow="outline" onClick={_onToggle}
        />
      </VStack>
    </SectionWithH2>
  )
}