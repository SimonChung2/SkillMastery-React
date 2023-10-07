import { NavLink } from "react-router-dom";

export default function Header() {


    return (
        <header>
            <img src="" alt="" />
            <nav>
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/tutorlist">View All Tutors</NavLink>
                    </li>
                    <li>
                        <NavLink to="/tutorsignup">Tutor Sign Up</NavLink>
                    </li>
                    <li>
                        <NavLink to="/learnersignup">Learner Sign Up</NavLink>
                    </li>
                    <li>
                        <NavLink to="/login">Login</NavLink>
                    </li>
                </ul>               
            </nav>
        </header>
    );
}