import React, { ReactElement } from "react";
import GeneralPurposeLayout from "layouts/general-post"
import { graphql, useStaticQuery } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { Replacer } from "react-element-replace";
import { isElement } from "functions/mdx-traverser";
import { Heading, OrderedList, UnorderedList, Text, Link, ListItem, Table, Tbody, Thead, Th, Tr, Td } from "@chakra-ui/react";
import _ from "lodash";
import { GeneralProcessor } from "functions/mdx-processor";

function Processor({ children }) {
  return (
    <GeneralProcessor
      extend={{
        h1: (props) => 
          (
            <Heading
              as="h1" mb={5} mt={10} size="xl" {...props}
              fontFamily="monospace" textAlign="center"
            />
          ),
        h2: (props) => 
          (
            <Heading 
              as="h2" mb={5} mt={10} size="lg" {...props}
              fontFamily="monospace"
              sx={{
                '&::before': {
                  counterIncrement: 'heading',
                  content: 'counter(heading) ". "',
                  
                }
              }}
            />
          )
      }}
      children={children}
    />
  )
}

export default function PrivacyPolicy({ children }) {
  const data = useStaticQuery(graphql`
    query {
      mdx(frontmatter: {id: {eq: "privacy-policy"}}) {
        body
      }
    }
  `)

  const { body } = data.mdx
  return (
    <GeneralPurposeLayout
      fontFamily="monospace"
      sx={{
        '&': {
          counterReset: 'heading'
        },
      }}
    >
      <Processor>
        <MDXRenderer>
          { body }
        </MDXRenderer>
      </Processor>
    </GeneralPurposeLayout>
  )
}