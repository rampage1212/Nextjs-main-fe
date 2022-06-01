import MetaManager from "../../../components/utils/MetaManager";
import {META_IMAGES} from "../../../data/constants";
import {useRouter} from 'next/router'
import {useEffect} from "react";

const ContactMe = () => {
    const url = new URL(window.location.href);
    const number = url.searchParams.get("number")

    useEffect(() => {
        document.getElementById("call-link")?.click()
    }, [])

    return (
        <>
            <MetaManager
                title="Bhaskar Neupane"
                baseMetaData={{
                    author: "Bhaskar Neupane",
                    description: "call",
                    imageUrl: META_IMAGES.contactImage,
                    title: "Call Bhaskar Neupane",
                    type: "website",
                }}
                keywords={["call", "Bhaskar Neupane", "vaskrneup"]}
                twitterSpecificMetaData={{
                    card: "summary_large_image"
                }}
            />
            <br/><br/>
            <br/><br/>
            <a href="tel:{number}" id={"call-link"}>
                Calling {number}, if it doesn&apos;t happen automatically click here!
            </a>
        </>
    );
};

export default ContactMe;