
import React, {ReactNode, useState} from 'react';
import Link from "next/link";

import styles from "./DropdownLink.module.scss";
import {ProductCategory} from "@/app/lib/defenitions";
import Image from "next/image";

interface DropdownLinkProps {
    category: string;
    dropdownItems: ProductCategory[];
    className?: string;
}

const DropdownLink = ({category, dropdownItems, className}: DropdownLinkProps) => {

    return (
        <div className={styles.link}>
            <Link href={'/'} className={styles.linkText}>
                {category}
            </Link>
            <div className={styles.dropdownElement}>
                <div className={"bg-transparent h-16 w-full"}>
                </div>
                <div className={"bg-gray-900 flex p-10 w-full justify-around"}>
                    {
                        dropdownItems.map((productCategory, index) => (
                            <Link href={"/"} key={index}
                                  className={"flex flex-col justify-around gap-y-5 text-center"}>
                                <Image src={productCategory.imageSrc} alt={"product"} width={100} height={100}/>
                                <p>{productCategory.category}</p>
                            </Link>
                        ))
                    }

                </div>
            </div>
        </div>

    );
};
export default DropdownLink;

