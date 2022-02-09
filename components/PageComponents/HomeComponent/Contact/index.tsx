import contactStyle from "./Contact.module.scss";
import layoutStyles from "../../../Layout/Layout.module.scss";
import utilsStyles from "../../../../styles/Utils.module.scss";

const Contact = () => {
    return (
        <div className={`${layoutStyles.section} ${contactStyle.contact_section}`}>
            <div className={utilsStyles.container}>
                <div className={layoutStyles.section_body}>
                    <h3 className={layoutStyles.section_title}>Get In Touch</h3>

                    <div className={contactStyle.section_body}>
                        <p className={contactStyle.personal_statement}>
                            Wether you have a question, want to talk about tech or project collaboration, or  just want to say hi. My inbox is always open. You can directly email me at <a href="mailto:bhaskar@vaskrneup.com" className={utilsStyles.animated_line} >bhaskar@vaskrneup.com</a> or say hello using the following form or connect with me in any of my social media account. I&apos;ll get back to you as soon as possible!
                        </p>
                        <div className={contactStyle.form_container}>
                            <form action="https://formsubmit.co/bhaskar@vaskrneup.com" method="POST">
                                <div className={contactStyle.row}>
                                    <div className={contactStyle.input_container}>
                                        <label htmlFor="full_name">Full Name</label>
                                        <input
                                            type="text"
                                            id="full_name"
                                            placeholder="Bhaskar Neupane"
                                            name="full_name"
                                            required={true}
                                        />
                                    </div>
                                    <div className={contactStyle.input_container}>
                                        <label htmlFor="email">Email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            placeholder="bhaskar@vaskrneup.com"
                                            name="email"
                                            required={true}
                                        />
                                    </div>
                                </div>
                                <div className={contactStyle.row}>
                                    <div className={contactStyle.input_container}>
                                        <label htmlFor="message">Message</label>
                                        <textarea
                                            name="message"
                                            id="message"
                                            placeholder="Lets have a chat!!"
                                            required={true}
                                            cols={30}
                                            rows={10}
                                        ></textarea>
                                    </div>
                                </div>
                                <input
                                    type="submit"
                                    value="Say Hello!"
                                    className="btn"
                                />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;;;;