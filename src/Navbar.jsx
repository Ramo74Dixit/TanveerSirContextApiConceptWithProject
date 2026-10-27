import { ThemeContext } from "./ThemeContext";
import { useContext } from "react";
function Navbar(){
  const {theme,toggleTheme}=useContext(ThemeContext)
  return (
    <nav>
        <h2>My Application</h2>
        <p>
            <button onClick={toggleTheme}>
                Switch to {theme==="light"?"Dark":"Light"}
            </button>
        </p>
    </nav>
  )
}

export default Navbar;