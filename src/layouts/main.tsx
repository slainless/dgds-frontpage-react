import React from "react";
import { Box } from "@chakra-ui/layout";
import _ from "lodash";
import Header from "components/layouts/header";
import DefaultHead from "components/layouts/helmet";

export default function MainLayout(props: Parameters<typeof Box>[0]) {
  const px = 'var(--chakra-space-32)'
  return (
    <Box sx={{ 
      '& > *': { px },
      '--page-px': px
    }}
    >
      <DefaultHead/>
      <Header/>
      <Box as="main" {..._.omit(props, 'sx')}/>
    </Box>
  )
}