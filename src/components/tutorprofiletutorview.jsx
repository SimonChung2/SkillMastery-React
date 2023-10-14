import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";


export default function TutorProfileTutorView () {

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
            let response = await fetch(`http://localhost:8888/tutorprofilelearnerview?tutorId=${tutorId}`);
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
                Email: {tutorToView.email}
            </div>
            <div className="tutor-profile-skills">
                Skills:  {tutorToView.skills}
            </div>
            <div className="tutor-profile-hourly-rate">
                Hourly Rate: {tutorToView.hourlyRate}
            </div>

            <button>View Bookings</button>
            <button>View Messages</button>
            <Link to={`/edittutor/${tutorId}`}><button>Update Profile</button></Link>
            <form action="http://localhost:8888/tutors/delete">
                <input type="hidden" name="tutorId" value={tutorToView._id}/>
                <button type="submit">Delete</button>
            </form>
     
        </>
    )
}