import { useEffect, useState } from "react";
import { getNews } from '../services/newsApi';
export default function NewsPage() {
  const [getNews, setgetNews] = useState([]);

  useEffect(() => {
    async function fetchNews() {
      const apiKey = process.env.NEXT_PUBLIC_NEWS_API_KEY;
      const url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=292ca26ef1da42f6869e2a0841091145`;
      const res = await fetch(url);
      const data = await res.json();
      setgetNews(data.articles || []);
    }
    fetchNews();
  }, []);
  const article = [
    {
      id: 1,
      title: "Climate Summit Reaches Historic Agreement on Carbon Emissions",
      excerpt: "World leaders unite on ambitious new targets for reducing global carbon footprint by 2030.",
      category: "Environment",
      readTime: "3 min read",
      publishedAt: "4 hours ago",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Main Content */}
        <main>
          {/* Latest News Section */}
          <section>
            <h2 className="text-3xl font-bold mb-8 font-sans">Latest News</h2>
            <div className="space-y-6">
              {article.map((getNews,idx) => (
                <article
                  key={idx}
                  className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 group"
                >
                  <div className="flex items-start justify-between mb-3">
                    <span className="px-3 py-1 bg-primary text-primary-foreground text-sm font-medium rounded-full">
                      {article.category}
                    </span>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <span>{article.readTime}</span>
                      <span className="mx-2">•</span>
                      <span>{article.publishedAt}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-card-foreground group-hover:text-primary transition-colors duration-200 font-sans text-balance">
                    {getNews.url}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-pretty">{article.excerpt}</p>
                </article>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}
