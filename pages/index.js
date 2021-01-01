import Head from 'next/head'
import styles from '../styles/Home.module.css'
import DarkModeSwitch from '../components/DarkModeSwitch'
import { Text, Heading, Flex, Stack, Button } from '@chakra-ui/react'
import {motion} from 'framer-motion'
import { VscRocket, VscGithubInverted } from 'react-icons/vsc'
import { FaLinkedin } from 'react-icons/fa'

export default function Home() {
  return (
    <Stack
      as="main"
      align="justify"
      my={8}
      mx={24}
    >
      <Flex
        pt={79}
        flexDirection="column"
        maxWidth="700px"
      >
        <Flex
          direction="row"
          w="700px"
          pt={4}
          justify="space-between"
        >
        </Flex>
        <Heading
          as="h1"
          size="2xl"
        >Hi!</Heading>
        <Heading
          as="h1"
          size="2xl"
          color="royalblue"
        >I'm Ray Rahmanda</Heading>
        <Text mt="4">A Student at Telkom University who enjoys Front-End Dev.</Text>
        <Button leftIcon={<VscRocket />} mt="4" size="md" width="25%" variant="outline">
          My Projects
        </Button>
      </Flex>
    </Stack>
  )
}
