import React, { useState } from 'react';
import './VisitUs.css'


const VisitUs = ()=>{
    
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="contact-container">
      <h1 className="contact-title">CONTACT ME</h1>
      
      <div className="contact-content">
        <div className="contact-info">
          <div className="info-item">
            <div className="icon">📍</div>
            <div className="text">
              <h3>Location</h3>
              <p>Surat , Gujarat</p>
            </div>
          </div>
          
          <div className="info-item">
            <div className="icon">📧</div>
            <div className="text">
              <h3>Email</h3>
              <p>sahoopradeep034@gmail.com</p>
            </div>
          </div>
          
          <div className="info-item">
            <div className="icon">📱</div>
            <div className="text">
              <h3>Phone</h3>
              <p>+91-9328288710</p>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          
          <button type="submit" className="submit-btn">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};


export default VisitUs