import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


export default function TutorProfileLearnerView () {

    const { tutorId } = useParams(); //Get the tutorId from the URL
    const [tutorToView, setTutorToView] = useState({
        _id: "", // Initialize with an empty string or default value
        firstName: "",
        lastName: "",
        skills: "",
        platforms: "",
       
    });

    useEffect(() => {
        const getTutorToView = async () => {
            let response = await fetch(`${import.meta.env.VITE_SERVER_URL}/tutorprofilelearnerview?tutorId=${tutorId}`);
            let data = await response.json();
            setTutorToView(data);
        }
        getTutorToView();
    }, [tutorId]);

    console.log(tutorToView);

    return(
        <>
            <h1>{tutorToView.firstName} {tutorToView.lastName}</h1>

            {/* <img className="tutor-profile-pic-list" src="./src/images/portrait-placeholder.png" alt="profile photo of tutor" /> */}
            <div className="tutor-profile-email">
                Email:  {tutorToView.email}
            </div>

            <div className="tutor-profile-skills">
                Skill:  {tutorToView.skills}
            </div>
            <div className="tutor-profile-hourly-rate">
                Hourly Rate: {tutorToView.hourlyRate}
            </div>
            <div className="tutor-profile-platform">
                Platforms: {tutorToView.platforms}
            </div>

            <button>Book a Lesson</button>
            <button>Contact Tutor</button>
            <button>Rate and Give Feedback</button>
     
        </>
    )



}