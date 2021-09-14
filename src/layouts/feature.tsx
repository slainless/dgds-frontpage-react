import { Flex, Heading, ListItem, UnorderedList, VStack } from "@chakra-ui/react"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { DoubleSection } from "components/layouts/section"
import { isElement } from "functions/MdxTraverser"
import _ from "lodash"
import React, { ReactElement } from "react"
import { ReactNode } from "react"
import { Replacer } from "react-element-replace"
import MainLayout from "./main"

function Processor({ children }: { children: ReactNode }) {
  return (
    <Replacer
      match={isElement(['double-section', 'h1', 'h2', 'h3', 'ul', 'li'])}
      replace={(item: ReactElement) => {
        const tagName = item.props.originalType
        const props   = _.omit(item.props, ['parentName', 'originalType', 'mdxType'])

        switch(tagName) {

          case 'double-section':
            const children = React.Children.toArray(item.props.children)
            const imgParent = children.find(child => {
              if(isElement('p', child))
                if(isElement('img', child.props.children))
                  return true
              return false
            }) as ReactElement | null
            const contents = children.filter(child => child !== imgParent)
            return (
              <DoubleSection pt={12} pb={6}
                leftColumn={
                  <VStack justifyContent="center" alignItems="flex-start">
                    { contents }
                  </VStack>
                }
                rightColumn={
                  <Flex position="relative" justifyContent="center" alignItems="center">
                    { imgParent?.props?.children }
                  </Flex>
                }
                sx={{
                  '&:first-of-type': { height: "100vh" },
                  '&:nth-of-type(even) > :first-of-type': { gridColumn: 2 },
                  '&:nth-of-type(even) > :last-of-type': { gridColumn: 1 },
                }}
              />
            )

          case 'h1':
            return (
              <Heading 
                as="h1" bgColor="black" color="white" px={7} py={2} rounded="full" {...props}
                mb={5}
              />
            )
          case 'h2':
            return <Heading as="h2" color="brand.700" textAlign="center" size="xl" {...props}/>
          case 'h3':
            return <Heading as="h3" size="lg" {...props}/>
          case 'ul':
            return (
              <UnorderedList 
                sx={{ 
                  '& li': { ml: 5 } 
                }} {...props}
              />
            )
          case 'li':
            return <ListItem {...props}/>

        }
        
        return item
      }}
    >
      { children }
    </Replacer>
  )
}

export default function Component(props) {
  const { children } = props
  return (
    <MainLayout>
    {/* TODO: different wrapper for different MDX folder */}
      <Processor children={children}/>
    </MainLayout>
  )
}