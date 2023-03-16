import { Heading, UnorderedList, OrderedList, Text, Image, Link, ListItem, Box, Table, Tbody, Thead, Tr, Th, Td } from "@chakra-ui/react"
import _ from "lodash"
import React, { ReactElement, ReactNode } from "react"
import { Replacer } from "react-element-replace"
import { isElement } from "./mdx-traverser"

const createDefault = 
  (Component: (props) => JSX.Element) => 
  (props, tagName, item) => <Component {...props}/>

export function GeneralProcessor({ children, extend }: { 
  children: ReactNode,
  extend?: Record<string, (props, tagName?, item?) => JSX.Element> 
}) {
  const replacer = {
    h1: (props, tagName, item) =>
      <Heading as="h1" mb={5} mt={10} color="brand.700" textAlign="center" size="xl" {...props}/>,
    h2: (props, tagName, item) =>
      <Heading as="h2" mb={5} mt={10} color="brand.600" textAlign="center" size="lg" {...props}/>,
    h3: (props, tagName, item) =>
      <Heading as="h3" mb={5} mt={10} size="md" {...props}/>,
    ul: (props, tagName, item) =>
      (
        <UnorderedList fontSize="lg" 
          sx={{ 
            '& li': { 
              ml: 5,
              pl: 5,
              mt: 2
            } 
          }} {...props}
        />
      ),
    ol: (props, tagName, item) => 
      (
        <OrderedList fontSize="lg"
          sx={{ 
            '& li': { 
              ml: 5,
            } 
          }} {...props}
        />
      ),
    p: (props, tagName, item) =>
      (
        <Text 
          fontSize="lg" {...props}
          sx={{
            '& + p': {
              mt: 5
            }
          }}
        />
      ),
    a: createDefault(Link),
    li: createDefault(ListItem),
    table: createDefault(Table),
    tbody: createDefault(Tbody),
    thead: createDefault(Thead),
    th: createDefault(Th),
    tr: createDefault(Tr),
    td: createDefault(Td),
    span: createDefault(Box),
    div: createDefault(Box),
    mod: (props, tagName, item) => {
      return (
        <Replacer 
          match={isElement(props.pick)}
          replace={(item: ReactElement) => {
            const tagName = props.transformTo == null ? 
              props.pick : props.transformTo

            if(replacer[tagName] == null) return item
            return replacer[tagName]({
              ...props.children.props,
              ..._.omit(props, ['pick', 'transformTo', 'children']),
            }, tagName, item)
          }}
          children={props.children}
        />
      )
    },
    ...extend
  }

  return (
    <Replacer
      match={isElement(_.keysIn(_.omit(replacer, 'default')))}
      replace={(item: ReactElement) => {
        const tagName = item.props.originalType
        const props   = {
          ..._.omit(item.props, ['parentName', 'originalType', 'mdxType']),
          'data-original-type': item.props.originalType
        }

        if(replacer[tagName] == null) return item
        return replacer[tagName](props, tagName, item)
      }}
    >
      { children }
    </Replacer>
  )
}