import React, { useState } from 'react';
import Header from '../../../components/ui/Header';
import Footer from '../../../pages/homepage/components/Footer';
import Icon from '../../../components/AppIcon';

const ContactUs = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((s) => ({ ...s, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // TODO: integrate API/email service
      // await fetch('/api/contact', { method:'POST', body: JSON.stringify(formData) });
      console.log('Form Data Submitted:', formData);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section - theme aligned */}
      <section className="pt-24 pb-10 bg-gradient-to-b from-[#0c5f35] via-[#0e6b3b] to-[#0f7a42] text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur px-3 py-1 rounded-full text-sm mb-4">
              <span className="inline-flex w-2 h-2 rounded-full bg-emerald-300"></span>
              <span>Pan-India Support</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Contact Our Network Team
            </h1>
            <p className="text-lg opacity-90 mb-8 max-w-3xl mx-auto">
              Dedicated assistance for product inquiries, distribution partnerships, and technical support across India.
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              <a href="#contact-form" className="inline-flex items-center space-x-2 bg-white text-[#0f7a42] hover:bg-white/90 px-5 py-2.5 rounded-lg font-medium transition">
                <Icon name="Search" size={16} />
                <span>Find Local Partner</span>
              </a>
              <a href="#contact-form" className="inline-flex items-center space-x-2 bg-transparent border border-white/40 hover:bg-white/10 px-5 py-2.5 rounded-lg font-medium transition">
                <Icon name="Phone" size={16} />
                <span>Contact Network Team</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      {/* <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 -mt-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: 'Map', label: 'Cities Covered', value: '150+' },
              { icon: 'Store', label: 'Channel Partners', value: '300+' },
              { icon: 'Package', label: 'SKUs', value: '200+' },
              { icon: 'Clock', label: 'Avg. Response', value: '< 24h' }
            ].map((s, i) => (
              <div key={i} className="bg-white rounded-xl shadow-industrial border border-border p-4 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center">
                    <Icon name={s.icon} size={18} className="text-emerald-600" />
                  </div>
                  <div>
                    <div className="text-sm text-text-secondary">{s.label}</div>
                    <div className="text-lg font-semibold text-primary">{s.value}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Contact Form Card */}
      <section id="contact-form" className="py-12 bg-[#f6fbf8]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left info panel */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-industrial border border-border p-6 h-full">
                <h2 className="text-2xl font-semibold text-primary mb-2">Get in touch</h2>
                <p className="text-text-secondary mb-6">
                  Share requirements or ask a question—our team will respond within 24 hours.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center">
                      <Icon name="Mail" size={18} className="text-emerald-600" />
                    </div>
                    <div>
                      <div className="text-sm text-text-secondary">Email</div>
                      <a href="mailto:support@amrutflow.com" className="text-primary font-medium hover:underline">
                        support@amrutflow.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center">
                      <Icon name="Phone" size={18} className="text-emerald-600" />
                    </div>
                    <div>
                      <div className="text-sm text-text-secondary">Phone</div>
                      <a href="tel:+917041200045" className="text-primary font-medium hover:underline">
                        +91 70412 00045
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center">
                      <Icon name="MapPin" size={18} className="text-emerald-600" />
                    </div>
                    <div>
                      <div className="text-sm text-text-secondary">Address</div>
                      <div className="text-primary font-medium">
                        Rajkot, Gujarat, India
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-3 rounded-lg bg-emerald-50 text-emerald-800 text-sm">
                  Rates are exclusive of GST & transport; packing per catalogue. For dealer pricing, mention location and product mix.
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-white/90 backdrop-blur rounded-xl shadow-industrial border border-border p-6">
                {submitted && (
                  <div className="bg-emerald-50 text-emerald-700 p-3 mb-4 rounded flex items-center space-x-2">
                    <Icon name="CheckCircle2" size={18} />
                    <span>Thank you! Your message has been sent.</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-text-secondary mb-1" htmlFor="name">Name</label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                        placeholder="Your Name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-text-secondary mb-1" htmlFor="email">Email</label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-text-secondary mb-1" htmlFor="phone">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                        placeholder="+91 XXXXXXXXXX"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-text-secondary mb-1" htmlFor="topic">Topic</label>
                      <select
                        name="topic"
                        id="topic"
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
                        defaultValue=""
                      >
                        <option value="" disabled>Select a topic</option>
                        <option value="dealer">Dealer/Distributor</option>
                        <option value="pricing">Pricing & Availability</option>
                        <option value="tech">Technical Support</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm text-text-secondary mb-1" htmlFor="message">Message</label>
                    <textarea
                      name="message"
                      id="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      placeholder="Write your message here..."
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
                    <div className="text-xs text-text-secondary">
                      By submitting, consent is given to be contacted by our team. Response within one business day.
                    </div>
                    <button
                      type="submit"
                      disabled={loading}
                      className="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-700 disabled:opacity-60 text-white py-2 px-4 rounded-lg transition"
                    >
                      {loading ? 'Sending...' : 'Send Message'}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* Map/coverage band (placeholder) */}
          <div className="mt-10 bg-white rounded-xl shadow-industrial border border-border p-6">
            <div className="flex items-center space-x-2 mb-2">
              <Icon name="Globe2" size={18} className="text-emerald-600" />
              <h3 className="text-lg font-semibold text-primary">Service Coverage</h3>
            </div>
            <p className="text-sm text-text-secondary">
              Coverage across major cities with expanding partner network. Share location for nearest distributor details.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactUs;
