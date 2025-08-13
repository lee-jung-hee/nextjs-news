export default function NewsDetailPage({ params }) {
  const news = params.newsSlug;
  return (
    <div id="news-detail">
      <h1>{news} Detail</h1>
      <p>{news}</p>
    </div>
  );
}
