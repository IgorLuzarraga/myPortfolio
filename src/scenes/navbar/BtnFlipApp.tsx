import { FaFlipboard } from "react-icons/fa"

type Props = {
    isAppFlipped: boolean,
    setIsAppFlipped: (value: boolean) => void
}

const BtnFlipApp = ({ isAppFlipped, setIsAppFlipped }: Props) =>
    <button
        className='rounded-full p-'
        onClick={() => setIsAppFlipped(!isAppFlipped)}
    >
        <FaFlipboard className='w-6 h-6 text-white  hover:text-purple-300 transition duration-500' />
    </button>

export default BtnFlipApp