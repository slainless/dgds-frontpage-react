import { HStack, Link } from "@chakra-ui/layout";
import _ from "lodash";
import React from "react";

function NavBarLink(props: Parameters<typeof Link>[0]) {
  const match = props.href === document.URL.replace(document.location.origin, '')
  return (
    <Link px={7} py={4}
      color="white" fontWeight="medium"
      borderBottom="3px solid" borderBottomColor="transparent"
      _hover={{ 
        color: "brand.100", 
        borderBottomColor: "blackAlpha.500", 
        bgColor: 'blackAlpha.200',
        ...props._hover
      }}
      _activeLink={{ 
        color: 'white',
        bgColor: 'blackAlpha.300',
        borderBottomColor: 'blackAlpha.500',
        fontWeight: 'bold',
        ...props._activeLink
      }}
      sx={{
        'header[data-transparent] &:hover': {
          color: 'brand.100', borderBottomColor: 'brand.100'
        },
        'header[data-transparent] &[aria-current=page]': {
          color: 'alt.300', borderBottomColor: "alt.300", 
        },
        'header[data-dense] &': { py: 3 }
      }}
      aria-current={match ? 'page' : false}
      href={match ? null : props.href}
      {..._.omit(props, ['isActive', 'name', 'href'])}
    />
  )
}

function NavBarDropdown(props: {}) {

}

export default function NavBar() {
  return (
    <HStack spacing={0}>
      <NavBarLink href="/">Beranda</NavBarLink>
      <NavBarLink href="/fitur">Fitur</NavBarLink>
      <NavBarLink href="/artikel">Artikel</NavBarLink>
      <NavBarLink href="/kontak">Kontak</NavBarLink>
    </HStack>
  )
}