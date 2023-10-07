import {useState, useEffect} from "react";

export default function Learners() {
    const [learners, setLearners] = useState([]);

    useEffect(() => {
        const getLearners = async () => {
            let response = await fetch("http://localhost:8888/learners");
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
                        <li>{learner.firstName} {learner.lastName} - email: {learner.email}</li>
                    ))
                }
            </ul>
        </div>
    );
}