import { NavLink, Outlet } from "react-router-dom";
function RootLayout() {
  return (
    <div>
      <div className="body-bg"></div>
      <div className="recepts-bg">
        <nav>
          <h1>My Recepts</h1>

          <NavLink to="/">
            <span className="navbar-links">Home</span>
          </NavLink>
          <NavLink to="/recepts">
            <span className="navbar-links">Menu</span>
          </NavLink>
          <NavLink to="/about">
            <span className="navbar-links">About</span>
          </NavLink>
        </nav>
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default RootLayout;
