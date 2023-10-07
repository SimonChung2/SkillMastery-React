import {useState, useEffect} from "react";


export default function Home () {
    const [displayedTutors, setDisplayedTutors] = useState([]);

    useEffect(() => {
        const getDisplayedTutors = async () => {
            let response = await fetch("http://localhost:8888/tutors/display");
            let data = await response.json();
            setDisplayedTutors(data);
        }
        getDisplayedTutors();
    }, []);

    return (
        <main>
            <div className="banner-container">
                <img className="banner" src="./src/images/banner-placeholder.svg" alt="banner image for SkillMastery website" />
            </div>
            <section className="tutor-display-container">
                <div className="tutor-display">
                    {
                        displayedTutors.map((tutor) => (
                            <div className="tutor-card" key={tutor._id}>
                                <img className = "tutor-profile-pic-home" src="./src/images/portrait-placeholder.png" alt="tutor profile picture" />
                                <li>{tutor.firstName} {tutor.lastName} </li>
                                <li> Skills: {tutor.skills} </li>
                                <li> Price: {tutor.hourlyRate} /hr </li>
                            </div>
                        ))
                    }
                </div>
            </section>
        </main>
    );
}