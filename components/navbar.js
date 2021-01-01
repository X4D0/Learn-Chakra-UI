import { Heading, Flex, Link, Box, Spacer, Icon } from '@chakra-ui/react';
import { VscGithubInverted } from 'react-icons/vsc'
import { FaLinkedin } from 'react-icons/fa'
import DarkModeSwitch from '../components/DarkModeSwitch'

const Navbar = () => {
	return (
		<Flex
      pt="20px"
      maxWidth="1000px"
    >
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
	);
};

export default Navbar;