// export default () => <span>Auth</span>

import { authService } from "fbase";
import { useState } from "react";

// 자동으로 import 할 수 있게 하려면 다음과 같이 쓴다
const Auth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [newAccount, setNewAccount] = useState(true);
    const [error, setError] = useState("");
    const onChange = (event) => {
        const {target : {name, value}} = event;
        if(name === "email"){
            setEmail(value)
        } else if (name ==="password"){
            setPassword(value);
        }
    };
    
    const onSubmit = async(event) => {
        event.preventDefault();
        try{
            if(newAccount){
                const data = await authService.createUserWithEmailAndPassword(
                    email, password
                )
            } else {
                const data = await authService.signInAndRetrieveDataWithCredential(
                    email, password);
            }
            console.log(data);
        } catch(error) {
            setError(error.message);
        }
    };
    const toggleAccount = () => setNewAccount((prev) => !prev);
    return (
        <div>
            {/* onsubmit : form 태그 안에서 form전송을 하기 전에 입력된 데이터의 유효성을 체크하기 위해 사용하는 이벤트. */}
            <form onSubmit={onSubmit}>
                {/* input tag https://developer.mozilla.org/ko/docs/Web/HTML/Element/Input */}
                <input 
                name="email"
                type="email"
                placeholder="Email"
                required value={email}
                onChange={onChange}
                />
                <input 
                name="password"
                type="password"
                placeholder="Password"
                required value={password} 
                onChange={onChange}
                />
                <input type="submit" value={newAccount ? "Create Account" : "Log In"}></input>
                {error};
            </form>
            <span onClick={toggleAccount}>{newAccount ? "Sign in" : "Create Account"}</span>
            <div>
                <button>Continue with Google</button>
                <button>Continue with Github</button>
            </div>
        </div>
    )
}
export default Auth;