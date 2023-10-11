import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";



export default function LearnerProfileLearnerView () {

    const { learnerId } = useParams(); //Get the learnerId from the URL
    const [learnerToView, setLearnerToView] = useState({
        _id: "", // Initialize with an empty string or default value
        firstName: "",
        lastName: "",
        email: "",
    });

    useEffect(() => {
        const getLearnerToView = async () => {
            let response = await fetch(`http://localhost:8888/learnerprofilelearnerview?learnerId=${learnerId}`);
            let data = await response.json();
            setLearnerToView(data);
        }
        getLearnerToView();
    }, [learnerId]);

    console.log(learnerToView);

    return(
        <>
            <h1>{learnerToView.firstName} {learnerToView.lastName}</h1>

            <div className="learner-profile-contact">
                Email: {learnerToView.email}
            </div>

            <button>View Bookings</button>

            <Link to={`/editlearner/${learnerId}`}><button>Update Profile</button></Link>

            <form action="http://localhost:8888/learners/delete">
                <input type="hidden" name="learnerId" value={learnerToView._id}/>
                <button type="submit">Delete</button>
            </form>
        </>
    )



}