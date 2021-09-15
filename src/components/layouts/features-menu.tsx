import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuIcon,
  MenuCommand,
  MenuDivider,
  Link
} from "@chakra-ui/react"
import { NavBarLink } from "components/button"
import { graphql, useStaticQuery } from "gatsby"
import React from "react"

export function FeaturesMenu(props: Parameters<typeof Link>[0] & { match: boolean }) {
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
  const paths: [href: string, title: string] | undefined = 
    data.pages?.edges?.map?.(edge => [edge.node.path, edge.node.context.frontmatter.title])
  
  return (
    <Menu>
      <NavBarLink as={MenuButton} {...props}>Fitur</NavBarLink>
      <MenuList 
        as="nav"
        bgColor="brand.600" border="none" color="white" shadow="dark-lg"
        borderTop="3px solid" borderTopRadius="none" borderTopColor="blackAlpha.600"
        sx={{
          'header[data-transparent] &': {
            bgColor: "blackAlpha.800", 
            color: "white",
            borderTopColor: "brand.100"
          }
        }}
      > {
        paths.map?.((route, index) => (
          <MenuItem 
            as={Link} href={route[0]} children={route[1]}
            key={index}
            _hover={{ bgColor: 'blackAlpha.400', textDecoration: 'none' }}
            _focus={{ bgColor: 'blackAlpha.300' }}
            _active={{ bgColor: 'blackAlpha.300' }}
            sx={{
              'header[data-transparent] &:hover': { bgColor: 'brand.600' },
              'header[data-transparent] &:focus': { bgColor: 'brand.500' },
              'header[data-transparent] &[data-active]':  { bgColor: 'brand.500' },
            }}
          />
        ))
      }
      </MenuList>
    </Menu>
  )
}