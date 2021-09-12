import React, { useEffect, useState } from "react";
import { Flex, HStack, Spacer } from "@chakra-ui/layout";
import { Link, Image } from "@chakra-ui/react";
import NavBar from "./navbar";

export default function Header() {
  const denseMinY = 175
  const isShouldTransparent = ['/', '/kontak'].includes(document.URL.replace(document.location.origin, ''))
  const [isDense, setDense] = useState(window.scrollY >= denseMinY)
  const [isTransparent, setTransparent] = useState(false)

  window.addEventListener('scroll', () => {
    if(window.scrollY >= denseMinY && isDense === false)
      setDense(true)

    else if(window.scrollY < denseMinY && isDense)
      setDense(false)
  })

  useEffect(() => {
    console.log(isDense)
    if(isDense === false && isShouldTransparent) setTransparent(true)
    else setTransparent(false)
  }, [isDense])

  return (
    <Flex as="header" bgColor="brand.600" shadow="lg"
      data-transparent={isTransparent ? true : null}
      data-dense={isDense ? true : null}
      position="fixed" width="full" zIndex="docked"
      sx={{
        '&[data-transparent]': {
          bgColor: 'blackAlpha.400',
          // bgColor: 'whiteAlpha.00',
          shadow: 'md',
          backdropFilter: 'auto',
          backdropBlur: 'lg'
        },
        // '&[data-transparent] #digides-logo': {
        //   bgColor: 'blackAlpha.300',
        //   px: 5
        // },
        // '&::before': {
        //   content: '""',
        //   position: 'fixed',
        //   zIndex: 'hide',
        //   width: '100%',
        //   height: '100%',
        //   bgColor: 'brand.700',
        //   opacity: 0.2,
        //   mx: 'calc(var(--page-px) * -1)'
        // }
      }}
    >
      <Flex as={Link} href="/" width={36} sx={{ '[data-dense] > &': { width: 32 } }}>
        <Image id="digides-logo" src="https://digitaldesa.id/templates/homepage/media/logo/neo-logo-digides.svg"
        width="100%"/>
      </Flex>
      <Spacer/>
      <NavBar/>
    </Flex>
  )
}