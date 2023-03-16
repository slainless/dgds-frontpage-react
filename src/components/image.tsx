import { Box, Image, chakra } from '@chakra-ui/react'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'
import React, { ComponentProps } from 'react'

const WrappedGatsbyImage = chakra(GatsbyImage, {
  shouldForwardProp: (prop) => [
    'alt',
    'imgClassName',
    'image',
    'objectFit',
    'objectPosition',
    'onLoad',
    'onError',
    'onStartLoad',
    "placeholder", 
    "src", 
    "srcSet", 
  ].includes(prop),
})

export function DynamicImage(props: ComponentProps<typeof WrappedGatsbyImage> & { image?: IGatsbyImageData }) {
  if(props.image == null) return <Image {...props}/>
  return <WrappedGatsbyImage {...props}/>
}
