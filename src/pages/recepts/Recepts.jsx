import { useFetch } from "../../hooks/useFetch";
import { NavLink } from "react-router-dom";

function Recepts() {
  const {
    data: recepts,
    error,
    isPending,
  } = useFetch("http://localhost:3000/recepts");
  return (
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
              <h2>{recept.title}</h2>
              <p>By {recept.author}</p>
              <NavLink to={`./${recept.id}`}>Read More</NavLink>
            </div>
          );
        })}
    </div>
  );
}

export default Recepts;
