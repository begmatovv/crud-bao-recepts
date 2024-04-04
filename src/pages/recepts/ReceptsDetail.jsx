import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
const ReceptsDetail = () => {
  const { id } = useParams();
  const url = "http://localhost:3000/recepts/" + id;
  const { data: recept, error, isPending } = useFetch(url);
  return (
    <div>
      {" "}
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
      {recept && (
        <>
          <img src={recept.image} alt={recept.name} width={300} />
          <h2>Name: {recept.name}</h2>
          <p className=" bg-black  ">
            INGREDIENTS: <i className="ingredient">{recept.ingredients}</i>
          </p>
          <p>Time: {recept.time}</p>
          <p>{recept.body}</p>
        </>
      )}
    </div>
  );
};

export default ReceptsDetail;
