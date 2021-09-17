import React from "react";
import { Box } from "@chakra-ui/layout";
import _ from "lodash";
import Header from "components/layouts/header";
import DefaultHead from "components/layouts/helmet";
import Footer from "components/layouts/footer";

export default function MainLayout(props: Parameters<typeof Box>[0] & {
  headerEnableTransparency?: boolean
}) {
  const px = 'var(--chakra-space-32)'
  const { headerEnableTransparency, ...rest } = props 
  return (
    <Box sx={{ 
      '& > *': { px },
      '--page-px': px
    }}
    >
      <DefaultHead/>
      <Header enableTransparency={headerEnableTransparency}/>
      <Box as="main" minHeight="100vh" {...rest}/>
      <Footer/>
    </Box>
  )
}