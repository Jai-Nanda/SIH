export async function getNews(country = "in") {
  const apiKey = process.env.NEWS_API_KEY;
  const url = `https://newsapi.org/v2/top-headlines?country=IN&apiKey=292ca26ef1da42f6869e2a0841091145`;

  const res = await fetch(url);
  if (!res.ok) throw new Error("Failed to fetch news");
  const data = await res.json();
  return data.articles;
}