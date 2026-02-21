import "./BlogList.css";
import { FaShareAlt } from "react-icons/fa";

const blogs = [
  {
    id: 1,
    image: "/images/blog1.jpg",
    tags: ["E-commerce", "Mobile App", "software development", "Web Development"],
    title:
      "Driving Continuous Delivery Excellence with Global Technology Partners",
    author: "Akshit Trivedi",
    date: "18 Jun 2025",
  },
  {
    id: 2,
    image: "/images/blog2.jpg",
    tags: ["Banking", "Fintech", "Insurance", "Java"],
    title:
      "The Future of Java Concurrency: Leveraging Project Loom for Unmatched Business Success",
    author: "Manish Mori",
    date: "6 Aug 2024",
  },
  {
    id: 3,
    image: "/images/blog3.jpg",
    tags: ["Node JS", "React JS"],
    title:
      "Designing and integrating a GraphQL API with Node.js and React.js",
    author: "Keval Shah",
    date: "2 Aug 2024",
  },
  {
    id: 4,
    image: "/images/blog4.jpg",
    tags: ["UI/UX"],
    title: "The Growing Importance of User Research",
    author: "Parth Parmar",
    date: "31 Jul 2024",
  },
];

export default function BlogList() {
  return (
    <div className="blog-container">
      {blogs.map((blog) => (
        <div className="blog-card" key={blog.id}>
          <div className="blog-image">
            <img src={blog.image} alt={blog.title} />
          </div>

          <div className="blog-content">
            <div className="blog-tags">
              {blog.tags.map((tag, index) => (
                <span key={index} className="tag">
                  {tag}
                </span>
              ))}
            </div>

            <h3 className="blog-title">{blog.title}</h3>

            <p className="blog-author">{blog.author}</p>

            <div className="blog-footer">
              <span className="blog-date">{blog.date}</span>
              <FaShareAlt className="share-icon" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}