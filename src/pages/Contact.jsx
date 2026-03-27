import React, { useState } from 'react';
import { MessageSquare, Mail, User, MapPin, HelpCircle, Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;
    const mailtoLink = `mailto:support@norexa.online?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
    window.location.href = mailtoLink;
    
    alert('Thank you for your message! Your email client will now open to send the inquiry.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="contact-page fade-in">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-sidebar">
            <div className="sidebar-header">
              <span className="subtitle">Get in Touch</span>
              <h1>Contact Our Team</h1>
              <p>We're here to help you with any questions or professional inquiries.</p>
            </div>

            <div className="contact-method-list">
              <div className="method-item">
                <div className="method-icon">
                  <MessageSquare size={20} />
                </div>
                <div className="method-info">
                  <h3>Content & Feedback</h3>
                  <p>Spot an error or have a suggestion? Reach out to our editorial team.</p>
                </div>
              </div>

              <div className="method-item">
                <div className="method-icon">
                  <Mail size={20} />
                </div>
                <div className="method-info">
                  <h3>Business Partnerships</h3>
                  <p>Interested in advertising or growing together? Let's discuss collaboration.</p>
                </div>
              </div>
            </div>

            <div className="contact-card primary-card">
              <div className="card-top">
                <User size={18} className="icon-accent" />
                <span>Primary Contact</span>
              </div>
              <h3>Lukas Weber</h3>
              <div className="location">
                <MapPin size={16} />
                <p>Reeperbahn 12, Hamburg 20359</p>
              </div>
              <a href="mailto:support@norexa.online" className="email-link">support@norexa.online</a>
            </div>

            <div className="support-notice">
              <div className="notice-header">
                <HelpCircle size={18} />
                <span>Support Disclosure</span>
              </div>
              <p>
                Norexa is an informational review platform. <strong>We do not provide direct technical support</strong> for the hosting providers or registrars reviewed here.
              </p>
              <p>
                Please contact the respective provider directly for billing or technical issues.
              </p>
            </div>
          </div>

          <div className="form-section">
            <div className="form-card">
              <div className="form-header">
                <h2>Send a Message</h2>
                <p>Fill out the form below and we'll respond within 24-48 hours.</p>
              </div>
              <form onSubmit={handleSubmit} className="premium-form">
                <div className="form-row">
                  <div className="form-field">
                    <label>Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="e.g. John Doe"
                    />
                  </div>
                  <div className="form-field">
                    <label>Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="e.g. john@example.com"
                    />
                  </div>
                </div>

                <div className="form-field">
                  <label>Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="How can we help?"
                  />
                </div>

                <div className="form-field">
                  <label>Message Content</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    placeholder="Tell us more about your inquiry..."
                  ></textarea>
                </div>

                <button type="submit" className="premium-submit">
                  <span>Send Inquiry</span>
                  <Send size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
