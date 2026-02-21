import ContactSection from "../components/AboutUs/ContactSection";
import BlogList from "../components/Blog/BlogList";
import Categories from "../components/Blog/Categories";

function Blog() {
  return (
    <div style={{ padding: "100px 40px" }}>
      <h1>Blog</h1>
      <p>Latest company updates and articles.</p>
      <Categories />
      <BlogList />
      <ContactSection />
    </div>
  );
}

export default Blog;
