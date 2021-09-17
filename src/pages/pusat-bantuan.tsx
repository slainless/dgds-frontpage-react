import { 
  Heading, VStack, Input, InputGroup, InputLeftElement, Icon, Grid, Flex, Image, Text, AspectRatio, 
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  LinkOverlay,
  LinkBox,
  Spacer
} from "@chakra-ui/react"
import { GeneralProcessor } from "functions/mdx-processor"
import { isElement } from "functions/mdx-traverser"
import { graphql, useStaticQuery } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import GeneralPurposeLayout from "layouts/general-post"
import MainLayout from "layouts/main"
import React, { useState } from "react"
import { RiSearch2Line, RiSearchLine, RiSearchEyeLine } from "react-icons/ri"

function Processor({ children }) {
  return (
    <GeneralProcessor
      extend={{
        accordion: (props, tagName, item) => {
          const { children } = props
          if(children == null || Array.isArray(children) == false) {
            throw 'Accordion pada faq tidak boleh kosong dan kurang dari 2 elemen!'
          }

          const title = children.find(isElement('h2'))
          const contents = children.filter(child => child !== title)
          return (
            <AccordionItem width="full" border="none">
              <h2>
                <AccordionButton 
                  bgColor="gray.200" color="gray.800"
                  shadow="md" fontWeight="semibold"
                  fontFamily="heading"
                  fontSize="lg"
                  rounded="lg"
                  _hover={{
                    bgColor: 'gray.700',
                    color: 'white'
                  }}
                >
                  <Flex textAlign="left">
                    { title.props?.children }
                  </Flex>
                  <Spacer/>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel 
                pb={4}
                sx={{
                  '& p > img': {
                    textAlign: 'center',
                    margin: '0 auto'
                  }
                }}
              >
                { contents }
              </AccordionPanel>
            </AccordionItem>
          )
        }
      }}
      children={children}
    />
  )
}

export default function PrivacyPolicy({ children }) {
  const result = useStaticQuery(graphql`
    query {
      allMdx(filter: { fields: { group: { eq: "faq" }}}) {
        edges {
          node {
            body
            frontmatter {
              title
              summary
              icon {
                src
                width
              }
            }
          }
        }
      }
    }
  `)
  const data = result.allMdx.edges.map(edge => edge.node)

  const [showIndex, setShowIndex] = useState(0)
  return (
    <MainLayout pb={24}>
      <VStack 
        bgImage="https://digitaldesa.id/templates/homepage/media/bg/bg-landing5.jpg" 
        bgSize="cover" mx="calc(var(--page-px) * -1)" 
        // bgPosition="center"
        height="md"
        fontFamily="heading"
        alignItems="center" justifyContent="center"
      >
        <VStack
          bgColor="blackAlpha.600" p={10} rounded="xl"
          shadow="md"
          // backdropFilter="auto" backdropBlur="sm"
        >
          <Heading as="h1" color="white">Pusat Bantuan Digital Desa</Heading>
          <InputGroup
            backdropFilter="auto" backdropBlur="sm"
            sx={{
              '&:focus-within input': {
                color: 'white',
                bgColor: 'whiteAlpha.600'
              },
              '&:focus-within input::placeholder': {
                color: 'whiteAlpha.600'
              },
              '&:focus-within svg': {
                color: 'white'
              },
            }}
          >
            <InputLeftElement
              pointerEvents="none"
              children={<Icon as={RiSearchLine} boxSize={5}/>}
            />
            <Input 
              placeholder="Cari bantuan di sini..." variant="filled"
            />
          </InputGroup>
        </VStack>
      </VStack>
      <VStack pt={10} spacing={10}>
        <Heading as="h2" textStyle="section" size="lg">Kategori</Heading>
        <Grid 
          templateColumns="repeat(6, 1fr)" columnGap={7}
        >{ data.map?.(node => node.frontmatter).map((node, index) => (
          <VStack
            role="group"
            data-active={index === showIndex ? true : null}
            onClick={() => setShowIndex(index)}
            _hover={{
              cursor: 'pointer'
            }}
          >
            <Flex 
              justifyContent="center" alignItems="center" p={8}
              bgColor="gray.100" 
              rounded="xl" shadow="md"
              _groupHover={{
                transform: 'scale(1.1)',
                shadow: 'lg'
              }}
              _groupActive={{
                transform: 'scale(1.1)',
                shadow: 'lg',
                bgColor: 'brand.200'
              }}
            >
              <Image src={node.icon?.src}/>
            </Flex>
            <Heading as="span" textStyle="section" size="sm" pt={5}>{node.title}</Heading>
            <Text fontSize="xs">{node.summary}</Text>
          </VStack>
        ))}
        </Grid>
      </VStack>
      { data.map?.((node, index) => {
        const { title, summary, icon } = node.frontmatter
        return (
          <VStack mt={10} spacing={10} display={showIndex === index ? 'flex' : 'none'}>
            <Heading as="h2" textStyle="section" size="lg">{node.frontmatter.title}</Heading>
            <Accordion
              as={VStack}
              width="full" allowToggle={true}
              spacing={3}
            >
              <Processor>
                <MDXRenderer>
                  { node.body }
                </MDXRenderer>
              </Processor>
            </Accordion>
          </VStack>
        )
      }) 
      }
      
    </MainLayout>
  )
}