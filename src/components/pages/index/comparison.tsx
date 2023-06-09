import { HStack, VStack, Box, BoxProps, Text, TextProps, Heading, Grid, Image, StackProps, Flex } from "@chakra-ui/react";
import { SectionWithH2 } from "components/layouts/section";
import _ from "lodash";
import React, { Fragment, useState } from "react";
import { mdx } from '@mdx-js/react'
import marked from "marked";
import { DynamicImage } from 'components/image';
import { getImage } from 'gatsby-plugin-image';

const VStackTemplate = (props: Omit<StackProps, 'children'> & {
  title: string, content: string
}) => {
  const content = marked(props.content)
  return(
    <VStack 
      key={props.title + '0'} spacing={2} px={8} py={4} rounded="lg" shadow="base"
      alignItems="flex-start" justifyContent="center" 
      {..._.omit(props, ['children', 'title', 'content'])}
    >
      <Heading 
        children={props.title} as="h4" pb={2} size="md"
        bgColor="whiteAlpha.800" verticalAlign="middle" p={2} rounded="lg"
      />
      <Box dangerouslySetInnerHTML={{ __html: content }} fontSize="md"/>
    </VStack>
  )
}

type Data = {
  iconSrc: string,
  title: string,
  plus: string,
  min: string
  iconFile: any
}
export default function ComparisonSection({ data }: { data: Data[] }) {
  return (
    <SectionWithH2 id="manfaat" title="Manfaat Digides">
      <Grid 
        templateRows="repeat(4, auto)" templateColumns="1fr auto 1fr"
        rowGap={6} columnGap={16}
      >
        <>
          <Text as="h4" color="red.700" textStyle="section">Tanpa Digides</Text>
          <Text as="h4" visibility="hidden" textStyle="section">Spacer</Text>
          <Text as="h4" textStyle="section">Dengan Digides</Text>
        </>
        { data.map?.(({ title, iconSrc, iconFile, plus, min }, index) => {
          const image = getImage(iconFile)
          return <Fragment key={index}>
            <VStackTemplate 
              title={title} content={min}
              bgColor="red.100"
            />
            <Flex width="100%">
              <DynamicImage src={iconFile?.publicURL} image={image}/>
            </Flex>
            <VStackTemplate 
              title={title} content={plus}
              bgColor="brand.200"
            />
          </Fragment>
        }) }
      </Grid>
    </SectionWithH2>
  )
}