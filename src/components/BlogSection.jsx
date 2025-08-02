import { ArrowRight } from "./Icons";

/**
 * BlogPostPreview Component
 * A sub-component used to display a single blog post card.
 * Font sizes have been reduced for a more compact appearance.
 */
const BlogPostPreview = ({ author, readTime, imageUrl, title, excerpt }) => (
  <a href="#" className="flex flex-col gap-3 group">
    <div className="flex items-center w-full gap-3 text-xs font-bold tracking-wide uppercase text-muted">
      <p>BY {author}</p>
      <div className="flex-1 h-px opacity-25 bg-muted"></div>
      <p>{readTime} MIN READ</p>
    </div>
    <div className="overflow-hidden rounded-lg">
        <img className="block object-cover w-full transition-transform duration-300 aspect-video group-hover:scale-105" src={imageUrl} alt={title} />
    </div>
    {/* Reduced font size from text-xl to text-lg */}
    <h2 className="font-sans text-lg font-bold text-ink group-hover:text-rovio300 transition-colors">{title}</h2>
    {/* Reduced font size from text-lg to text-base */}
    <p className="text-base text-muted">{excerpt}</p>
    <div>
      <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-black transition-all bg-white rounded-full hover:bg-gray-200">
        Read more <ArrowRight />
      </button>
    </div>
  </a>
);

/**
 * BlogSection Component
 * The main component for the "Latest insight" section.
 * Adjustments have been made to max-width and gaps for a more compact layout.
 */
const BlogSection = ({ blogPosts }) => {
  return (
    <section className="px-6 bg-black">
      {/* Reduced max-width from 4xl to 3xl and adjusted gaps/fonts for a tighter layout */}
      <div className="w-full max-w-3xl mx-auto space-y-12">
        {/* Reduced font size for the main heading */}
        <h2 className="font-serif text-3xl text-center sm:text-4xl text-rovio300">
          <b>Latest crypto real estate insight</b>
        </h2>
        <div className="grid items-start grid-cols-1 gap-x-6 gap-y-12 md:grid-cols-2">
          {blogPosts.map((post, index) => (
            <BlogPostPreview key={index} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
