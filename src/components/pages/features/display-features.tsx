import { AspectRatio, Box, Flex, Grid, Heading, HStack, VStack, Image, Text, Button, Link } from "@chakra-ui/react"
import { ArrowButton } from "components/button"
import { SectionWithH2 } from "components/layouts/section"
import useCarousel from "functions/use-carousel"
import { graphql, useStaticQuery } from "gatsby"
import React from "react"

export function AllFeatureDisplay() {
  const { ref: carouselRef, scrollRight, scrollLeft } = useCarousel<HTMLDivElement>()
  const data = useStaticQuery(graphql`
    query {
      pages: allSitePage(filter: {path: {regex: "^/fitur/"}}) {
        edges {
          node {
            path
            context {
              frontmatter {
                summary
                title
                icon {
                  src
                  width
                }
              }
            }
          }
        }
      }
    }
  `)
  const features: {
    summary: string
    title: string
    icon: { src: string, width: string }
    path: string
  }[] = data.pages?.edges?.map?.(edge => ({ ...edge.node.context.frontmatter, path: edge.node.path}))

  return (
    <SectionWithH2 
      title="Fitur Lainnya"
      onKeyDown={(e) => { 
        e.code === 'ArrowRight' ? 
          scrollRight() :
          scrollLeft()
      }}
    >
      <Grid templateColumns="1fr auto 1fr" columnGap={5} alignItems="center">
        <ArrowButton 
          variant="brand-rounded" aria-label="scroll-left" direction="left"
          onClick={() => scrollLeft() }
        />
        <HStack 
          alignItems="stretch" p={3} overflow="hidden"
          cursor="grab" ref={carouselRef} transition="all 0.25s ease 0s"
          sx={{
            '&': {
              scrollSnapType: 'x mandatory',
              scrollBehavior: 'smooth'
            },
            '&[data-is-dragged] *': {
              cursor: "grabbing",
              userSelect: "none"
            }
          }}
        >{ 
          features.map?.(data => (
            <Box 
              flexGrow={0} width={`${100/3}%`} flexShrink={0} 
              transition="all 0.25s ease 0s" px={2} 
              sx={{ '&': { scrollSnapAlign: 'start' } }}
            >
              <VStack bgColor="green.50" px={10} py={10} spacing={5} shadow="md" height="100%">
                <Heading as="span" size="md">{data.title}</Heading>
                <AspectRatio ratio={1} width="65%">
                  <Flex bgColor="white" rounded="full" shadow="inner">
                    <Image src={data.icon.src} width={data.icon.width}/>
                  </Flex>
                </AspectRatio>
                <Text fontSize="sm" height="auto" flexGrow={1}>{data.summary}</Text>
                <Button as="a" variant="brand-rounded" href={data.path}>
                  Lihat Fitur
                </Button>
              </VStack>
            </Box>
          ))
        }
        </HStack>
        <ArrowButton 
          variant="brand-rounded" aria-label="scroll-right" direction="right"
          onClick={() => scrollRight() }
        />
      </Grid>
    </SectionWithH2>
  )
}