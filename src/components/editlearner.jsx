import {useState, useEffect} from "react";
import { useParams } from "react-router-dom";

export default function EditLearner(){

    const { learnerId } = useParams(); //Get the tutorId from the URL
    const [learnerToEdit, setLearnerToEdit] = useState({
        _id: "", // Initialize with an empty string or default value
        firstName: "",
        lastName: "",
        email: "",
    });

    useEffect(() => {
        const getLearnerToEdit = async () => {
            let response = await fetch(`http://localhost:8888/learners/edit?learnerId=${learnerId}`);
            let data = await response.json();
            setLearnerToEdit(data);
        }
        getLearnerToEdit();
    }, [learnerId]);

    return(
        <div>
            <h1>Edit Learner</h1>
            <form method="post" action={`http://localhost:8888/learners/edit/submit?learnerId=${learnerId}`}>
                <input type="hidden" name="learnerId" defaultValue={learnerToEdit._id}/>

                <label for="firstName">First Name</label>
                <input type="text" id="firstName" name="firstName" defaultValue={learnerToEdit.firstName}/>

                <label for="lastName">Last Name</label>
                <input type="text" id="lastName" name="lastName" defaultValue={learnerToEdit.lastName}/>

                <label for="email">Email</label>
                <input type="text" id="email" name="email" defaultValue={learnerToEdit.email}/>
                
                <label for="password">Password</label>
                <input type="password" id="password" name="password" defaultValue={learnerToEdit.password}/>

                <input type="hidden" name="active" defaultValue={learnerToEdit.active}/>

                <button type="submit">Update Learner</button>

            </form>

        </div>
    );
}