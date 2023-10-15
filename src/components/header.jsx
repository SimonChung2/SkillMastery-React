import { NavLink } from "react-router-dom";
import {useState, useEffect} from "react";

export default function Header() {

    const [menuLinks, setMenuLinks] = useState([]);

    useEffect(() => {
        const getmenuLinks = async () => {
            let response = await fetch("http://localhost:8888/menulinks");
            let data = await response.json();
            setMenuLinks(data);
        }
        getmenuLinks();
    }, []);


    return (
        <header>
            <nav>
                <ul>
                    {
                        menuLinks.map((menuLink) => (
                            <li key={menuLink.linkName}>
                                <NavLink to={menuLink.path}>{menuLink.linkName}</NavLink>


                            </li>
                        ))
                    }
                </ul>               
            </nav>
        </header>
    );
}