import { Box, Heading, VStack } from "@chakra-ui/react"
import * as React from "react"
import MainLayout from "layouts/main"
import TitleSection from "components/pages/index/title"
import FeatureSection from "components/pages/index/feature"
import SolutionSection from "components/pages/index/solution"
import BenefitSection from "components/pages/index/benefit"
import ComparisonSection from "components/pages/index/comparison"
import StatisticSection from "components/pages/index/statistic"
import { graphql, useStaticQuery } from "gatsby"
import path from 'path'
import TestimonySection from "components/pages/index/testimony"
import UsedBySection from "components/pages/index/user"
import SponsorSection from "components/pages/index/sponsor"

export const query = graphql`
  query {
    comparison: allComparisonYaml {
      nodes {
        iconSrc: icon
        title
        plus
        min
      }
    }

    solution: allSolutionYaml {
      nodes {
        iconSrc: icon
        title
        content
        media {
          src
          width
        }
      }
    }

    statistic: allStatisticYaml {
      nodes {
        iconSrc: icon
        name
        number
      }
    }

    testimony: allTestimonyYaml {
      nodes {
        media {
          src
        }
        name
        title
        content
      }
    }

    user: allUserYaml {
      nodes {
        iconSrc: icon
        name
        number
      }
    }

    sponsor: allSponsorYaml {
      nodes {
        name
        iconSrc: icon
      }
    }
  }
`

export default function IndexPage({ data }) {
  return (
    <MainLayout>
      <TitleSection/>
      <FeatureSection/>
      <SolutionSection data={data.solution?.nodes}/>
      <BenefitSection/>
      <ComparisonSection data={data.comparison?.nodes}/>
      <StatisticSection data={data.statistic?.nodes}/>
      <TestimonySection data={data.testimony?.nodes}/>
      <UsedBySection data={data.user?.nodes}/>
      <SponsorSection data={data.sponsor?.nodes}/>
    </MainLayout>
  )
}
