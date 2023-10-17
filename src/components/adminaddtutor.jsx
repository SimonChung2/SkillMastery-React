export default function AdminAddTutor(){
    return (
        <div>
        <h1>Add Tutor</h1>
            <form className="add-tutor-form" method="post" action={`${import.meta.env.VITE_SERVER_URL}/admin/tutors/add/submit`}>
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
                    <input type="hidden" name="active" value="no"/>
                </div>

                <div>
                    <input type="submit" value="Submit"/>
                </div>
            </form>
        </div>
    );
}