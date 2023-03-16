import { Image } from '@chakra-ui/react'
import { DynamicImage } from 'components/image'
import React from 'react'

export function PhotoCard(props: Parameters<typeof DynamicImage>[0]) {
  return (
    <DynamicImage backgroundColor="gray.50" rounded="xl" objectFit="cover" bgColor="gray.50" shadow="md" {...props}/>
  )
}