import { Box, BoxProps, Flex, Grid, GridItem, GridProps, Heading, VStack } from "@chakra-ui/react"
import _ from "lodash"
import React from "react"

export function Section(props: BoxProps) {
  return <Box as="section" py={24} {...props}/>
}

export function SectionWithH2(props: BoxProps & { title: string }) {
  return (
    <Section {..._.omit(props, 'children')}>
      <Heading children={props.title} color="brand.700" textAlign="center" pb={12}/>
      { props.children }
    </Section>
  )
}

export function DoubleSection(props: Omit<GridProps, 'children'> & {
  leftColumn?: React.ReactNode,
  rightColumn?: React.ReactNode
}) {
  return (
    <Grid 
      templateColumns="repeat(2, 1fr)" gap={12} py={16} as="section"
      {..._.omit(props, ['children', 'leftColumn', 'rightColumn', 'swap'])}
    >
      <GridItem as={Flex} gridRow={1}>{props.leftColumn}</GridItem>
      <GridItem as={Flex} gridRow={1}>{props.rightColumn}</GridItem>
    </Grid>
  )
}

export function DoubleSectionWithH2(props: Parameters<typeof DoubleSection>[0] & {
  title: string
}) {
  
  return (
    <DoubleSection
      {..._.omit(props, ['leftColumn'])}
      leftColumn={
        <VStack justifyContent="center" alignItems="flex-start">
          <Heading children={props.title} color="brand.700" textAlign="left"/>
          {props.leftColumn}
        </VStack>
      }
    />
  )
}