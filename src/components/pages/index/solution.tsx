import { Box, BoxProps, HStack, VStack, Text, HeadingProps, Heading, TextProps, Flex, Grid, Image, ImageProps } from "@chakra-ui/react";
import { SectionWithH2 } from "components/layouts/section";
import _ from "lodash";
import React, { useEffect, useState } from "react";

const Data: {
  title: string,
  content: string,
  iconHref: string,
  media: ImageProps
}[] = [
  { 
    title: 'Administrasi', 
    content: 'Pengelola sistem informasi administrasi secara mandiri',
    iconHref: 'https://digitaldesa.id/templates/homepage/media/misc/icon/digides_administrasi.svg',
    media: {
      src: 'https://digitaldesa.id/templates/homepage/media/preview-fitur/administrasi.webp',
      width: "78%"
    }
  },
  { 
    title: 'Pelayanan', 
    content: 'Sistem pelayanan online untuk administrasi desa',
    iconHref: 'https://digitaldesa.id/templates/homepage/media/misc/icon/digides_pelayanan.svg',
    media: {
      src: 'https://digitaldesa.id/templates/homepage/media/preview-fitur/pelayanan.webp',
      width: '90%'
    }
  },
  { 
    title: 'Perpajakan', 
    content: 'Sistem pencatatan pajak mulai dari rekapitulasi perpajakan',
    iconHref: 'https://digitaldesa.id/templates/homepage/media/misc/icon/digides_perpajakan.svg',
    media: {
      src: 'https://digitaldesa.id/templates/homepage/media/preview-fitur/perpajakan.webp',
      width: '85%'
    }
  },
  { 
    title: 'Bantuan Sosial', 
    content: 'Menyimpan dan mengelola data penerima bantuan sosial',
    iconHref: 'https://digitaldesa.id/templates/homepage/media/misc/icon/digides_bansos.svg',
    media: {
      src: 'https://digitaldesa.id/templates/homepage/media/preview-fitur/bansos.webp',
      width: '85%'
    }
  },
  { 
    title: 'Webprofil', 
    content: 'Website profil untuk meningkatkan potensi wisata desa',
    iconHref: 'https://digitaldesa.id/templates/homepage/media/misc/icon/digides_webdesa.svg',
    media: {
      src: 'https://digitaldesa.id/templates/homepage/media/preview-fitur/webprofil.webp',
      width: '90%'
    }
  },
  { 
    title: 'Android App', 
    content: 'Marketplace dan permintaan surat eksklusif untuk warga anda',
    iconHref: 'https://digitaldesa.id/templates/homepage/media/misc/icon/digides_app.svg',
    media: {
      src: 'https://digitaldesa.id/templates/homepage/media/preview-fitur/android.webp'
    }
  }
]

export default function SolutionSection() {
  const [showIndex, setShowIndex] = useState<number>(0)
  const interval = 5000
  useEffect(() => {
    const loopMoving = setTimeout(() => {
      if(showIndex === Data.length - 1) setShowIndex(0)
      else setShowIndex(showIndex + 1)
    }, interval)
    return () => {
      clearTimeout(loopMoving)
    }
  }, [showIndex])

  return (
  <SectionWithH2 id="solusi" title="Solusi yang Kami Berikan">
    <Grid templateColumns="23% auto 23%" templateRows="repeat(3, 1fr)"
    rowGap={6} columnGap={6}>
      <Flex gridColumn="2" gridRow="1/span 3" 
      justifyContent="center" alignItems="center">
      { Data.map((data, index) => (
        <Image {...data.media} display={index === showIndex ? 'flex' : 'none'}
        key={data.title + 'icon'}/>
      )) }
      </Flex>
      { Data.map((data, index) => (
          <Box key={data.title}
            data-active={index === showIndex ? true : null}
            onClick={() => setShowIndex(index)}
            width="100%" p={5} shadow="lg" bgColor="gray.50"
            borderTop='3px solid transparent'
            _hover={{
              transform: "scale(1.1)"
            }}
            sx={{
              '&[data-active]': {
                borderTopColor: 'green.500',
                transform: 'scale(1.1)'
              },
              '&[data-active] h4': {
                fontWeight: 'bold'
              }
            }}
          >
            <HStack width="100%" pb={3} alignItems="center">
              <Box width={14} mr={5}>
                <Image src={data.iconHref}/>
              </Box>
              <Text as="h4" textAlign="center" fontWeight="semibold">{data.title}</Text>
            </HStack>
            <Text fontSize="xs">{data.content}</Text>
          </Box>
      )) }
    </Grid>
  </SectionWithH2>)
}