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
        <div className="receptdetail">
          <img src={recept.image} alt={recept.name} width={200} height={300} />
          <h2>Name: {recept.name}</h2>
          <p className=" bg-black  ">
            INGREDIENTS:{" "}
            {recept.ingredients.map((ingredient) => {
              return <span className="ingredient">{ingredient}</span>
            })}
          </p>
          <p>Time: <span className="time">{recept.time}</span></p>
          <p>{recept.body}</p>
        </div>
      )}
    </div>
  );
};

export default ReceptsDetail;
