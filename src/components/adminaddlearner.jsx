export default function AdminAddLearner(){
    return (
        <div>
            
            <h1>Add Learner</h1>
                <form className="login-form" method="post" action={`${import.meta.env.VITE_SERVER_URL}/admin/learners/add/submit`}>
                    <div className="add-learner-form-container">
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
                            <label for="password">Password</label>
                            <input type="password" id="password" name="password"/>
                        </div>
                        <div>
                            <input type="hidden" name="active" value="yes"/>
                        </div>
                        <div>
                            <input type="submit" value="Submit"/>
                        </div>
                    </div>
                </form>
            </div>
    );
}