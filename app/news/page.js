import Link from "next/link";

export default function NewsPage() {
  const news = [
    {
      id: 1,
      title: "Breaking News",
      content: "This is the latest breaking news.",
    },
    { id: 2, title: "Tech Update", content: "New advancements in technology." },
    {
      id: 3,
      title: "Sports Highlights",
      content: "Highlights from the recent sports events.",
    },
  ];

  return (
    <div id="news">
      <h1>Latest News</h1>
      <p>Stay updated with the latest news articles.</p>
      <ul>
        {news.map((article) => (
          <li key={article.id}>
            <Link
              href={`/news/${article.title.toLowerCase().replace(/ /g, "-")}`}
            >
              <h2>{article.title}</h2>
            </Link>
            <p>{article.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
