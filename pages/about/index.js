import { useRouter } from "next/router";
import React from "react";

function About() {
  const router = useRouter();
  return (
    <div>
      <h2>Welcome to the About Page</h2>
      <button onClick={() => router.push("/")}>Go back to home page</button>
    </div>
  );
}

export default About;
