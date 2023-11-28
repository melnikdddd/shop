import React from 'react';
import Image from "next/image";

const Logo = () => {
    return (
       <Image src={"/logo.webp"} alt={"Logo"} width={120} height={80}/>
    );
};

export default Logo;