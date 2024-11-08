import React from 'react';
import AdminLayout from '../components/AdminLayout';

const ContactUs = () => {
  return (
    <AdminLayout>
      <div className="contact-us-container">
        <section className="content">
          <div className="container-fluid">
            <div className="row justify-content-center">
              <div className="col-md-8">
                <div className="card card-primary">
                  <div className="card-header" style={{ backgroundColor: '#007bff', color: '#fff' }}>
                    <h3 className="card-title">Contact Us</h3>
                  </div>
                  <form>
                    <div className="card-body">
                      <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" className="form-control" id="name" placeholder="Enter your name" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="email">Email address</label>
                        <input type="email" className="form-control" id="email" placeholder="Enter email" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="subject">Subject</label>
                        <input type="text" className="form-control" id="subject" placeholder="Subject" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea className="form-control" rows="4" id="message" placeholder="Enter your message"></textarea>
                      </div>
                    </div>
                    <div className="card-footer">
                      <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </AdminLayout>
  );
};

export default ContactUs;
