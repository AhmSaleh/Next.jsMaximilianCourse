import { useRouter } from "next/router";

function Blog() {
  const router = useRouter();

  return (
    <div>
      <h2>Welcome to the Blog Page with catch-all Routes Next Feature</h2>
      <h4>Routes Array: {router.query.id.join(", ")}</h4>
    </div>
  );
}

export default Blog;
