import { useRouter } from "next/router";
function Overview() {
  const { id } = useRouter().query;
  return <div>Welcome to client with Id: {id} Overview Page</div>;
}

export default Overview;
