import { Button, ButtonProps, Box, LinkProps, IconButton, IconButtonProps, CSSObject, Link } from "@chakra-ui/react";
import { RiArrowLeftLine, RiArrowRightLine, RiFacebookLine, RiInstagramLine, RiTwitterLine, RiWhatsappLine, RiPlayCircleLine } from 'react-icons/ri'
import React from "react";
import _ from "lodash";

export function ArrowButton(props: Parameters<typeof IconButton>[0] & {
  direction: 'left' | 'right'
}) {
  return (<IconButton aria-label={props["aria-label"]} variant="outline"
    icon={ props.direction == 'left' ? <RiArrowLeftLine/> : <RiArrowRightLine/>}
    {..._.omit(props, ['direction', 'aria-label'])}/>)
}


function BrandIconButton(props: Parameters<typeof IconButton>[0]) {
  return (<IconButton {...props}
  sx={{
    '& svg': { width: 6, height: 6 },
    ...props.sx
  }}/>)
}

export function FacebookButton(props: Omit<Parameters<typeof IconButton>[0], 'aria-label'>) {
  return (<BrandIconButton variant="solid" aria-label="facebook" 
  colorScheme="facebook" icon={<RiFacebookLine/>}
  {..._.omit(props, ['aria-label'])}
  />)
}

export function InstagramButton(props: Omit<Parameters<typeof IconButton>[0], 'aria-label'>) {
  return (<BrandIconButton variant="solid" aria-label="instagram" 
  bg="radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)"
  color="white" icon={<RiInstagramLine/>}
  transition="all 0.2s linear"
  bgRepeat="repeat" bgSize="100% 90px" bgPosition="0 -20px"
  _hover={{
    bgPosition: '0 0'
  }}
  _active={{
    bgPosition: '0 -40px'
  }}
  {..._.omit(props, ['aria-label'])}
  />)
}

export function TwitterButton(props: Omit<Parameters<typeof IconButton>[0], 'aria-label'>) {
  return (<BrandIconButton variant="solid" aria-label="twitter" 
  colorScheme="twitter" icon={<RiTwitterLine/>}
  {..._.omit(props, ['aria-label'])}
  />)
}

export function WhatsappButton(props: Omit<Parameters<typeof IconButton>[0], 'aria-label'>) {
  return (<BrandIconButton variant="solid" aria-label="whatsapp" 
  colorScheme="whatsapp" icon={<RiWhatsappLine/>}
  {..._.omit(props, ['aria-label'])}
  />)
}


export function PlayButton(props: IconButtonProps) {
  return <BrandIconButton icon={<RiPlayCircleLine/>} rounded="full" {...props}
  sx={{
    '& svg': {
      width: 'full',
      height: 'full',
      transform: 'scale(1.18)'
    }
  }}/>
  // 
  // minWidth={0} padding={0}
  // 
  // width="22px" height="22px"
  // border="2px solid" borderRadius="20px"
  // bgColor="whiteAlpha.500"
  // color="whiteAlpha.800"
  // _hover={{
  //   color: "white",
  //   bgColor: "green.500"
  // }}
  // sx={{
  //   "&::before": {
  //     content: '""',
  //     display: "block",
  //     boxSizing: "border-box",
  //     position: "absolute",
  //     width: 0,
  //     height: "10px",
  //     borderTop: "5px solid transparent",
  //     borderBottom: "5px solid transparent",
  //     borderLeft: "6px solid",
  //     top: "4px",
  //     left: "7px"
  //   }
  // }}
  // {...props}>
  // </IconButton>
}

export function NavBarLink(props: Parameters<typeof Link>[0] & { match: boolean }) {
  const { match, href, _hover, _activeLink, sx, ...rest } = props
  return (
    <Link px={7} py={4}
      color="white" fontWeight="medium"
      borderBottom="3px solid" borderBottomColor="transparent"
      _hover={{ 
        color: "brand.100", 
        borderBottomColor: "blackAlpha.500", 
        bgColor: 'blackAlpha.200',
        ..._hover
      }}
      _activeLink={{ 
        color: 'white',
        bgColor: 'blackAlpha.300',
        borderBottomColor: 'blackAlpha.500',
        fontWeight: 'bold',
        ..._activeLink
      }}
      _active={{
        bgColor: 'blackAlpha.400',
        borderBottomColor: 'blackAlpha.500'
      }}
      sx={{
        'header[data-transparent] &:hover': {
          color: 'brand.100', borderBottomColor: 'brand.100'
        },
        'header[data-transparent] &[data-active]': {
          color: 'brand.100', borderBottomColor: 'brand.100'
        },
        'header[data-transparent] &[aria-current=page]': {
          color: 'alt.300', borderBottomColor: "alt.300", 
        },
        'header[data-dense] &': { py: 3 },
        ...sx
      }}
      aria-current={match ? 'page' : false}
      href={match ? null : href}
      {...rest}
    />
  )
}