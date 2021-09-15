import { HStack, Link } from "@chakra-ui/layout";
import { NavBarLink } from "components/button";
import _ from "lodash";
import React from "react";
import { FeaturesMenu } from "./features-menu";

export default function NavBar() {
  const url = document.URL.replace(document.location.origin, '')
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
  ].map(route => ({
    ...route, 
    match: (url.length - url.replace(route.href, '').length) / url.length * 100
  }))
  const bestMatch = routes.reduce((a, b) => b.match >= a.match ? b : a)

  return (
    <HStack spacing={0}>{
      routes.map((route, index) => (
        <route.component match={route === bestMatch} href={route.href} key={index}>
          { route.string }
        </route.component>
      ))
    }
    </HStack>
  )
}