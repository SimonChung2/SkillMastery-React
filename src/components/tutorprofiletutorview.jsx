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

            <img className="tutor-profile-pic-list" src="https://img.freepik.com/premium-vector/account-icon-user-icon-vector-graphics_292645-552.jpg" alt="profile photo of tutor" />
            <div >
                Email: {tutorToView.email}
            </div>
            <div>
                Skills:  {tutorToView.skills}
            </div>
            <div>
                Hourly Rate: {tutorToView.hourlyRate}
            </div>
            <div>
                Platforms: {tutorToView.platforms}
            </div>


            <button>View Bookings</button>
            <button>View Messages</button>
            <Link to={`/edittutor/${tutorId}`}><button>Update Profile</button></Link>
            <form action={`${import.meta.env.VITE_SERVER_URL}/tutors/delete`}>
                <input type="hidden" name="tutorId" value={tutorToView._id}/>
                <button type="submit">Delete Profile</button>
            </form>
     
        </>
    )
}