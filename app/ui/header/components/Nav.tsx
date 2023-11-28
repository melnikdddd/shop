import React from 'react';
import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-solid-svg-icons";


const Nav = () => {
    return (
        <div className={"flex items-center gap-x-10"}>
            <div className="nav-item">
                <Link href={"/"}>
                    <FontAwesomeIcon icon={faUser} className={"fa-xl"}/>
                </Link>
            </div>
            <div className="nav-item">
                <Link href={"/"}>
                    <FontAwesomeIcon icon={faUser} className={"fa-xl"}/>
                </Link>
            </div>
            <div className="nav-item">
                <Link href={"/"}>
                    <FontAwesomeIcon icon={faUser} className={"fa-xl"}/>
                </Link>
            </div>

        </div>
    );
};

export default Nav;