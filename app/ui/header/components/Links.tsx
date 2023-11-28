import React from 'react';
import Link from "next/link";
import DropdownLink from "@/app/ui/header/components/DropdownLink";
import {ProductCategory} from "@/app/lib/defenitions";

const Links = () => {
    return (
        <div className={"flex justify-around text-slate-200 gap-x-32"}>
            <DropdownLink category={"Safes"} dropdownItems={safes}/>
            <DropdownLink category={"Doors"} dropdownItems={doors}/>
            <DropdownLink category={"Other"} dropdownItems={other}/>

        </div>
    );
};

export default Links;


const safes : ProductCategory[] = [
    {category: "Safe", imageSrc: "/safe.jpeg"},
    {category: "Safe", imageSrc: "/safe.jpeg"},
    {category: "Safe", imageSrc: "/safe.jpeg"},
    {category: "Safe", imageSrc: "/safe.jpeg"}
];
const doors : ProductCategory[] = [
    {category: "Door", imageSrc: "/door.webp"},
    {category: "Door", imageSrc: "/door.webp"},
    {category: "Door", imageSrc: "/door.webp"},
    {category: "Door", imageSrc: "/door.webp"},
    {category: "Door", imageSrc: "/door.webp"},
    {category: "Door", imageSrc: "/door.webp"}
];
const other : ProductCategory[] = [
    {category: "Cabinet", imageSrc: "/cabinet.png"},
    {category: "Cabinet", imageSrc: "/cabinet.png"},
    {category: "Cabinet", imageSrc: "/cabinet.png"},
    {category: "Cabinet", imageSrc: "/cabinet.png"}
];