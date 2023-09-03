import PulseHeart from "./PulseHeart.tsx"

const MadeWithLove = () => {
    return (
        <div className="flex justify-center gap-2 font-playfair text-xl text-white">
            <p>Made with </p>
            <a
                href="https://en.wikipedia.org/wiki/Barcelona"
                target="_blank"
                rel="noreferrer"
            >
                <PulseHeart />
            </a>

            <p className="flex gap-1">
                in
                <a
                    className="hover:opacity-50 transition duration-500"
                    href="https://en.wikipedia.org/wiki/Barcelona"
                    target="_blank"
                    rel="noreferrer"
                >
                    Barcelona
                </a>

            </p>
        </div>
    )
}

export default MadeWithLove

