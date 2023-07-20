import React from "react";
import { useRouter } from "next/router";

function ClientProjectsPage() {
  const { id } = useRouter().query;
  return <h2>Welcome to the client with Id: {id} Main Page</h2>;
}

export default ClientProjectsPage;
