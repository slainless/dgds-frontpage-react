import React from "react";
import { Box } from "@chakra-ui/layout";
import _ from "lodash";
import Header from "components/layouts/header";
import DefaultHead from "components/layouts/helmet";

export default function MainLayout(props: Parameters<typeof Box>[0]) {
  return <>
    <DefaultHead/>
    <Header/>
    <Box as="main" {..._.omit(props, 'sx')}/>
  </>
}