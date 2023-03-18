import { useState } from "react";

import { useNavigate, useOutletContext } from "react-router-dom";
const MoviePage = () => {

    const [firstName, setFirstName ] = useState("");
    const [lastName, setLastName ] = useState("");
    const [email, setEmail ] = useState("");

    //we can useOutletContext from our react router to 
    //access the context we defined in App.js
    const [handleAddSignUp] = useOutletContext()
    const navigate = useNavigate();



    return(
        <div>
            <h1>Movie Page</h1>

            <h1>Contact</h1>
            <label>First Name</label>
            <input type="text"onChange={(e) =>{
                setFirstName(e.target.value)
            }}/>
            <br/>
            <label>Last Name</label>
            <input type="text"onChange={(e) =>{
                setLastName(e.target.value)
            }}/>
            <br/>
            <label>email</label>
            <input type="text"onChange={(e) =>{
                setEmail(e.target.value)
            }}/>
            <br/>
            <button onClick={() => {
                handleAddSignUp(firstName, lastName, email)
                navigate("/signups")
            }}>Submit</button>
        </div>
    )
    }
    export default MoviePage