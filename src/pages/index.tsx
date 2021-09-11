import { Box, Heading, VStack } from "@chakra-ui/react"
import * as React from "react"
import MainLayout from "layouts/main"
import TitleSection from "components/pages/index/title"
import FeatureSection from "components/pages/index/feature"
import SolutionSection from "components/pages/index/solution"

export default function IndexPage() {
  return (
  <MainLayout>
    <TitleSection/>
    <FeatureSection/>
    <SolutionSection/>
  </MainLayout>
  )
}
