export default function Login () {




    return (
        <>
            <form className="login-form">
                <div>
                    <label for="email">Email</label>
                    <input type="text" id="email" name="email"/>
                </div>
                <div>
                    <label for="password">Password</label>
                    <input type="password" id="password" name="password"/>
                </div>
            </form>               
        </>
    )
}