import NewsList from "@/components/NewsList";
import { getAllNews } from "@/lib/news";

export default async function NewsPage() {
  const news = getAllNews();
  return (
    <div id="news">
      <h1>News Headline</h1>
      <p>Stay updated with the latest news articles.</p>
      <NewsList news={news} />
    </div>
  );
}
