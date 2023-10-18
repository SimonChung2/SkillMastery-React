import {useState, useEffect} from "react";
import { Link } from "react-router-dom";

export default function Tutors() {
    const [tutors, setTutors] = useState([]);
    const [searchInput, setSearchInput] = useState("");
    const [learners, setLearners] = useState([]);

    useEffect(() => {
        const getLearners = async () => {
            let response = await fetch(`${import.meta.env.VITE_SERVER_URL}/learners`);
            let data = await response.json();
            setLearners(data);
        }
        getLearners();
    }, []);


    useEffect(() => {
        const getTutors = async () => {
            let response = await fetch(`${import.meta.env.VITE_SERVER_URL}/tutors`);
            let data = await response.json();
            setTutors(data);
        }
        getTutors();
    }, []);

    const handleSearch = async (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        let response = await fetch(`${import.meta.env.VITE_SERVER_URL}/tutors/search?skill_input=${searchInput}`);
        let data = await response.json();
        setTutors(data);
    };

    return (
        <>
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
            <table>
                <tr>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Skills</th>
                    <th>Hourly Rate</th>
                    <th>Platform</th>
                    <th>Email</th>
                    <th></th>
                    <th></th>
                </tr>
                {
                    tutors.map((tutor) => (
                        <tr key={tutor._id}>
                            <td>{tutor._id}</td>
                            <td>{tutor.firstName}</td>
                            <td>{tutor.lastName}</td>
                            <td>{tutor.skills}</td>
                            <td>{tutor.hourlyRate}</td>
                            <td>{tutor.platforms}</td>
                            <td>{tutor.email}</td>
                            <td><Link to = {`/admin/edittutor/${tutor._id}`}>
                                <button>Edit</button></Link>
                            </td>
                            <td>                            
                                <form action={`${import.meta.env.VITE_SERVER_URL}/admin/tutors/delete`}>
                                    <input type="hidden" name="tutorId" value={tutor._id}/>
                                    <button type="submit">Delete</button>
                                </form>
                            </td>  

                            {/* <form action="http://localhost:8888/tutors/edit">
                                <input type="hidden" name="tutorId" value={tutor._id}/>
                                <button type="submit">Edit</button>
                            </form> */}
                            
                        </tr>
                    ))
                }
            </table>
            <button><Link to="/admin/addtutor">Add Tutor</Link></button>
            
        </div>
        <div>
            <h2>Learners</h2>

                <table>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th></th>
                        <th></th>
                    </tr>
                    
                    {
                        learners.map((learner) => (
                            
                                <tr>
                                    <td>{learner._id}</td>
                                    <td>{learner.firstName}</td>
                                    <td>{learner.lastName}</td>
                                    <td>{learner.email}</td>
                                    <td>
                                        <Link to = {`/admin/editlearner/${learner._id}`}><button>Edit</button></Link>
                                    </td>
                                    <td>
                                        <form action={`${import.meta.env.VITE_SERVER_URL}/admin/learners/delete`}>
                                            <input type="hidden" name="learnerId" value={learner._id}/>
                                            <button type="submit">Delete</button>
                                        </form>
                                    </td>  
                                </tr>
                            
                        ))
                    }
                    
                </table>
                <button><Link to="/admin/addlearner">Add Learner</Link></button>

        </div>
        </>
    );
}