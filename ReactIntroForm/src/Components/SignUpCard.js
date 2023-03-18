import { useOutletContext, useParams } from "react-router-dom";


const SignUpCard = () => {

    //access router context and params passed 
    const [signupList] = useOutletContext();
    const params = useParams();

    //get sign up entry from GET parameter passed
    const foundSignup = signupList.find((signup)=> {
        return signup.email === params.email
    });

    console.log(foundSignup);

    // return details of contact 
    return (
        <div>
            {foundSignup && <p>{foundSignup.firstName}</p>}
            {foundSignup && <p>{foundSignup.lastName}</p>}
            {foundSignup && <p>{foundSignup.email}</p>}
        </div>
    )

}
export default SignUpCard;