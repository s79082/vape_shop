import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const Root = () => {

   return <div>
        <NavBar/>
        <div id="content">
            <Outlet></Outlet>
        </div>
    </div>
}

export default Root;