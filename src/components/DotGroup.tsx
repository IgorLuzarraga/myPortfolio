import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "../share/types";
import { fromSelectedPageToPageName } from "../utilities/utils";

type ShowDotLinksProps = {
    selectedPage: SelectedPage,
    setSelectedPage: (value: SelectedPage) => void,
}

type Props = {
    selectedPage: SelectedPage,
    setSelectedPage: (value: SelectedPage) => void,
    position: string
}

const DotGroup = ({ selectedPage, setSelectedPage, position }: Props) => {
    return (
        <div className={`flex flex-col gap-6 fixed top-[60%] ${position}`}>
            <ShowDotGroupLinks selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
        </div>
    );
};

const ShowDotGroupLinks = ({ selectedPage, setSelectedPage }: ShowDotLinksProps) => {
    const selectedStyles = `relative bg-white before:absolute before:w-6 before:h-6 
    before:rounded-full before:border-2 before:border-white before:left-[-50%] 
    before:top-[-50%]`;

    const enumKeys = Object.values(SelectedPage);

    return (
        enumKeys.map(key => (
            <AnchorLink
                key={key}
                href={hrefLink(selectedPage)}
                className={`${selectedPage === key ? selectedStyles : "bg-purple-500"
                    } w-3 h-3 rounded-full`}
                onClick={() => setSelectedPage(key)}
            />
        ))
    )
}

const hrefLink = (selectedPage: SelectedPage) =>
    `#${fromSelectedPageToPageName(selectedPage)}`


export default DotGroup;
