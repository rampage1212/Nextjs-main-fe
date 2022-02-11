import Contact from "../../components/PageComponents/HomeComponent/Contact";
import MetaManager from "../../components/utils/MetaManager";
import { META_IMAGES } from "../../data/constants";

const ContactMe = () => {
    return (
        <>
            <MetaManager
                title="Bhaskar Neupane"
                baseMetaData={{
                    author: "Bhaskar Neupane",
                    description: "Wether you have a question, want to talk about tech or project collaboration, or just want to say hi. My inbox is always open. You can directly email me at bhaskar@vaskrneup.com or say hello using the following form or connect with me in any of my social media account. I'll get back to you as soon as possible!",
                    imageUrl: META_IMAGES.contactImage,
                    title: "Contact Bhaskar Neupane",
                    type: "website",
                    url: "https://vaskrneup.com"
                }}
                keywords={["contact", "Bhaskar Neupane", "vaskrneup"]}
                twitterSpecificMetaData={{
                    card: "summary_large_image"
                }}
            />
            <Contact />
        </>
    );
};

export default ContactMe;