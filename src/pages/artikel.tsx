import React, { useEffect, useState } from "react";
import MainLayout from 'layouts/main'
import { Grid, Heading, Image, VStack, Text, Icon, LinkBox, LinkOverlay } from "@chakra-ui/react";
import { RiCalendar2Fill } from "react-icons/ri";
import { DateTime } from "luxon";

type Data = {
  date: string
  headerimage: Parameters<typeof Image>[0]
  lastmod: string
  slug: string
  title: string
  tags: string[]
  path: string
}
export default function PostList() {
  const [posts, setPosts] = useState<Data[]>([])

  useEffect(() => {
    fetch('/all-mdx.json')
      .then(res => res.json())
      .then(obj => {
        setPosts(obj
          .filter?.(rec => rec.fields?.group === 'posts')
          .map?.(rec => ({ ...rec.frontmatter, path: rec.fields?.path }))
        )
      })
  }, [])

  console.log(posts)

  return (
    <MainLayout pt={36}>
      <Heading as="h1" size="xl" textStyle="section" mb={10}>
        Artikel
      </Heading>

      <Grid templateColumns="repeat(3, 1fr)" gridGap={8}>{ posts.map?.(post => (
        <LinkBox as={VStack} shadow="lg" rounded="lg">
          <Image src={post.headerimage.src} borderTop="3px solid" borderTopColor="brand.600"/>
          <VStack px={5} pb={5} pt={3} alignItems="flex-start">
            <LinkOverlay href={post.path}>
              <Heading as="h2" size="md">{post.title}</Heading>
            </LinkOverlay>
            <Text fontFamily="heading" fontSize="sm" color="gray">
              <Icon as={RiCalendar2Fill} mr={2} boxSize={4}/>
              { DateTime.fromISO(post.date).setLocale('in-ID').toFormat('cccc, d LLLL y') }
            </Text>
          </VStack>
        </LinkBox>
      ))}
      </Grid>
    </MainLayout>
  )
}