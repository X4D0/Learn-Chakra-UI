import {
	Box,
	Image,
	Badge,
	Text,
	Stack,
	Center,
	Button,
	useColorMode,
} from '@chakra-ui/react';
import { motion, isValidMotionProp } from "framer-motion"

const Projects = () => {
	const { colorMode } = useColorMode();
	const bgColor = { light: 'gray.200', dark: 'gray.700' };
	const textColor = { light: 'gray.500', dark: 'gray.100' };

	return (
		<Center>
		<Box
			mt='10'
			w='300px'
			rounded='20px'
			overflow='hidden'
			boxShadow='sm'
			bg={bgColor[colorMode]}>
			<Image src='./p1.png' alt='KukerHut UI' />
			<Box p={5}>
				<Stack isInline align='baseline'>
					<Badge variant='solid' variantColor='teal' rounded='full' px={2}>
						HTML5
					</Badge>
					<Badge variant='solid' variantColor='teal' rounded='full' px={2}>
						Codeigniter
					</Badge>
					<Badge variant='solid' variantColor='teal' rounded='full' px={2}>
						Bootstrap
					</Badge>
				</Stack>
				<Text as='h2' fontWeight='semibold' fontSize='xl' my={2}>
					KukerHut
				</Text>
			</Box>
		</Box>
		</Center>
	);
};

export default Projects;