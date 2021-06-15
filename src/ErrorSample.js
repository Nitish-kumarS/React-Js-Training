

function ErrorSample({name}) {
    if(name==="nitish"){
        throw new Error("Not a user");
    }
    return(
        <h2>gesd{name}</h2>
    )
}
export default ErrorSample;