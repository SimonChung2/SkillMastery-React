import {useState, useEffect} from "react";
import { Link } from "react-router-dom";

export default function Learners() {
    const [learners, setLearners] = useState([]);

    useEffect(() => {
        const getLearners = async () => {
            let response = await fetch(`${import.meta.env.VITE_SERVER_URL}/learners`);
            let data = await response.json();
            setLearners(data);
        }
        getLearners();
    }, []);

    return (
        <div>
            <p>You can see a list of learners and their emails below:</p>
            <ul>
                
                {
                    learners.map((learner) => (
                        <>
                            <li>{learner.firstName} {learner.lastName} - email: {learner.email}</li>

                            <Link to = {`/editlearner/${learner._id}`}><button>Edit</button></Link>

                            <form action={`${import.meta.env.VITE_SERVER_URL}/learners/delete`}>
                                <input type="hidden" name="learnerId" value={learner._id}/>
                                <button type="submit">Delete</button>
                            </form>
                        </>
                    ))
                }
                
            </ul>
        </div>
    );
}