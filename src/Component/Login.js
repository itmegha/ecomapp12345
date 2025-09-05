import { useState } from "react";

function Login(){

     const[username,setUsername] = useState('');

    const onchangehandler = (event)=>{
      setUsername(event.target.value)  
    }

    const onSubmitHandler = (event)=>{
       event.preventDefault();
       console.log(username);
    }
    return(
        <>
            <form onSubmit={onSubmitHandler}>
                <input type="text"
                name="username"
                value={username}
                onChange={onchangehandler}
                 />
                <button>Submit</button>
            </form>
        </>
    )
}
export default Login;