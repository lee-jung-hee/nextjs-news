import Link from "next/link";
import React from "react";

function MainHeader() {
  return (
    <>
      <header className="main-header">
        <h1>Welcome to My Website</h1>
        <nav>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/news">News</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default MainHeader;
