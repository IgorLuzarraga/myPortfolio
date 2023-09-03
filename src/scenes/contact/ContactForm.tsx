import { motion } from "framer-motion";
import { useForm } from "react-hook-form";

const ContactForm = () => {
    const inputStyles = `mb-5 w-full bg-form-color font-semibold placeholder-white p-3`

    const {
        register,
        trigger,
        formState: { errors },
    } = useForm();

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        const isValid = await trigger();
        if (!isValid) {
            e.preventDefault();
        }
    };

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            transition={{ delay: 0.5, duration: 1.8 }}
            variants={{
                hidden: { opacity: 0, y: 100 },
                visible: { opacity: 1, y: 0 },
            }}
            className="basis-1/2 mt-10 md:mt-0"
        >
            <form
                target="_blank"
                onSubmit={onSubmit}
                action="https://formsubmit.co/f73d2fb1f3c522779fd05f7c01aa8931"
                method="POST"
            >
                <input
                    className={inputStyles}
                    type="text"
                    placeholder="NAME"
                    {...register("name", {
                        required: true,
                        maxLength: 100,
                    })}
                />
                {errors.name && (
                    <p className="text-myRed mt-1">
                        {errors.name.type === "required" && "This field is required."}
                        {errors.name.type === "maxLength" && "Max length is 100 char."}
                    </p>
                )}

                <input
                    className={inputStyles}
                    type="text"
                    placeholder="EMAIL"
                    {...register("email", {
                        required: true,
                        pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    })}
                />
                {errors.email && (
                    <p className="text-myRed mt-1">
                        {errors.email.type === "required" && "This field is required."}
                        {errors.email.type === "pattern" && "Invalid email address."}
                    </p>
                )}

                <textarea
                    className={inputStyles}
                    placeholder="MESSAGE"
                    cols={50}
                    rows={4}
                    {...register("message", {
                        required: true,
                        maxLength: 2000,
                    })}
                />

                {errors.message && (
                    <p className="text-myRed mt-1">
                        {errors.message.type === "required" &&
                            "This field is required!"}
                        {errors.message.type === "maxLength" &&
                            "Max length is 2000 char!"}
                    </p>
                )}

                <div className="flex justify-center">
                    <button
                        className="p-5 bg-btn-color text-white font-semibold hover:bg-red 
                    hover:text-purple-500 transition duration-500"
                        type="submit"
                    >
                        SEND MESSAGE
                    </button>
                </div>

            </form>
        </motion.div>
    )
}

export default ContactForm