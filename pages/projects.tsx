import Head from 'next/head';
import Link from 'next/link';
import SEO from '@/components/seo';

export default function Projects() {
  return (
    <>
      <SEO 
        title="Projects - Data Scientist Portfolio"
        description="Showcase of my data science projects and machine learning work"
        image="/projects-og.png"
      />
      
      <section className="pt-16 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">My Projects</h2>
          
          <div className="space-y-8">
            {/* Project 1 */}
            <div className="bg-white rounded-lg border border-border/50 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-primary-50 rounded-lg flex items-center justify-center">
                    <svg className="h-8 w-8 text-primary-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Customer Churn Prediction System</h3>
                    <p className="text-gray-600 mb-4">
                      Developed an end-to-end machine learning pipeline to predict customer churn for a telecommunications company. 
                      The system uses XGBoost for prediction and SHAP values for model interpretability, achieving 87% accuracy.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="bg-primary-100 text-primary-800 text-xs font-medium px-2 py-1 rounded">Python</span>
                      <span className="bg-primary-100 text-primary-800 text-xs font-medium px-2 py-1 rounded">XGBoost</span>
                      <span className="bg-primary-100 text-primary-800 text-xs font-medium px-2 py-1 rounded">SHAP</span>
                      <span className="bg-primary-100 text-primary-800 text-xs font-medium px-2 py-1 rounded">Pandas</span>
                      <span className="bg-primary-100 text-primary-800 text-xs font-medium px-2 py-1 rounded">Scikit-learn</span>
                    </div>
                    <div className="flex space-x-3">
                      <Button 
                        variant="outline" 
                        size="sm"
                        asChild
                        href="https://github.com/username/churn-prediction"
                      >
                        GitHub
                      </Button>
                      <Button 
                        variant="secondary" 
                        size="sm"
                        asChild
                        href="https://churn-prediction-demo.vercel.app"
                      >
                        Live Demo
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Project 2 */}
            <div className="bg-white rounded-lg border border-border/50 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-primary-50 rounded-lg flex items-center justify-center">
                    <svg className="h-8 w-8 text-primary-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3 3h18a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2zm0 16H5a2 2 0 00-2 2v2h16a2 2 0 002-2v-2zM9 13h10v2H9zm0-4h10v2H9zm5-8H4a1 1 0 00-1 1v8a1 1 0 001 1h12a1 1 0 001-1v-6a1 1 0 00-1-1z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Sales Forecasting & Analytics Dashboard</h3>
                    <p className="text-gray-600 mb-4">
                      Built an interactive dashboard for sales forecasting using Facebook Prophet and Streamlit. 
                      The dashboard provides real-time predictions, trend analysis, and seasonal decomposition for business planning.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="bg-primary-100 text-primary-800 text-xs font-medium px-2 py-1 rounded">Python</span>
                      <span className="bg-primary-100 text-primary-800 text-xs font-medium px-2 py-1 rounded">Prophet</span>
                      <span className="bg-primary-100 text-primary-800 text-xs font-medium px-2 py-1 rounded">Streamlit</span>
                      <span className="bg-primary-100 text-primary-800 text-xs font-medium px-2 py-1 rounded">Plotly</span>
                      <span className="bg-primary-100 text-primary-800 text-xs font-medium px-2 py-1 rounded">Pandas</span>
                    </div>
                    <div className="flex space-x-3">
                      <Button 
                        variant="outline" 
                        size="sm"
                        asChild
                        href="https://github.com/username/sales-forecast"
                      >
                        GitHub
                      </Button>
                      <Button 
                        variant="secondary" 
                        size="sm"
                        asChild
                        href="https://sales-forecast-demo.streamlit.app"
                      >
                        Live Demo
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Project 3 */}
            <div className="bg-white rounded-lg border border-border/50 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-primary-50 rounded-lg flex items-center justify-center">
                    <svg className="h-8 w-8 text-primary-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14.5 9a2.5 2.5 0 100 5 2.5 2.5 0 000-5zM12 2a8 8 0 00-5.657 11.37L3 9V5a1 1 0 011-1h3a1 1 0 011 1v2.631L7 14.304A1 1 0 016 14.304l-.879-.347a3 3 0 01-2.734-.415A5.002 5.002 0 013 10v-1a2 2 0 012-2h2a2 2 0 012 2v1a5.002 5.002 0 014.487 2.962l.879-.347a1 1 0 011-.303V7a1 1 0 011-1h2a1 1 0 011 1v2.631L17 9V5a1 1 0 011-1h3a1 1 0 011 1v2.631L12 13.369z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Natural Language Processing for Sentiment Analysis</h3>
                    <p className="text-gray-600 mb-4">
                      Created a BERT-based sentiment analysis model for processing customer feedback and social media data. 
                      The model achieves 92% accuracy and includes Docker deployment for easy scalability.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="bg-primary-100 text-primary-800 text-xs font-medium px-2 py-1 rounded">Python</span>
                      <span className="bg-primary-100 text-primary-800 text-xs font-medium px-2 py-1 rounded">BERT</span>
                      <span className="bg-primary-100 text-primary-800 text-xs font-medium px-2 py-1 rounded">TensorFlow</span>
                      <span className="bg-primary-100 text-primary-800 text-xs font-medium px-2 py-1 rounded">NLTK</span>
                      <span className="bg-primary-100 text-primary-800 text-xs font-medium px-2 py-1 rounded">Docker</span>
                    </div>
                    <div className="flex space-x-3">
                      <Button 
                        variant="outline" 
                        size="sm"
                        asChild
                        href="https://github.com/username/sentiment-analysis"
                      >
                        GitHub
                      </Button>
                      <Button 
                        variant="secondary" 
                        size="sm"
                        asChild
                        href="https://sentiment-analysis-api.vercel.app"
                      >
                        Live Demo
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Project 4 */}
            <div className="bg-white rounded-lg border border-border/50 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-primary-50 rounded-lg flex items-center justify-center">
                    <svg className="h-8 w-8 text-primary-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5 .67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h10v-3l-2-2zM2 9h2v12H2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Recommendation Engine for E-commerce</h3>
                    <p className="text-gray-600 mb-4">
                      Implemented a collaborative filtering recommendation system using matrix factorization and deep learning 
                      techniques to increase user engagement and conversion rates by 23%.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="bg-primary-100 text-primary-800 text-xs font-medium px-2 py-1 rounded">Python</span>
                      <span className="bg-primary-100 text-primary-800 text-xs font-medium px-2 py-1 rounded">Matrix Factorization</span>
                      <span className="bg-primary-100 text-primary-800 text-xs font-medium px-2 py-1 rounded">TensorFlow</span>
                      <span className="bg-primary-100 text-primary-800 text-xs font-medium px-2 py-1 rounded">Surprise</span>
                      <span className="bg-primary-100 text-primary-800 text-xs font-medium px-2 py-1 rounded">AWS</span>
                    </div>
                    <div className="flex space-x-3">
                      <Button 
                        variant="outline" 
                        size="sm"
                        asChild
                        href="https://github.com/username/recommendation-engine"
                      >
                        GitHub
                      </Button>
                      <Button 
                        variant="secondary" 
                        size="sm"
                        asChild
                        href="https://recommendation-demo.vercel.app"
                      >
                        Live Demo
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}