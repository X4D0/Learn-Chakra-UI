import React from 'react';
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Text, Heading, Flex, Stack, Button, Link } from '@chakra-ui/react'
import {motion} from 'framer-motion'
import { VscRocket } from 'react-icons/vsc'
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
} from "@chakra-ui/react"

export default function Home() {
  const initialFocusRef = React.useRef()
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
        <Text mt="4">An Undergraduate Student at <Text as="kbd">Telkom University</Text> who enjoys 
        <Popover
          initialFocusRef={initialFocusRef}
          placement="bottom"
          closeOnBlur={false}
        >
          {({ onClose }) => (
          <>
          <PopoverTrigger>
            <Link>
              <Text as="samp"> Front-End Dev </Text>
            </Link>
          </PopoverTrigger>
          <PopoverContent color="white" bg="blue.800" borderColor="blue.800">
            <PopoverHeader pt={4} fontWeight="bold" border="0">
              What is it?
            </PopoverHeader>
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverBody>
              Front-end web development is the practice of converting data to a graphical interface, through the use of HTML, CSS, and JavaScript, so that users can view and interact with that data.
            </PopoverBody>
            <PopoverFooter
              border="0"
              d="flex"
              alignItems="center"
              justifyContent="space-between"
              pb={4}
            >
              <Button colorScheme="green" onClick={onClose}>Got it!</Button>
            </PopoverFooter>
          </PopoverContent>
          </>
          )}
        </Popover>
        </Text>
        <Link href="/projects">
          <Button leftIcon={<VscRocket />} mt="4" size="md" width="25%" variant="outline">
            My Projects
          </Button>
        </Link>
      </Flex>
    </Stack>
  )
}
