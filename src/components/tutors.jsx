import {useState, useEffect} from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Tutors() {
    const [tutors, setTutors] = useState([]);

    useEffect(() => {
        const getTutors = async () => {
            let response = await fetch("http://localhost:8888/tutors");
            let data = await response.json();
            setTutors(data);
        }
        getTutors();
    }, []);

    

    return (
        <div>
            <h1>Tutors</h1>
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