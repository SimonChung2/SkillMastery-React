export default function AddLearner(){
    return (
        <div>
        <h1>Learner Sign Up</h1>
            <form className="add-learner-form" method="post" action="http://localhost:8888/learners/add/submit">
                <div>
                    <label for="firstName">First Name</label>
                    <input type="text" id="firstName" name="firstName"/>
                </div>
                <div>
                    <label for="lastName">Last Name</label>
                    <input type="text" id="lastName" name="lastName"/>
                </div>
                <div>
                    <label for="email">Email</label>
                    <input type="text" id="email" name="email"/>
                </div>

                <div>
                    <input type="submit" value="Submit"/>
                </div>
            </form>
        </div>
    );
}