import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

type Props = {
    image: string
}

const YoyoImage = ({ image }: Props) => {
    const controls = useAnimation();

    // Define animation keyframes
    const animationVariants = {
        initial: {
            y: -50, // Start position
        },
        animate: {
            y: 50, // End position 
            transition: {
                duration: 5, // Animation duration
            },
        },
        yoyo: {
            y: -50, // Back to the initial position
            transition: {
                duration: 5, // Animation duration
            },
        },
    };

    const startAnimation = async () => {
        // Start the animation with a "yoyo" effect
        await controls.start('animate');
        await controls.start('yoyo');
    };

    useEffect(() => {
        // Trigger the animation automatically when the component mounts
        startAnimation();

        // Set up a loop to continuously run the animation
        const animationLoop = async () => {
            while (true) {
                await startAnimation(); // Start the animation
                await new Promise((resolve) => setTimeout(resolve, 200)); // Wait for a delay before running again
            }
        };

        animationLoop(); // Start the animation loop

        // Clean up the loop when the component unmounts
        return () => {
            // Empty, we don't need to clean up anything
        };
    }, []);

    return (
        <motion.img
            className='rounded-full object-cover h-48 w-48'
            initial="initial"
            animate={controls}
            variants={animationVariants}
            src={`assets/people/${image}`}
            alt="Animated Image"
        />
    );
}

export default YoyoImage;
