import Container from "@/app/components/Container";
import Logo from "@/app/ui/header/components/Logo";
import Links from "@/app/ui/header/components/Links";
import Nav from "@/app/ui/header/components/Nav";

import styles from "./header.module.scss";

export default function Header(){

    return (
        <header>
            <nav className={"bg-gray-900"}>
                <Container>
                    <div className={"flex justify-between py-4 items-center"}>
                        <div className="nav-item">
                            <Logo/>
                        </div>
                        <div className="nav-item">
                            <Links/>
                        </div>
                        <div className="nav-item">
                            <Nav/>
                        </div>
                    </div>
                </Container>
            </nav>

        </header>
    )
}