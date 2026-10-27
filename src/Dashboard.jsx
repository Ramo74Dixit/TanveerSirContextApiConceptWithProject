import { useContext } from "react";
// import { UserContext } from "./UserContext";
import { ThemeContext } from "./ThemeContext";
function Dashboard(){
    // const {user,login,logout}=useContext(UserContext);
    const {theme}= useContext(ThemeContext);
    return(
        <div>
            <h1>Welcome to Dashboard</h1>
            <p>Current Theme :{theme}</p>
        </div>
    )
}

export default Dashboard;