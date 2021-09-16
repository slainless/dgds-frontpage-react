import { Button, Heading, VStack, Text, Grid, GridItem } from "@chakra-ui/react"
import MainLayout from "layouts/main"
import React from "react"
import { RiMailSendLine, RiPhoneLine, RiWhatsappLine } from "react-icons/ri"

function Link(props: { children: string }) {
  return (
    <Button 
      variant="brand-outlined" 
      border="none" py={1} bgColor="blackAlpha.700" color="white" as="a" href="#footer-alamat"
      height="auto" rounded="full"
    >
      {props.children}
    </Button>
  )
}

export default function Contact() {
  return (
    <MainLayout>
      <VStack 
        bgImage="https://digitaldesa.id/templates/homepage/media/bg/bg-landing5.jpg" 
        bgSize="cover" mx="calc(var(--page-px) * -1)" 
        height="calc(var(--chakra-space-36) + 100vh)" pb={36} mb={-36}
        fontFamily="heading"
        alignItems="center" justifyContent="center"
      >
        <Grid 
          p={10} rounded="xl" templateColumns="repeat(3, auto)"
          columnGap={10} color="white" bgColor="blackAlpha.600"
          sx={{
            '& > :not(:first-of-type) h3::before': {
              content: '"atau"',
              fontSize: 'xs',
              px: 2, rounded: 'full',
              mr: 2,
              fontWeight: 'bold',
              bgColor: 'white',
              color: 'black',
              fontStyle: 'oblique'
            }
          }}
        >
          <VStack>
            <Text as="h3" size="md" fontWeight="semibold">Hubungi kami lewat:</Text>
            <Button 
              leftIcon={<RiWhatsappLine/>} colorScheme="whatsapp" size="lg"
              sx={{ '& svg': { width: 8, height: 8 } }} shadow="md"
            >
              Whatsapp
            </Button>
          </VStack>
          <VStack>
            <Text as="h3" size="md" fontWeight="semibold">Telpon kami:</Text>
            <Button 
              leftIcon={<RiPhoneLine/>} colorScheme="red" size="lg"
              sx={{ '& svg': { width: 8, height: 8 } }} shadow="md"
            >
              +62 811 444 8585
            </Button>
          </VStack>
          <VStack>
            <Text as="h3" size="md" fontWeight="semibold">Kirim ke email kami:</Text>
            <Button 
              leftIcon={<RiMailSendLine/>} colorScheme="orange" size="lg"
              sx={{ '& svg': { width: 8, height: 8 } }} shadow="md"
            >
              official@digitaldesa.id
            </Button>
          </VStack>
        </Grid>
        <Text 
          color="white" fontWeight="medium" fontSize={18} as="span"
          sx={{
            '&::before': {
              content: '"atau "',
              // fontSize: 'xs',
              // px: 2, rounded: 'full',
              // mr: 2,
              // fontWeight: 'bold',
              // bgColor: 'white',
              // color: 'black',
              // fontStyle: 'oblique'
            }
          }}
        >
          anda bisa datang ke <Link>kantor</Link> kami.
        </Text>
      </VStack>
    </MainLayout>
  )
}