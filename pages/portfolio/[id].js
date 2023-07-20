import { useRouter } from "next/router";

function Portfolio() {
  const { id } = useRouter().query;

  return (
    <div>
      <h2>Page for Portfolio with id: {id}</h2>
    </div>
  );
}

export default Portfolio;
