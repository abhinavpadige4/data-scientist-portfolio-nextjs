import { GetStaticPaths, GetStaticProps } from 'next';
import { serialize } from 'next-mdx-remote/serialize';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import fs from 'fs';
import path from 'path';
import Head from 'next/head';
import SEO from '@/components/seo';

interface BlogPostProps {
  source: string;
  frontMatter: {
    title: string;
    date: string;
    excerpt?: string;
    image?: string;
    readTime?: string;
  };
}

export default function BlogPost({ source, frontMatter }: BlogPostProps) {
  return (
    <>
      <SEO 
        title={frontMatter.title}
        description={frontMatter.excerpt || `Read ${frontMatter.title} on my data science blog`}
        image={frontMatter.image || '/blog-default.jpg'}
        type="article"
      />
      
      <article className="pt-16 pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <time className="text-sm text-gray-500">{frontMatter.date}</time>
            {frontMatter.readTime && (
              <span className="ml-4 px-2 py-0.5 bg-primary-100 text-primary-800 text-xs rounded">{frontMatter.readTime}</span>
            )}
          </div>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-8">{frontMatter.title}</h1>
          
          {frontMatter.image && (
            <div className="mb-8">
              <img 
                src={frontMatter.image} 
                alt={frontMatter.title} 
                className="rounded-lg shadow-md w-full h-auto"
              />
            </div>
          )}
          
          <div className="prose prose-lg mx-auto prose-blank:space-y-6">
            {/* MDX content will be rendered here */}
            <div dangerouslySetInnerHTML={{ __html: source }} />
          </div>
          
          <div className="mt-12 pt-8 border-t border-border/200">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
              <div className="mb-4 sm:mb-0">
                <Link href="/blog" className="text-sm text-primary-600 hover:text-primary-800 transition-colors duration-200">
                  ← Back to Blog
                </Link>
              </div>
              <div className="flex space-x-4">
                <a 
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(frontMatter.title)}&url=${encodeURIComponent(window.location.href)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-gray-700 transition-colors duration-200"
                >
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14l3-3 3 3M3 20h18" />
                  </svg>
                </a>
                <a 
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-gray-700 transition-colors duration-200"
                >
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14l3-3 3 3M3 20h18" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const postsDirectory = path.join(process.cwd(), 'content/blog');
  const fileNames = fs.readdirSync(postsDirectory);
  
  const paths = fileNames.map((fileName) => ({
    params: {
      slug: fileName.replace(/\.mdx$/, ''),
    },
  }));
  
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params?.slug) {
    return {
      notFound: true,
    };
  }
  
  const postsDirectory = path.join(process.cwd(), 'content/blog');
  const filePath = path.join(postsDirectory, `${params.slug}.mdx`);
  
  if (!fs.existsSync(filePath)) {
    return {
      notFound: true,
    };
  }
  
  const fileContents = fs.readFileSync(filePath, 'utf8');
  
  // Use gray-matter to parse the post metadata section
  const matter = require('gray-matter');
  const { data, content } = matter(fileContents);
  
  // Use next-mdx-remote to convert MDX to HTML
  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings],
    },
  });
  
  return {
    props: {
      source: mdxSource,
      frontMatter: {
        title: data.title,
        date: data.date,
        excerpt: data.excerpt,
        image: data.image,
        readTime: data.readTime,
      },
    },
  };
};