type Props = {
    isAboveLarge: boolean
}

const LandingImg = ({ isAboveLarge }: Props) => {
    return (
        <div className="z-10 mt-16 md:mt-32 flex justify-center">
            {isAboveLarge ? (
                <div
                    className="relative before:absolute before:-top-5 
                before:left-5 before:rounded-full before:w-full before:h-full 
                before:border-2 before:border-purple-500 before:z-[-1]"
                >
                    <img
                        alt="profile image"
                        className="hover:filter hover:saturate-200 transition duration-1000 
                z-10 h-52 w-52 rounded-full object-cover"
                        src="assets/people/profile-image.jpeg"
                    />
                </div>
            ) : (
                <img
                    alt="profile"
                    className="z-10 h-52 w-52 rounded-full object-cover"
                    src="assets/people/profile-image.jpeg"
                />
            )}
        </div>
    )
}

export default LandingImg