import { SelectedPage } from "../types/appType";
import { useAppContext } from "../context/AppContext";
import { useState, useEffect } from "react";

type Props = {
    page: SelectedPage;
};

const PageNameMultiLanguage = ({ page }: Props) => {
    const [pageName, setPageName] = useState('Projects');
    const { state } = useAppContext();

    useEffect(() => {
        switch (page) {
            case SelectedPage.Projects:
                setPageName(state.texts.navbarMenu.projects);
                break;
            case SelectedPage.Contact:
                setPageName(state.texts.navbarMenu.contact);
                break;
            case SelectedPage.Home:
                setPageName(state.texts.navbarMenu.home);
                break;
            case SelectedPage.Testimonials:
                setPageName(state.texts.navbarMenu.testimonials);
                break;
            case SelectedPage.Skills:
                setPageName(state.texts.navbarMenu.skills);
                break;
            default:
                setPageName('Home');
                break;
        }
    }, [page, state]);

    return <div>{pageName}</div>;
};

export default PageNameMultiLanguage;
