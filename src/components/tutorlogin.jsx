export default function TutorLogin () {




    return (
        <>
            <h1>Tutor Login</h1>
            <form method="post" action= {`${import.meta.env.VITE_SERVER_URL}/tutor/login`} className="login-form">
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