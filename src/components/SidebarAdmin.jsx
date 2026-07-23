import { Link } from "react-router-dom";

function SidebarAdmin() {

    return (

        <div
            className="bg-dark text-white p-3"
            style={{ width: "250px" }}
        >

            <h4>Admin</h4>

            <Link className="d-block text-white mb-2" to="/menu-admin">
                Dashboard
            </Link>

            <Link className="d-block text-white mb-2" to="/menu-admin/clients">
                Clienti
            </Link>

            <Link className="d-block text-white mb-2" to="/menu-admin/employees">
                Dipendenti
            </Link>

        </div>

    );

}

export default SidebarAdmin;