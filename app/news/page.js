import { DUMMY_NEWS } from "@/dummy-news";
import NewsList from "@/components/NewsList";

export default function NewsPage() {
  return (
    <div id="news">
      <h1>News Headline</h1>
      <p>Stay updated with the latest news articles.</p>
      <NewsList news={DUMMY_NEWS} />
    </div>
  );
}
