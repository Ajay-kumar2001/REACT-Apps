import "./App.css"
function LoginField(){
    return(
    <div className="filds">
        <div>
            <label for="e1"> email</label>
            <input id="e1" type="email" placeholder="Enter Email"></input><br/>
        </div>
        <div>
            <label for="e2"> password</label>
            <input id="e2" type="password" placeholder="Enter password"></input><br/>
        </div>
        <div>
             <button>sign in</button><span>forgot passward</span>
        </div>



    </div>)
}
export default LoginField
