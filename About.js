import { Link } from "react-router-dom";
export default function About() {
  return (
    <>
      <main>
        <h2>Welcome to the About Page</h2>
        <p>Always be Simple</p>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
}
