import { Flex, Heading, HStack, ListItem, UnorderedList, VStack, Text, Link, Image, Container, Icon, OrderedList } from "@chakra-ui/react"
import { Table, Thead, Tbody, Th, Tr, Td } from '@chakra-ui/react'
import { DoubleSection } from "components/layouts/section"
import { isElement } from "functions/mdx-traverser"
import _ from "lodash"
import React, { ReactElement } from "react"
import { ReactNode } from "react"
import { Replacer } from "react-element-replace"
import MainLayout from "./main"
import { DateTime } from 'luxon'
import { FacebookButton, TwitterButton, WhatsappButton } from "components/button"
import { RiCalendar2Fill } from 'react-icons/ri'
import { GeneralProcessor } from "functions/mdx-processor"

export default function PostLayout(props) {
  const { children } = props
  const { frontmatter } = props.pageContext
  console.log(props)
  return (
    <MainLayout pt={32} pb={24}>
      <Container maxW="container.lg">
        <Heading 
          as="h1" children={frontmatter.title}
          size="xl" mb={3}
        />
        <HStack mb={10}>
          <Text fontFamily="heading" fontSize="lg" color="gray">
            <Icon as={RiCalendar2Fill} mr={2} boxSize={6}/>
            {DateTime.fromISO(frontmatter.date).setLocale('in-ID').toFormat('cccc, d LLLL y')}
          </Text>
        </HStack>
        <Flex justifyContent="center" alignItems="center" mb={10}>
          <Image {...frontmatter.headerimage} shadow="md" rounded="lg"/>
        </Flex>
        
        <GeneralProcessor children={children}/>
        <VStack 
          mt={8} pt={8} alignItems="flex-start" spacing={5} borderTop="2px solid" 
          borderTopColor="blackAlpha.200"
        >
          <Heading as="span" size="md">Bagikan</Heading>
          <HStack>
            <FacebookButton rounded="full"/>
            <TwitterButton rounded="full"/>
            <WhatsappButton rounded="full"/>
          </HStack>
          <Heading as="span" size="md">Tag</Heading>
          <HStack>{ frontmatter.tags.map(tag => (
            <Text px={2} py={1} bgColor="black" color="white" rounded="lg">{tag}</Text>
          ))}
          </HStack>
        </VStack>
      </Container>
    </MainLayout>
  )
}