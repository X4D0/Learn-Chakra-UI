import {
	Box,
	forwardRef,
  	chakra,
} from '@chakra-ui/react';
import { motion, isValidMotionProp } from "framer-motion"

const Projects = () => {
	// 1. Create a custom motion component from Box
	const MotionBox = motion.custom(
		forwardRef((props, ref) => {
		const chakraProps = Object.fromEntries(
			// do not pass framer props to DOM element
			Object.entries(props).filter(([key]) => !isValidMotionProp(key)),
		)
		return <chakra.div ref={ref} {...chakraProps} />
		}),
	)

	return (
		<MotionBox
			boxSize="40px"
			bg="red.300"
			drag="x"
			dragConstraints={{ left: -100, right: 100 }}
			whileHover={{ scale: 1.1 }}
			whileTap={{ scale: 0.9 }}
		/>
	);
};

export default Projects;