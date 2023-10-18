import {useState, useEffect} from "react";
import { Link } from "react-router-dom";


export default function Home () {
    const [displayedTutors, setDisplayedTutors] = useState([]);

    useEffect(() => {
        const getDisplayedTutors = async () => {
            let response = await fetch(`${import.meta.env.VITE_SERVER_URL}/tutors/display`);
            let data = await response.json();
            setDisplayedTutors(data);
        }
        getDisplayedTutors();
    }, []);

    return (
        <main>
            
                <h1>Skill Mastery</h1>
                <p>
                Your gateway to endless learning opportunities.

                No matter what skill you aspire to master, you'll find the perfect tutor here.

                And if you're a tutor, rest assured that your future students are just a click away.
                </p>
            
            <section className="tutor-display-container">
                <div className="tutor-display">
                    {
                        displayedTutors.map((tutor) => (
                            <div className="tutor-card" key={tutor._id}>
                                <img className = "tutor-profile-pic-home" src="https://img.freepik.com/premium-vector/account-icon-user-icon-vector-graphics_292645-552.jpg" alt="tutor profile picture" />
                                <li>{tutor.firstName} {tutor.lastName} </li>
                                <li> Skills: {tutor.skills} </li>
                                <li> Price: ${tutor.hourlyRate} /hr </li>
                            </div>
                        ))
                    }
                </div>
                <div>
                    <Link to="/tutorlist"><button>See All Our Tutors</button></Link>
                    <Link to="/tutorlist"><button>Become A Tutor</button></Link>
                </div>
            </section>
        </main>
    );
}