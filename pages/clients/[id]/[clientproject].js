import React from "react";
import { useRouter } from "next/router";

function Clientproject() {
  const { id, clientproject } = useRouter().query;

  return (
    <div>
      <h2>
        Welcome to Client with Id: {id}, Project: {clientproject}
      </h2>
    </div>
  );
}

export default Clientproject;
