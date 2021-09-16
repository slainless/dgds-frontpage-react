import { HStack, Link } from "@chakra-ui/layout";
import { NavBarLink } from "components/button";
import _ from "lodash";
import React, { useEffect, useState } from "react";
import { FeaturesMenu } from "./features-menu";

export default function NavBar() {
  const [bestMatch, setBestMatch] = useState(-1)
  const routes = [
    {
      component: NavBarLink,
      href: '/',
      string: 'Beranda'
    },
    {
      component: FeaturesMenu,
      href: '/fitur',
      string: 'Fitur'
    },
    {
      component: NavBarLink,
      href: '/artikel',
      string: 'Artikel'
    },
    {
      component: NavBarLink,
      href: '/kontak',
      string: 'Kontak'
    },
  ]
  
  useEffect(() => {
    const url = document.URL.replace(document.location.origin, '')
    const bestMatch = routes
      .map((route, index) => ({ 
        index,
        match: (url.length - url.replace(route.href, '').length) / url.length * 100
      }))
      .reduce((a, b) => (b.match >= a.match) ? b : a)
    setBestMatch(bestMatch.index ?? 0)
  }, [])

  return (
    <HStack spacing={0}>{
      routes.map((route, index) => (
        <route.component match={index === bestMatch} href={route.href} key={index}>
          { route.string }
        </route.component>
      ))
    }
    </HStack>
  )
}