import Head from 'next/head';
import Link from 'next/link';
import SEO from '@/components/seo';

export default function About() {
  return (
    <>
      <SEO 
        title="About Me - Data Scientist Portfolio"
        description="Learn about my background, skills, and experience as a data scientist"
        image="/about-og.png"
      />
      
      <section className="pt-16 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">About Me</h2>
              <p className="text-gray-600 mb-6">
                I'm a passionate data scientist with expertise in machine learning, statistical analysis, and data visualization. 
                I enjoy solving complex problems and turning data into actionable insights that drive business decisions.
              </p>
              
              <div className="grid gap-4 md:grid-cols-2">
                <div className="flex items-start space-x-3">
                  <svg className="h-5 w-5 text-primary-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 2a2 2 0 110-4 2 2 0 000 4zm0-6a4 4 0 00-3.17 5.66l-.17-.03L5 14l1.17-.56a4 4 0 005.66-3.17l-.03-.17zm0 10a4 4 0 005.66-3.17l.03-.17L19 14l-.17 1.17a4 4 0 00-3.17 5.66l-.56-.17z" />
                  </path>
                </svg>
                <span>5+ Years Experience</span>
              </div>
              
              <div className="flex items-start space-x-3">
                <svg className="h-5 w-5 text-primary-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 00-2-2m14 0h-2.828a2 2 0 01-1.414-.586l-.828-.828A2 2 0 009 5.414V4a2 2 0 002-2h4a2 2 0 002 2v1.414A2 2 0 0115.414 7.586l.828.828A2 2 0 0117 9h2z" />
                </path>
                </svg>
                <span>Expert in Python & R</span>
              </div>
              
              <div className="flex items-start space-x-3">
                <svg className="h-5 w-5 text-primary-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7 20h10a2 2 0 002-2V6a2 2 0 00-2-2H7a2 2 0 00-2 2v14z" />
                </path>
                </svg>
                <span>Machine Learning Specialist</span>
              </div>
              
              <div className="flex items-start space-x-3">
                <svg className="h-5 w-5 text-primary-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7H3m8 4V3m-8 4h10" />
                </path>
                </svg>
                <span>Data Visualization Expert</span>
              </div>
            </div>
            
            <div className="space-y-4">
              <Button 
                variant="outline" 
                size="md"
                asChild
                href="/resume.pdf"
              >
                Download Resume
              </Button>
            </div>
          </div>
          
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Skills</h3>
            <div className="flex flex-wrap gap-2">
              <span className="bg-primary-100 text-primary-800 text-xs font-medium px-3 py-1 rounded">Python</span>
              <span className="bg-primary-100 text-primary-800 text-xs font-medium px-3 py-1 rounded">R</span>
              <span className="bg-primary-100 text-primary-800 text-xs font-medium px-3 py-1 rounded">SQL</span>
              <span className="bg-primary-100 text-primary-800 text-xs font-medium px-3 py-1 rounded">Machine Learning</span>
              <span className="bg-primary-100 text-primary-800 text-xs font-medium px-3 py-1 rounded">Deep Learning</span>
              <span className="bg-primary-100 text-primary-800 text-xs font-medium px-3 py-1 rounded">Statistics</span>
              <span className="bg-primary-100 text-primary-800 text-xs font-medium px-3 py-1 rounded">Data Visualization</span>
              <span className="bg-primary-100 text-primary-800 text-xs font-medium px-3 py-1 rounded">Tableau</span>
              <span className="bg-primary-100 text-primary-800 text-xs font-medium px-3 py-1 rounded">Power BI</span>
              <span className="bg-primary-100 text-primary-800 text-xs font-medium px-3 py-1 rounded">AWS</span>
              <span className="bg-primary-100 text-primary-800 text-xs font-medium px-3 py-1 rounded">Docker</span>
              <span className="bg-primary-100 text-primary-800 text-xs font-medium px-3 py-1 rounded">Git</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}