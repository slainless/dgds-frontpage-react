import { Image } from '@chakra-ui/react'
import React from 'react'

export function PhotoCard(props: Parameters<typeof Image>[0]) {
  return (
    <Image rounded="xl" objectFit="cover" bgColor="gray.50" shadow="md" {...props}/>
  )
}