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
        <FaFlipboard className='w-7 h-7 text-purple-300 hover:text-white transition duration-500' />
    </button>

export default BtnFlipApp