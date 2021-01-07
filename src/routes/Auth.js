// export default () => <span>Auth</span>

import { useState } from "react";

// 자동으로 import 할 수 있게 하려면 다음과 같이 쓴다
const Auth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const onChange = (event) => {
        const {target : {name, value}} = event;
        if(name === "email"){
            setEmail(value)
        } else if (name ==="password"){
            setPassword(value);
        }
    };
    const onSubmit = (event) => {
        event.preventDefault();
    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input 
                name="email"
                type="text"
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
                <input type="submit" value="Log In"></input>
            </form>
            <div>
                <button>Continue with Google</button>
                <button>Continue with Github</button>
            </div>
        </div>
    )
}
export default Auth;