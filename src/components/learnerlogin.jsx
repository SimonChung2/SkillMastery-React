export default function LearnerLogin () {




    return (
        <>
            <h1>Learner Login</h1>
            <form method="post" action="http://localhost:8888/learner/login" className="login-form">
                <div>
                    <label for="email">Email</label>
                    <input type="text" id="email" name="email"/>
                </div>
                <div>
                    <label for="password">Password</label>
                    <input type="password" id="password" name="password"/>
                </div>
                <input type="submit" value="Submit"/>
            </form>               
        </>
    )
}