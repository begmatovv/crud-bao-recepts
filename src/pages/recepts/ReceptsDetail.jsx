import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
const ReceptsDetail = () => {
  const { id } = useParams();
  const url = "http://localhost:3000/articles/" + id;
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
          <img src={recept.image} alt={recept.title} width={300} />
          <h2>Title: {recept.title}</h2>
          <p>
            Author: <i>{recept.author}</i>
          </p>
          <p>{recept.body}</p>
        </>
      )}
    </div>
  );
};

export default ReceptsDetail;
