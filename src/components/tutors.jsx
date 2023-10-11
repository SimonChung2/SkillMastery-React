import {useState, useEffect} from "react";
import { Link } from "react-router-dom";

export default function Tutors() {
    const [tutors, setTutors] = useState([]);
    const [searchInput, setSearchInput] = useState("");

    useEffect(() => {
        const getTutors = async () => {
            let response = await fetch("http://localhost:8888/tutors");
            let data = await response.json();
            setTutors(data);
        }
        getTutors();
    }, []);

    const handleSearch = async (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        let response = await fetch(`http://localhost:8888/tutors/search?skill_input=${searchInput}`);
        let data = await response.json();
        setTutors(data);
    };

    return (
        <div>
            <h1>Tutors</h1>
            <div className="search-box">
                <form onSubmit={handleSearch} >
                        <label htmlFor="skill_input">Search by Skill </label>
                        <input
                            type="text"
                            name="skill_input"
                            id="skill_input"
                            value={searchInput}
                            onChange={(e) => setSearchInput(e.target.value)}
                        />
                        <input type="submit" value="Search" />
                    </form>
            </div>
            <ul>
                {
                    tutors.map((tutor) => (
                        <div key={tutor._id}>
                            <li>{tutor.firstName} {tutor.lastName} - Skills: {tutor.skills} - Hourly Rate: {tutor.hourlyRate} - Platform: {tutor.platforms}</li>

                            {/* <form action="http://localhost:8888/tutors/edit">
                                <input type="hidden" name="tutorId" value={tutor._id}/>
                                <button type="submit">Edit</button>
                            </form> */}
                            <Link to = {`/edittutor/${tutor._id}`}><button>Edit</button></Link>

                            <form action="http://localhost:8888/tutors/delete">
                                <input type="hidden" name="tutorId" value={tutor._id}/>
                                <button type="submit">Delete</button>
                            </form>

                        </div>
                    ))
                }
            </ul>
            <button><Link to="/addtutor">Add Tutor</Link></button>
        </div>
    );
}