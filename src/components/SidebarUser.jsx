import { Link } from "react-router-dom";

function SidebarUser() {

    return (

        <div
            className="bg-dark text-white p-3"
            style={{ width: "250px" }}
        >

            <h4>User</h4>

            <Link className="d-block text-white mb-2" to="/menu">
                Home
            </Link>

            <Link className="d-block text-white mb-2" to="/menu/profile">
                Profilo
            </Link>

        </div>

    );

}

export default SidebarUser;