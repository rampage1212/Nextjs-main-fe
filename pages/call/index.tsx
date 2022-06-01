import MetaManager from "../../components/utils/MetaManager";
import {META_IMAGES} from "../../data/constants";
import {useEffect, useState} from "react";

const Call = () => {
    const [number, setNumber] = useState<String | undefined>(undefined);

    useEffect(() => {
        const url = new URL(window.location.href);
        setNumber(url.searchParams.get("number")?.toString());

        setTimeout(() => {
            document.getElementById("call-link")?.click();
        }, 1);
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
            <a href={`tel:${number}`} id={"call-link"}>
                Calling {number}, if it doesn&apos;t happen automatically click here!
            </a>
        </>
    );
};

export default Call;