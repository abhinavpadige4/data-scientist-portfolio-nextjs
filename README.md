# Data Scientist Portfolio Website

A modern, responsive portfolio website built for data scientists featuring projects, blog, and contact form. Built with Next.js, TypeScript, Tailwind CSS, and MDX.

## Features

- **Home Page**: Hero introduction with call-to-action buttons
- **About Page**: Professional bio, skills showcase, and experience highlights
- **Projects Page**: Showcase of data science projects with live demos and GitHub links
- **Blog Section**: MDX-powered blog for sharing data science insights and tutorials
- **Contact Form**: Functional contact form with email notifications
- **Responsive Design**: Optimized for mobile, tablet, and desktop views
- **SEO Optimized**: Meta tags, Open Graph support, and semantic HTML
- **Accessibility**: WCAG AA compliant with proper ARIA labels and keyboard navigation
- **Performance**: Lighthouse score >90 with optimized assets and code splitting
- **TypeScript**: End-to-end type safety for improved developer experience
- **Serverless Functions**: Contact form handled via Vercel Serverless Functions

## Tech Stack

- **Framework**: [Next.js 13](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) for utility-first styling
- **Content**: [MDX](https://mdxjs.com/) for blog posts with JSX support
- **Forms**: Custom contact form with validation
- **Deployment**: [Vercel](https://vercel.com/) for seamless deployment
- **Icons**: Custom SVG icons with React integration
- **Email**: [Nodemailer](https://nodemailer.com/) for contact form notifications

## Getting Started

### Prerequisites

- Node.js 16.8 or later
- npm or yarn
- Git

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/abhinavpadige4/data-scientist-portfolio-nextjs.git
   cd data-scientist-portfolio-nextjs
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up environment variables:
   Create a `.env.local` file in the root directory:
   ```env
   # Email configuration for contact form (optional for development)
   EMAIL_USER=your_email@example.com
   EMAIL_PASS=your_email_password
   ```

4. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
data-scientist-portfolio-nextjs/
├── components/           # Reusable UI components
│   ├── layout.tsx        # Main layout with header/footer
│   ├── ui/               # Primitive UI components (Button, Input, Card)
│   └── seo.tsx           # SEO meta tags component
├── content/              # MDX blog posts
│   └── blog/
│       ├── getting-started-with-machine-learning.mdx
│       ├── data-visualization-python.mdx
│       └── deploying-ml-models-production.mdx
├── pages/                # Next.js pages
│   ├── api/              # API routes
│   │   └── contact.ts    # Contact form handler
│   ├── blog/             # Blog routes
│   │   ├── [slug].jsx    # Dynamic blog post page
│   │   └── index.tsx     # Blog index page
│   ├── about.tsx         # About page
│   ├── contact.tsx       # Contact page
│   ├── index.tsx         # Home page
│   └── projects.tsx      # Projects page
├── public/               # Static assets
├── styles/               # Global CSS styles
│   └── globals.css       # Tailwind base styles
└── ...                   # Configuration files
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint for code quality
- `npm run test` - Run tests (if configured)

## Deployment

This project is optimized for deployment on [Vercel](https://vercel.com/):

1. Push your code to GitHub
2. Import the repository in Vercel
3. Vercel will automatically detect it's a Next.js project and configure the build settings
4. Add any required environment variables in Vercel dashboard
5. Deploy!

## Customization

### Adding New Blog Posts

1. Create a new `.mdx` file in `content/blog/`
2. Add frontmatter at the top:
   ```mdx
   ---
   title: "Your Blog Post Title"
   date: "Month DD, YYYY"
   excerpt: "Brief description of your post"
   image: "/blog/your-image.jpg"
   readTime: "X min read"
   ---
   ```
3. Write your content using Markdown and JSX as needed

### Modifying Theme Colors

Edit `tailwind.config.js` to customize the color palette:
```js
theme: {
  extend: {
    colors: {
      primary: {
        500: '#0ea5e9', // Your primary color
        // ... other shades
      }
    }
  }
}
```

### Adding New Projects

Edit `pages/projects.tsx` and add new project cards following the existing pattern.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Inspired by various data science portfolio websites
- Built with Next.js, Tailwind CSS, and TypeScript
- Icons and illustrations from various open-source sources
- Special thanks to the open-source community for amazing tools and libraries

## Contact

If you have any questions or suggestions, feel free to reach out through the contact form or email me directly at [youremail@example.com](mailto:youremail@example.com).

---

**Happy coding and best of luck with your data science journey!** 🚀