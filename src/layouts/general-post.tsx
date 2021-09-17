import { Container } from "@chakra-ui/layout";
import React from "react";
import MainLayout from "./main";

export default function GeneralPurposeLayout(props: Parameters<typeof Container>[0]) {
  return (
    <MainLayout pt={32} pb={24}>
      <Container maxW="container.lg" {...props}/>
    </MainLayout>
  )
}