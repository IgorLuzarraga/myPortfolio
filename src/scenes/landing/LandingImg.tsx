import YoyoImage from "../../components/YoyoImage"

type Props = {
    isAboveLarge: boolean
}

// const ImageFloating = () =>
//     <div>
//         <motion.div
//             className="text-red-500 hover:text-green-500"
//             animate={{ scale: 1.1 }}
//             transition={{ ease: "backInOut", duration: 6.0, repeat: Infinity }}
//         >
//             <img
//                 alt="profile image"
//                 className="hover:filter hover:grayscale transition duration-1000 
//                         z-10 h-52 w-52 rounded-full object-cover"
//                 src="assets/people/profile-image.jpeg"
//             />
//         </motion.div>
//     </div>


const LandingImg = ({ isAboveLarge }: Props) => {
    return (
        <div className="z-10 mt-16 md:mt-32 flex justify-center">
            {isAboveLarge ? (
                <div
                    className="relative before:absolute before:-top-5 
                before:left-5 before:rounded-full before:w-full before:h-full 
                before:border-2 before:border-purple-500 before:z-[-1]"
                >
                    {/* <img
                        alt="profile image"
                        className="hover:filter hover:grayscale transition duration-1000 
                        z-10 h-52 w-52 rounded-full object-cover"
                        src="assets/people/profile-image.jpeg"
                    /> */}

                    <div
                        className="hover:filter hover:grayscale transition duration-1000 
                        z-10 h-52 w-52"
                    >
                        <YoyoImage />
                    </div>

                </div>
            ) : (
                <img
                    alt="profile image"
                    className="hover:filter hover:grayscale transition duration-1000 
                    z-10 h-52 w-52 rounded-full object-cover"
                    src="assets/people/profile-image.jpeg"
                />
            )}
        </div>
    )
}

export default LandingImg