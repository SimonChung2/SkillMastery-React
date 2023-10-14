export default function AddTutor(){
    return (
        <div>
        <h1>Tutor Sign Up</h1>
            <form className="add-tutor-form" method="post" action="http://localhost:8888/tutors/add/submit">
                <div>
                    <label for="firstName">First Name</label>
                    <input type="text" id="firstName" name="firstName"/>
                </div>
                <div>
                    <label for="lastName">Last Name</label>
                    <input type="text" id="lastName" name="lastName"/>
                </div>
                <div>
                    <label for="skills">Skills</label>
                    <input type="text" id="skills" name="skills"/>
                </div>
                <div>
                    <label for="platforms">Platforms</label>
                    <input type="text" id="platforms" name="platforms"/>
                </div>
                <div>
                    <label for="hourlyRate">Hourly Rate</label>
                    <input type="number" id="hourlyRate" name="hourlyRate"/>
                </div>
                <div>
                    <label for="email">Email</label>
                    <input type="text" id="email" name="email"/>
                </div>
                <div>
                    <label for="password">Password</label>
                    <input type="password" id="password" name="password"/>
                </div>
                <div>
                    <input type="hidden" name="active" value="yes"/>
                </div>

                <div>
                    <input type="submit" value="Submit"/>
                </div>
            </form>
        </div>
    );
}