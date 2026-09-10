import Head from 'next/head';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import SEO from '@/components/seo';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // null | 'success' | 'error'
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const result = await response.json();
      
      if (response.ok) {
        setSubmitStatus('success');
        setSubmitMessage(result.message || 'Message sent successfully!');
        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      } else {
        setSubmitStatus('error');
        setSubmitMessage(result.error || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      setSubmitStatus('error');
      setSubmitMessage('Network error. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <SEO 
        title="Contact - Data Scientist Portfolio"
        description="Get in touch with me for collaborations, opportunities, or just to say hello"
        image="/contact-og.png"
      />
      
      <section className="pt-16 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-gray-600">
              Have a question, collaboration opportunity, or just want to say hello? 
              I'd love to hear from you!
            </p>
          </div>
          
          {submitStatus && (
            <div className={`mb-6 p-4 rounded-lg ${submitStatus === 'success' ? 'bg-green-50 border-green-200 text-green-800' : 'bg-red-50 border-red-200 text-red-800'}`}>
              <p>{submitMessage}</p>
            </div>
          )}
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-3">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div className="space-y-3">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    type="email"
                    required
                    placeholder="Enter your email address"
                  />
                </div>
                
                <div className="space-y-3">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="What's this regarding?"
                  />
                </div>
                
                <div className="space-y-3">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className={`bg-background border border-input rounded-md px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 h-32 resize-y`}
                    required
                    placeholder="Type your message here..."
                  />
                </div>
                
                <Button 
                  type="submit"
                  variant="primary"
                  size="lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Or Reach Me Directly</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <svg className="h-5 w-5 text-primary-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 001.023 1.52l1.53.129a1 1 0 01.97.04l2.07-1.222a1 1 0 01.948-.29l1.492-4.478a1 1 0 00.28-.947A2 2 0 0115.07 3h2.86a2 2 0 012 2v14a2 2 0 01-2 2h-2.86a1 1 0 01-.948-.684l-1.498-4.493a1 1 0 00-1.023-1.52l-1.53-.129a1 1 0 00-.97-.04l-2.07 1.222a1 1 0 00-.948.29l-1.492 4.478a1 1 0 00.28.947A2 2 0 005 19h2a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </path>
                </svg>
                <div>
                  <p className="font-medium">Email</p>
                  <a href="mailto:youremail@example.com" className="text-primary-600 hover:text-primary-800 transition-colors duration-200">
                    youremail@example.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <svg className="h-5 w-5 text-primary-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 001.023 1.52l1.53.129a1 1 0 01.97.04l2.07-1.222a1 1 0 01.948-.29l1.492-4.478a1 1 0 00.28-.947A2 2 0 0115.07 3h2.86a2 2 0 012 2v14a2 2 0 01-2 2h-2.86a1 1 0 01-.948-.684l-1.498-4.493a1 1 0 00-1.023-1.52l-1.53-.129a1 1 0 00-.97-.04l-2.07 1.222a1 1 0 00-.948.29l-1.492 4.478a1 1 0 00.28.947A2 2 0 005 19h2a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </path>
                </svg>
                <div>
                  <p className="font-medium">Phone</p>
                  <a href="tel:+1234567890" className="text-primary-600 hover:text-primary-800 transition-colors duration-200">
                    +1 (234) 567-890
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <svg className="h-5 w-5 text-primary-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2.25c-6.214 0-11.25 5.036-11.25 11.25a9.76 9.76 0 003.128 7.687l-.208.082A8.235 8.235 0 013.734 20.25a8.235 8.235 0 01-1.064 4.763c-.342 1.08-.342 2.202 0 3.282v1.04l.001.008c.256.84.698 1.423 1.232 1.423h9.584c.534 0 .976-.583 1.03-1.116a8.235 8.235 0 011.064-4.763 8.235 8.235 0 013.734-20.25A9.76 9.76 0 0023.25 13.5a9.76 9.76 0 00-3.128-7.687zM12 15a3 3 0 100-6 3 3 0 000 6z" />
                </path>
                </svg>
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-sm text-gray-500">San Francisco, CA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}