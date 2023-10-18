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

    return (
        <div className="tutor-profile-container">
        <h1 className="tutor-profile-header">
            {tutorToView.firstName} {tutorToView.lastName}
        </h1>
  
        <img
          className="tutor-profile-pic"
          src="https://img.freepik.com/premium-vector/account-icon-user-icon-vector-graphics_292645-552.jpg"
          alt="profile photo of tutor"
        />
  
        <div className="tutor-profile-info">
          <div className="tutor-profile-item">
            Email: {tutorToView.email}
          </div>
          <div className="tutor-profile-item">
            Skill: {tutorToView.skills}
          </div>
          <div className="tutor-profile-item">
            Hourly Rate: ${tutorToView.hourlyRate} /hr
          </div>
          <div className="tutor-profile-item">
            Platforms: {tutorToView.platforms}
          </div>
        </div>
  
        <div className="tutor-profile-actions">
          <button>Book a Lesson</button>
          <button>Contact Tutor</button>
          <button>Rate and Give Feedback</button>
        </div>
      </div>    
      )
}