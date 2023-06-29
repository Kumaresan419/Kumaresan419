import { Link } from "react-router-dom";
export default function Home() {
  return (
    <>
      <main>
        <h2>Welcome to the Home Page</h2>
        <p>Always be positive</p>
      </main>
      <nav>
        <Link to="/About">About</Link>
      </nav>
    </>
  );
}
