import React from "react";

const Contact = () => {
  return (
    <div class="contact" id="contact">
      <div class="contact-name">
        <a>CONTACT ME</a>
      </div>
      <div>
        <i class="fas fa-grip-lines fa-2x contact-line"></i>
        <i class="fas fa-grip-lines fa-2x contact-line"></i>
        <i class="fas fa-grip-lines fa-2x contact-line"></i>
        <i class="fas fa-grip-lines fa-2x contact-line"></i>
        <i class="fas fa-grip-lines fa-2x contact-line"></i>
        <i class="fas fa-star fa-2x contact-line"></i>
        <i class="fas fa-grip-lines fa-2x contact-line"></i>
        <i class="fas fa-grip-lines fa-2x contact-line"></i>
        <i class="fas fa-grip-lines fa-2x contact-line"></i>
        <i class="fas fa-grip-lines fa-2x contact-line"></i>
        <i class="fas fa-grip-lines fa-2x contact-line"></i>
      </div>
      <div class="form">
        <form name="sentMessage" id="contactForm" navalidate="novalidate">
          <div class="form-group floating-label-form-group controls mb-0 pb-2">
            <input type="hidden" name="contact_number" />
            <label>Name</label>
            <input
              class="form-control"
              id="name"
              name="from_name"
              type="text"
              placeholder="Name"
              required="required"
              data-validation-required-message="Please enter your name."
            />
            <p class="help-block text-danger"></p>
          </div>
          <div class="form-group floating-label-form-group controls mb-0 pb-2">
            <label>E-mail Address</label>
            <input
              class="form-control"
              id="email"
              type="email"
              name="reply_to"
              placeholder="E-mail Address"
              required="required"
              data-validation-required-message="Please enter your email address."
            />
            <p class="help-block text-danger"></p>
          </div>
          <div class="form-group floating-label-form-group controls mb-0 pb-2">
            <label>Subject</label>
            <input
              class="form-control"
              id="title"
              type="text"
              name="subject_html"
              placeholder="Subject"
              data-validation-required-message="Please enter your email subject."
            />
            <p class="help-block text-danger"></p>
          </div>
          <div class="form-group floating-label-form-group controls mb-0 pb-2">
            <label>Messsage</label>
            <input
              class="form-control"
              id="message"
              type="text"
              name="message_html"
              placeholder="Message"
              required="required"
              data-validation-required-message="Please enter your a message."
            />
            <p class="help-block text-danger"></p>
          </div>
          <div class="form-group">
            <button
              type="submit"
              class="btn btn-primary btn-xl"
              id="sendMessageButton"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
