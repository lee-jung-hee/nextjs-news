import Link from "next/link";

export default function NewsNotFoundPage() {
  return (
    <div id="error">
      <h1>News Not Found</h1>
      <p>Sorry, the news article you are looking for does not exist.</p>
      <p>
        Please check the URL or return to the{" "}
        <Link href="/news">news page</Link>.
      </p>
    </div>
  );
}
