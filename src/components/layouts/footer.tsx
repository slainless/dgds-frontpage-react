import { Box, BoxProps, Button, Flex, Grid, GridItem, Heading, HStack, VStack, Text, Link, Icon, UnorderedList, ListItem } from "@chakra-ui/react";
import { FacebookButton, InstagramButton, TwitterButton, WhatsappButton } from "components/button";
import { CgPhone, CgMail } from "react-icons/cg"
import _ from "lodash";
import React from "react";
import { RiMapPinFill, RiRoadMapFill, RiMapPinLine, RiMapPinUserFill } from "react-icons/ri";

const linkAlamat1 = 'https://www.google.co.id/maps/place/Upana+Studio+Internasional+-+Penyedia+Layanan+IT+(+Website,+Android,+Sistem+Informasi)+Makassar/@-5.1807354,119.461815,17z/data=!3m1!4b1!4m5!3m4!1s0x2dbee2b707d24f35:0xe4702bfdb0aef0fc!8m2!3d-5.1807311!4d119.4640048'
const linkAlamat2 = 'https://www.google.co.id/maps/place/IPP+Office+-+Menara+165/@-6.2909008,106.8093014,19.44z/data=!4m12!1m6!3m5!1s0x2e69f1fa56851acd:0xb8211b6767e52473!2sESQ+Leadership+Centre+-+Menara+165!8m2!3d-6.2906423!4d106.8098501!3m4!1s0x0:0xeecfe5ae1320322c!8m2!3d-6.2909288!4d106.8096141'

export default function Footer(props: BoxProps) {
  return (
    <Box 
      as="footer" id="footer" {..._.omit(props, 'children')} 
      bgColor="gray.200" pt={36} mt={36}
      borderBottomWidth={4} borderColor="orange.400"
      position="relative"
    >
      <VStack 
        position="absolute" top="-5%" left="50%" transform="translate(-50%, -50%)"
        bgColor="green.600" py={12} px={24} rounded="3xl" color="white"
      >
        <Text as="h4" textStyle="section" color="inherit">
          Tertarik menggunakan Digides?
        </Text>
        <Text fontSize="md" fontWeight="medium" pb={4}>
          Request Demo untuk pelajari lebih lanjut tentang Digides!
        </Text>
        <Button 
          variant="alt-rounded" shadow="lg"
          href="https://docs.google.com/forms/d/e/1FAIpQLSeDsH_9H1BDiOyNEP_SjsEj18Sy7i2JPKLaOFVNehzTbeIRLA/viewform?embedded=true"
        >
          Request Demo
        </Button>
      </VStack>
      <Grid templateRows="auto auto auto auto" templateColumns="repeat(6, 1fr)" rowGap={8} mb={16}>
        <>
          <GridItem as="h4" textStyle="section" colSpan={2}>Kontak</GridItem>
          <GridItem as="h4" textStyle="section" colSpan={2}>Jelajahi</GridItem>
          <GridItem as="h4" textStyle="section" colSpan={2}>Sosial Media</GridItem>
        </>
        <>
          <GridItem as={VStack} colSpan={2}>
            <Button 
              variant="brand-outlined" as="a" leftIcon={<CgPhone/>} rounded="full"
              href="tel:+628114448585"
            >
              +62 811 444 8585
            </Button>
            <Button 
              variant="brand-outlined" as="a" leftIcon={<CgMail/>} rounded="full"
              href="mailto:official@digitaldesa.id"
            >
              official@digitaldesa.id
            </Button>
          </GridItem>
          <GridItem as={VStack} colSpan={2} justifyContent="center" alignItems="center">
            <UnorderedList spacing={1}>
              <ListItem>
                <Button as="a" variant="blended" height={7} href="/privacy-policy">
                  Kebijakan Privasi
                </Button>
              </ListItem>
              <ListItem>
                <Button as="a" variant="blended" height={7} href="/pusat-bantuan">
                  Pusat Bantuan
                </Button>
              </ListItem>
              <ListItem>
                <Button as="a" variant="blended" height={7} href="http://bit.ly/hargadigides">
                  Permintaan Harga
                </Button>
              </ListItem>
            </UnorderedList>
          </GridItem>
          <GridItem as={HStack} colSpan={2} justifyContent="center" alignItems="flex-start">
            <FacebookButton as="a" href="https://www.facebook.com/Digides-Indonesia-123549749291460"/>
            <InstagramButton as="a" href="https://www.instagram.com/digitaldesa.id"/>
            <TwitterButton as="a" href="https://twitter.com/digitaldesa"/>
            <WhatsappButton as="a" href="https://api.whatsapp.com/send?phone=628114448585&text=Halo%20saya%20mau%20tanya%20tentang%20digides..."/>
          </GridItem>
        </>
        <>
          <GridItem as="h4" colSpan={6} id="footer-alamat" textStyle="section">Alamat</GridItem>
        </>
        <>
          <GridItem as={Flex} justifyContent="center" colSpan={3}>
            <Link href={linkAlamat1} position="relative">
              <Icon 
                as={RiMapPinUserFill} position="absolute" top="50%" left={-3}
                transform="translate(-100%, -50%)" width={6} height={6}
              /> 
              Ruko I Walk J/10 Ciputra Citraland,<br/>
              Jl. Tun Abdul Razak<br/>
              Sulawesi Selatan, Kode Pos 92114
            </Link>
          </GridItem>
          <GridItem as={Flex} justifyContent="center" colSpan={3}>
            <Link href={linkAlamat2} position="relative">
              <Icon 
                as={RiMapPinUserFill} position="absolute" top="50%" left={-3}
                transform="translate(-100%, -50%)" width={6} height={6}
              /> 
              Gedung Menara 165,<br/>
              Jl. TB. SIMATUPANG kav.1<br/>
              Cilandak Timur, Jakarta Selatan
            </Link>
          </GridItem>
        </>
      </Grid>
      <Flex justifyContent="center">
        <Heading as="span" 
          bgColor="gray.600" color="white" 
          fontSize="md" py={2} px={16}
          borderTopRadius="2xl"
        >
          © 2021 Powered by PT Digital Desa Indonesia
        </Heading>
      </Flex>
    </Box>
  )
}