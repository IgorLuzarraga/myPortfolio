import { SelectedPage } from "../../types/appType";
import { fromSelectedPageToPageId } from "../../utilities/utils";
import ContactForm from "./ContactForm";
import ContactHeading from "./ContactHeading";
import ContactImgFlipped from "./ContactImgFlipped";

const ContactFlipped = () => {

    return (
        <section id={fromSelectedPageToPageId(SelectedPage.Contact)}
            className="mx-auto w-5/6 py-32">

            {/* HEADINGS */}
            <ContactHeading headingInitPos={-500} />

            {/* FORM & IMAGE */}
            <div className="md:flex md:justify-between gap-16 mt-5">

                <ContactImgFlipped />
                <ContactForm />

            </div>

        </section>
    );
};

export default ContactFlipped;
