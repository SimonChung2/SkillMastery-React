import {useState, useEffect} from "react";

export default function TutorListReadOnly(){
    



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
            <div>
                <form onSubmit={handleSearch}>
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
            <ul className="tutor-list"> 
                {
                    tutors.map((tutor) => (
                        <li key={tutor._id} className="tutor-card-list">
                            <img className="tutor-profile-pic-list" src="./src/images/portrait-placeholder.png" alt="profile photo of tutor" />
                            <div>
                                <li>{tutor.firstName} {tutor.lastName} </li>
                                <li>Skills: {tutor.skills} </li>
                                <li>Hourly Rate: {tutor.hourlyRate}</li> 
                                <li>Platform: {tutor.platforms}</li>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}
