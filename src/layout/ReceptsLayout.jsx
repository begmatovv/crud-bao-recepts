import { Outlet } from "react-router-dom";

function ReceptsLayout() {
  return (
    <div>
      <h1>MENU</h1>
      <hr />
      <Outlet />
    </div>
  );
}

export default ReceptsLayout;
