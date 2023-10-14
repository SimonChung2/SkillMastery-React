import {useState, useEffect} from "react";
import { useParams } from "react-router-dom";

export default function EditTutor(){

    const { tutorId } = useParams(); //Get the tutorId from the URL
    const [tutorToEdit, setTutorToEdit] = useState({
        _id: "", // Initialize with an empty string or default value
        firstName: "",
        lastName: "",
        skills: "",
        platforms: "",
        email: "",
        password: "",
        active: "",
    });
    // console.log(tutorToEdit);

    useEffect(() => {
        const getTutorToEdit = async () => {
            let response = await fetch(`http://localhost:8888/tutors/edit?tutorId=${tutorId}`);
            let data = await response.json();
            setTutorToEdit(data);
        }
        getTutorToEdit();
    }, [tutorId]);

    console.log(tutorId);
    console.log(tutorToEdit);
    return(
        <div>
            <h1>Edit Tutor</h1>
            <form className="edit-tutor-form" method="post" action={`http://localhost:8888/tutors/edit/submit?tutorId=${tutorId}`}>
                <input type="hidden" name="tutorId" defaultValue={tutorToEdit._id}/>

                <label for="firstName">First Name</label>
                <input type="text" id="firstName" name="firstName" defaultValue={tutorToEdit.firstName}/>

                <label for="lastName">Last Name</label>
                <input type="text" id="lastName" name="lastName" defaultValue={tutorToEdit.lastName}/>

                <label for="skills">Skills</label>
                <input type="text" id="skills" name="skills" defaultValue={tutorToEdit.skills}/>

                <label for="platforms">Platforms</label>
                <input type="text" id="platforms" name="platforms" defaultValue={tutorToEdit.platforms}/>

                <label for="hourlyRate">Hourly Rate</label>
                <input type="number" id="hourlyRate" name="hourlyRate" defaultValue={tutorToEdit.hourlyRate}/>

                <label for="email">Email</label>
                <input type="text" id="email" name="email" defaultValue={tutorToEdit.email}/>

                <label for="password">Password</label>
                <input type="password" id="password" name="password" defaultValue={tutorToEdit.password}/>

                <input type="hidden" name="active" defaultValue={tutorToEdit.active}/>
                
                <button type="submit">Update Tutor</button>

            </form>

        </div>
    );
}