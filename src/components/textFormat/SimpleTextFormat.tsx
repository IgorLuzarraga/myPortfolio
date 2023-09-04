import { getTextFirstLine, getTextExceptFirstLine } from "../../utilities/utils";

type Props = {
    text: string
}

const SimpleTextFormat = ({ text }: Props) => {
    return (
        <>
            <span className="ml-6">
                {getTextFirstLine(text)}
            </span>
            <span>
                {getTextExceptFirstLine(text)}
            </span>
        </>
    )
}

export default SimpleTextFormat