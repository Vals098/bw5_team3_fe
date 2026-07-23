
import SidebarUser from "../components/SidebarUser";

function UserLayout() {
  return (
    <div className="d-flex vh-100">

      <SidebarUser />

      <div className="flex-grow-1 p-4">

        <h2>Area contenuti</h2>
        <p>Qui verranno caricate le pagine selezionate dalla sidebar.</p>


      </div>

    </div>
  );
}

export default UserLayout;