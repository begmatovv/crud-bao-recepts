import { NavLink, Outlet } from "react-router-dom";
function RootLayout() {
  return (
    <>
      <nav>
        <h1>My Recepts</h1>

        <NavLink to="/">Home</NavLink>
        <NavLink to="/recepts">MENU</NavLink>
        <NavLink to="/about">About</NavLink>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
