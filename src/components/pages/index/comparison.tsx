import { HStack, VStack, Box, BoxProps, Text, TextProps, Heading, Grid, Image, StackProps, Flex } from "@chakra-ui/react";
import { SectionWithH2 } from "components/layouts/section";
import _ from "lodash";
import React from "react";

const Data: {
  iconHref: string,
  title: string,
  content: [left: string, right: string]
}[] = [
  { 
    title: 'Jangkauan', 
    iconHref: "https://digitaldesa.id/templates/homepage/media/misc/icon/jangkauan.svg",
    content: [
      'Pengenalan Potensi Desa sangat <strong>terbatas</strong>', 
      'Dengan promosi digital dapat <strong>menjangkau lebih banyak</strong> (tak terbatas)'
    ]
  },
  { 
    title: 'Kecepatan', 
    iconHref: "https://digitaldesa.id/templates/homepage/media/misc/icon/kecepatan.svg",
    content: [
      '<strong>30 Menit</strong> s/d <strong>1 → 4 hari</strong>', 
      '<strong>+1-5 Menit</strong>'
    ]
  },
  { 
    title: 'Kecerdasan', 
    iconHref: "https://digitaldesa.id/templates/homepage/media/misc/icon/kecerdasan.svg",
    content: [
      '<strong>Data kacau</strong> dan butuh <em>SDM yang mengerti semuanya</em>', 
      '<strong>Smart System<strong>'
    ]
  },
]

export function Card(props: BoxProps & {
  title: string,
  content: string
}) {
  return (
    <Box {..._.omit(props, 'children')}
    width="100%" p={5} bgColor="yellow">
      <Heading children={props.title} as="h4" pb={2} size="md"/>
      <Text children={props.content} fontSize="md"/>
    </Box>
  )
}

const VStackTemplate = (props: Omit<StackProps, 'children'> & {
  title: string, content: string
}) => (
  <VStack key={props.title + '0'} spacing={2} px={8} py={4} rounded="lg" shadow="base"
  alignItems="flex-start" justifyContent="center" {..._.omit(props, ['children', 'title', 'content'])}>
    <Heading children={props.title} as="h4" pb={2} size="md"
    bgColor="whiteAlpha.800" verticalAlign="middle" p={2} rounded="lg"/>
    <Text dangerouslySetInnerHTML={{ __html: props.content }} fontSize="md"/>
  </VStack>

)
export default function ComparisonSection() {
  const Elements: JSX.Element[] = []
  for(const { title, iconHref, content } of Data) {
    const icon = <Flex width="100%" key={iconHref}><Image src={iconHref}/></Flex>

    Elements.push(
      <VStackTemplate title={title} content={content[0]}
      bgColor="orange.200" key={title + '0'}/>
    )
    Elements.push(icon)
    Elements.push(
      <VStackTemplate title={title} content={content[1]}
      bgColor="green.200" key={title + '1'}/>
    )
  }

  return (
    <SectionWithH2 id="manfaat" title="Manfaat Digides">
      <Grid 
      templateRows="repeat(4, auto)" templateColumns="1fr auto 1fr"
      rowGap={6} columnGap={16}>
        <>
          <Heading>Tanpa Digides</Heading>
          <Heading visibility="hidden">Spacer</Heading>
          <Heading>Dengan Digides</Heading>
        </>
        { Elements }
      </Grid>
    </SectionWithH2>
  )
}