import { FunctionComponent } from "react";
import {DataObject} from "../../interfaces/DataInterface"

interface DashboardProps {
    data: DataObject[]
}
 
const Dashboard: FunctionComponent<DashboardProps> = ({ data }) => {
    return ( 
        <p>{`${JSON.stringify(data)}`}</p>
     );
}
 
export default Dashboard;