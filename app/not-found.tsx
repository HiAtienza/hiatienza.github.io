import Link from "next/link";
export default function NotFound() {
  return (
    <main className="not-found">
      <p className="eyebrow">404</p>
      <h1>That page is not here.</h1>
      <p>The public portfolio has moved on; this address has not.</p>
      <Link className="button" href="/">
        Return home
      </Link>
    </main>
  );
}
