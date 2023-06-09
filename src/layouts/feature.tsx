import { Flex, Heading, ListItem, UnorderedList, VStack, Text } from "@chakra-ui/react"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { DoubleSection } from "components/layouts/section"
import { isElement } from "functions/mdx-traverser"
import _ from "lodash"
import React, { ReactElement } from "react"
import { ReactNode } from "react"
import MainLayout from "./main"
import { AllFeatureDisplay } from "components/pages/features/display-features"
import { GeneralProcessor } from "functions/mdx-processor"

function Processor({ children }: { children: ReactNode }) {
  return (
    <GeneralProcessor
      extend={{
        'feature-section': (props) => {
          const children = React.Children.toArray(props.children)
          const [imgParent, contents] = _.partition(children, 
            (child) => isElement('feature-image', child)
          )

          return (
            <DoubleSection pt={12} pb={6}
              leftColumn={
                <VStack justifyContent="center" alignItems="flex-start">
                  { contents }
                </VStack>
              }
              rightColumn={
                <Flex position="relative" justifyContent="center" width="100%" alignItems="center" sx={{
                  '& > *': {
                    width: '100%'
                  }
                }}>
                  { imgParent[0]?.props?.children }
                </Flex>
              }
              sx={{
                '&:first-of-type': { height: "100vh" },
                '&:nth-of-type(even) > :first-of-type': { gridColumn: 2 },
                '&:nth-of-type(even) > :last-of-type': { gridColumn: 1 },
              }}
            />
          )
        },
        'h1': (props) => (
          <Heading 
            as="h1" bgColor="black" color="white" px={7} py={2} rounded="lg" {...props}
            mb={5}
          />
        ),
        'h2': (props) =>
          <Heading as="h2" color="brand.700" textAlign="center" size="xl" {...props}/>,
        'h3': (props) => <Heading as="h3" size="lg" {...props}/>
      }}
      children={children}
    />
  )
}

export default function FeatureLayout(props) {
  const { children } = props
  return (
    <MainLayout>
    {/* TODO: different wrapper for different MDX folder */}
      <Processor children={children}/>
      <AllFeatureDisplay/>
    </MainLayout>
  )
}