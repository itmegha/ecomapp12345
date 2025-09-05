import { useRouteError } from "react-router-dom";

function Error(){
    const err = useRouteError();
    console.log(err);
    return(<>
        <h1>{err.status}</h1>
        <h3>{err.statusText}</h3>
        <p>{err.data}</p>

    </>)
}
export default Error;