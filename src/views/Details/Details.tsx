import { FunctionComponent, useContext } from "react";
import { UserContext } from "../../context/UserContext";

 
const Details: FunctionComponent = () => {

        const { userState } = useContext(UserContext)

        console.log(userState)

    return ( <h2>Details</h2> );
}
 
export default Details;