import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import SEO from '@/components/seo';

export default function BlogIndex() {
  const router = useRouter();
  
  // Sample blog posts data
  const posts = [
    {
      id: 1,
      title: "Getting Started with Machine Learning: A Beginner's Guide",
      excerpt: "Learn the fundamentals of machine learning, from basic concepts to practical implementation with Python and scikit-learn.",
      date: "March 15, 2023",
      slug: "getting-started-with-machine-learning",
      image: "/blog/ml-beginner-guide.jpg",
      readTime: "8 min read"
    },
    {
      id: 2,
      title: "Building Effective Data Visualizations with Python",
      excerpt: "Master the art of data visualization using matplotlib, seaborn, and plotly to create compelling stories from your data.",
      date: "February 28, 2023",
      slug: "data-visualization-python",
      image: "/blog/data-viz-python.jpg",
      readTime: "10 min read"
    },
    {
      id: 3,
      title: "Deploying Machine Learning Models to Production",
      excerpt: "Step-by-step guide on deploying ML models using Docker, Kubernetes, and cloud platforms for scalable production systems.",
      date: "January 20, 2023",
      slug: "deploying-ml-models-production",
      image: "/blog/ml-deployment.jpg",
      readTime: "12 min read"
    }
  ];

  return (
    <>
      <SEO 
        title="Blog - Data Scientist Portfolio"
        description="Read my latest articles on data science, machine learning, and analytics"
        image="/blog-og.png"
      />
      
      <section className="pt-16 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest Articles</h2>
            <p className="text-gray-600">
              Explore my thoughts on data science, machine learning, and analytics through practical tutorials and insights.
            </p>
          </div>
          
          <div className="grid gap-8">
            {posts.map((post) => (
              <Link 
                key={post.id} 
                href={`/blog/${post.slug}`} 
                className="group"
              >
                <div className="bg-white rounded-lg border border-border/50 shadow-sm hover:shadow-md transition-shadow duration-300 hover:-translate-y-1">
                  <div className="p-6">
                    <div className="mb-4 flex items-center space-x-3">
                      <time className="text-sm text-gray-500">{post.date}</time>
                      <span className="px-2 py-0.5 bg-primary-100 text-primary-800 text-xs rounded">{post.readTime}</span>
                    </div>
                    
                    {post.image && (
                      <div className="h-36 w-full rounded-lg overflow-hidden mb-4">
                        <img 
                          src={post.image} 
                          alt={post.title} 
                          className="object-cover w-full h-full"
                        />
                      </div>
                    )}
                    
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 hover:text-primary-600 transition-colors duration-200 group-hover:text-primary-600">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-600 line-clamp-3 mb-4">
                      {post.excerpt}
                    </p>
                    
                    <div className="mt-4 pt-4 border-t border-border/200">
                      <span className="text-sm text-primary-600 font-medium">Read more →</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
            
            {/* Show more button */}
            <div className="flex justify-center">
              <Button 
                variant="outline" 
                size="md"
                asChild
                href="/blog/all"
              >
                View All Posts
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}