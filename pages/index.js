import Head from 'next/head'
import styles from '../styles/Home.module.css'
import DarkModeSwitch from '../components/DarkModeSwitch'
import {Text, Heading, Flex, Stack, Button, Box, Link, Icon, Spacer} from '@chakra-ui/react'
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
      <Flex>
        <Box p="2">
          <Heading size="md">rayhan.</Heading>
        </Box>
        <Spacer />
        <Box>
          <Link href="https://github.com/X4D0" isExternal>
            <Icon as={VscGithubInverted} w={8} h={8}/>
          </Link>
          <Link href="https://github.com/X4D0" isExternal>
            <Icon as={FaLinkedin} w={8} h={8}/>
          </Link>
        </Box>
        <Spacer />
        <DarkModeSwitch />
      </Flex>
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
        <Text mt="4">A Student from Telkom University who enjoys Front-End Dev.</Text>
        <Button leftIcon={<VscRocket />} mt="4" size="md" width="25%" variant="outline">
          My Projects
        </Button>
      </Flex>
    </Stack>
  )
}
