import { useFetch } from "../../hooks/useFetch";
import { NavLink } from "react-router-dom";

function Recepts() {
  const {
    data: recepts,
    error,
    isPending,
  } = useFetch("http://localhost:3000/recepts");
  return (
    <div className="recepts-wrapper">
      <div className="recept-container">
        {error && (
          <div>
            <h3>{error}</h3>
          </div>
        )}
        {isPending && (
          <div>
            <h3>Loading...</h3>
          </div>
        )}
        {recepts &&
          recepts.map((recept) => {
            return (
              <div key={recept.id} className="card">
                <div>
                  <h2>{recept.name}</h2>
                  <p className="time">{recept.time}</p>
                </div>

                <NavLink to={`./${recept.id}`}>
                  <span className="view">View →</span>
                </NavLink>
              </div>
            );
          })}
      </div>
      
    </div>
  );
}

export default Recepts;
