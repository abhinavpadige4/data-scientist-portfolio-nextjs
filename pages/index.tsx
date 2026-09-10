import Head from 'next/head';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import SEO from '@/components/seo';

export default function Home() {
  return (
    <>
      <SEO 
        title="Data Scientist Portfolio - Home"
        description="Personal portfolio showcasing data science projects, blog, and expertise"
        image="/og-image.png"
      />
      
      <section className="pt-16 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-6">
                Hi, I'm a Data Scientist
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Passionate about turning data into insights and building impactful machine learning solutions.
              </p>
              <div className="flex gap-4">
                <Button 
                  variant="primary" 
                  size="lg"
                  asChild
                  href="/projects"
                >
                  View My Projects
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  asChild
                  href="/contact"
                >
                  Get in Touch
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-80 h-80 bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl flex items-center justify-center border border-primary-200">
                <svg className="h-40 w-40 text-primary-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Project cards will be populated dynamically */}
            <div className="bg-white rounded-lg border border-border/50 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">Customer Churn Prediction</h3>
                <p className="text-gray-600 mb-4">
                  Built a machine learning model to predict customer churn using XGBoost and SHAP for explainability.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-primary-100 text-primary-800 text-xs font-medium px-2 py-1 rounded">Python</span>
                  <span className="bg-primary-100 text-primary-800 text-xs font-medium px-2 py-1 rounded">Machine Learning</span>
                  <span className="bg-primary-100 text-primary-800 text-xs font-medium px-2 py-1 rounded">XGBoost</span>
                </div>
                <Button 
                  variant="outline" 
                  size="sm"
                  asChild
                  href="https://github.com/username/churn-prediction"
                >
                  View on GitHub
                </Button>
              </div>
            </div>
            
            <div className="bg-white rounded-lg border border-border/50 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">Sales Forecasting Dashboard</h3>
                <p className="text-gray-600 mb-4">
                  Interactive dashboard for sales forecasting using Prophet and Streamlit with real-time updates.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-primary-100 text-primary-800 text-xs font-medium px-2 py-1 rounded">Python</span>
                  <span className="bg-primary-100 text-primary-800 text-xs font-medium px-2 py-1 rounded">Prophet</span>
                  <span className="bg-primary-100 text-primary-800 text-xs font-medium px-2 py-1 rounded">Streamlit</span>
                </div>
                <Button 
                  variant="outline" 
                  size="sm"
                  asChild
                  href="https://github.com/username/sales-forecast"
                >
                  View on GitHub
                </Button>
              </div>
            </div>
            
            <div className="bg-white rounded-lg border border-border/50 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">Natural Language Processing for Sentiment Analysis</h3>
                <p className="text-gray-600 mb-4">
                  BERT-based model for analyzing customer feedback sentiment with deployment via Docker.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-primary-100 text-primary-800 text-xs font-medium px-2 py-1 rounded">Python</span>
                  <span className="bg-primary-100 text-primary-800 text-xs font-medium px-2 py-1 rounded">BERT</span>
                  <span className="bg-primary-100 text-primary-800 text-xs font-medium px-2 py-1 rounded">NLP</span>
                </div>
                <Button 
                  variant="outline" 
                  size="sm"
                  asChild
                  href="https://github.com/username/sentiment-analysis"
                >
                  View on GitHub
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}