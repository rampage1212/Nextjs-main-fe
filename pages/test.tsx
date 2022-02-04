import { NextPage } from "next";
import Link from "next/link";

const Test: NextPage = () => {
    const x = 10;

    return (
        <div>
            <h1>NEW PAGE !!</h1>
            <h3><Link href={"/"}>Back !!</Link></h3>
        </div>
    );
};

export default Test;