import { SelectedPage } from "../../types/appType";
import AnchorLink from "react-anchor-link-smooth-scroll";
// import { fromSelectedPageToPageName } from "../../utilities/utils";
import PageNameMultiLanguage from "../../components/PageNameMultiLanguage";

type Props = {
    page: SelectedPage,
    selectedPage: SelectedPage,
    setSelectedPage: (value: SelectedPage) => void
}

const Link = ({
    page,
    selectedPage,
    setSelectedPage
}: Props) =>
    <AnchorLink
        className={`${selectedPage === page ? "text-white" : ""}
        transition duration-500 hover:text-white
        `}
        href={`#${page}`}
        onClick={() => setSelectedPage(page)}
    >
        {/* {fromSelectedPageToPageName(page)} */}
        <PageNameMultiLanguage page={page} />
    </AnchorLink>

export default Link