import React from "react";

const Blog = () => {
  // Example blog posts with financial themes.
  const posts = [
    {
      title: "Financial Trends in 2025",
      summary:
        "Explore the trends shaping the financial industry in 2025, including market innovations and digital banking breakthroughs.",
      date: "April 12, 2025",
      link: "#",
    },
    {
      title: "Investment Strategies for Volatile Markets",
      summary:
        "Learn the latest investment strategies to navigate unpredictable market conditions while optimizing your portfolio.",
      date: "April 10, 2025",
      link: "#",
    },
    {
      title: "The Rise of FinTech Innovations",
      summary:
        "Discover how innovative financial technologies are transforming traditional banking and investment practices.",
      date: "April 08, 2025",
      link: "#",
    },
  ];

  return (
    <section className="bg-gray-50 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-600">
          Financial Department Blog
        </h1>
        <p className="mt-3 text-gray-500 max-w-xl mx-auto">
          Stay updated with the latest financial news, market insights, and expert opinions.
        </p>
      </div>

      {/* Blog Posts */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow hover:shadow-lg transition duration-300"
            >
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-800">
                  {post.title}
                </h2>
                <p className="text-gray-500 mt-2">{post.summary}</p>
              </div>
              <div className="px-6 pb-6">
                <p className="text-gray-400 text-sm">{post.date}</p>
                <a
                  href={post.link}
                  className="mt-4 inline-block text-blue-600 hover:text-blue-800 font-medium"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
