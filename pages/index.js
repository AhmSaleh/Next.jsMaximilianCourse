import React from "react";
import Link from "next/link";

function HomePage() {
  return (
    <div>
      <h1>Welcome to the Routes Page</h1>
      <ul>
        <li>
          <Link href="/about">Go to About Page</Link>
        </li>
        <li>
          <Link href="/blog/1/sub-blog/3">
            Go to Blog Page with catch-all feature
          </Link>
        </li>
        <li>
          <Link href="/clients">Go to Clients Main Page</Link>
        </li>
        <li>
          <Link href="/clients/1">Go to Client 1 Main Page</Link>
        </li>
        <li>
          <Link href="/clients/1">Go to Client 1 overview Page</Link>
        </li>
        <li>
          <Link href="/clients/1/2">Go to Client 1 Page, Project 2</Link>
        </li>
        <li>
          <Link href="/portfolio">Go to Portfolio Main Page</Link>
        </li>
        <li>
          <Link href="/portfolio/1">Go to Portfolio with Id 1 Page</Link>
        </li>

        <li>
          <Link href="/portfolio/list">Go to Portfolios list Page</Link>
        </li>
      </ul>
    </div>
  );
}

export default HomePage;
