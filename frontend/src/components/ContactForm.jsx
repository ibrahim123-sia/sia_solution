import React, { useState, useRef } from 'react';
import { Send, Mail, Phone, MapPin, MessageCircle, Loader2, CheckCircle2, XCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { siteData } from '../data';

const ContactForm = () => {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const message = encodeURIComponent("Hi SIA Solution! I'd like a free mockup for my website.");
  const whatsappUrl = `${siteData.company.whatsapp}?text=${message}`;

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setIsSuccess(false);
    setIsError(false);

    emailjs
      .sendForm('service_wonx3xs', 'template_v1xwduc', form.current, '_QWED82KyfuvWQDyW')
      .then(
        () => {
          setIsSuccess(true);
          setIsLoading(false);
          form.current.reset();
          setTimeout(() => setIsSuccess(false), 5000);
        },
        () => {
          setIsError(true);
          setIsLoading(false);
          setTimeout(() => setIsError(false), 5000);
        }
      );
  };

  const inputClass =
    'w-full px-4 py-3 bg-cream-dim border border-cream-line rounded-lg focus:ring-2 focus:ring-amber focus:border-transparent outline-none transition-all placeholder:text-charcoal/30 text-charcoal';

  return (
    <div className="grid md:grid-cols-2 gap-10">
      <div>
        <h3 className="font-display font-semibold text-xl text-charcoal mb-6">Contact Info</h3>

        <div className="space-y-5">
          <div className="flex items-start gap-4">
            <div className="w-11 h-11 rounded-lg bg-amber/10 flex items-center justify-center text-amber flex-shrink-0">
              <Mail size={18} />
            </div>
            <div>
              <h4 className="font-semibold text-charcoal text-sm">Email</h4>
              <a href={`mailto:${siteData.company.email}`} className="text-charcoal/60 text-sm hover:text-amber transition-colors">
                {siteData.company.email}
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-11 h-11 rounded-lg bg-amber/10 flex items-center justify-center text-amber flex-shrink-0">
              <Phone size={18} />
            </div>
            <div>
              <h4 className="font-semibold text-charcoal text-sm">Phone</h4>
              <p className="text-charcoal/60 text-sm">{siteData.company.phone}</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-11 h-11 rounded-lg bg-amber/10 flex items-center justify-center text-amber flex-shrink-0">
              <MapPin size={18} />
            </div>
            <div>
              <h4 className="font-semibold text-charcoal text-sm">Location</h4>
              <p className="text-charcoal/60 text-sm">{siteData.company.location}</p>
            </div>
          </div>
        </div>

        <div className="mt-8 p-6 bg-charcoal rounded-xl">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 bg-[#25D366] rounded-full flex items-center justify-center mr-3">
              <MessageCircle className="w-5 h-5 text-white" fill="white" />
            </div>
            <div>
              <h4 className="font-semibold text-cream text-sm">Quick Chat</h4>
              <p className="text-xs text-cream/50">Typically replies within minutes</p>
            </div>
          </div>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-amber hover:bg-amber-dark text-cream font-medium text-sm py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
          >
            <MessageCircle size={16} />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>

      <div>
        <h3 className="font-display font-semibold text-xl text-charcoal mb-6">Send a Message</h3>

        {isSuccess && (
          <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start gap-3 animate-fade-in">
            <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="text-green-800 font-semibold text-sm">Message Sent!</h4>
              <p className="text-green-700 text-xs mt-1">Thanks for reaching out — we'll get back to you soon.</p>
            </div>
          </div>
        )}

        {isError && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3 animate-fade-in">
            <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="text-red-800 font-semibold text-sm">Couldn't Send Message</h4>
              <p className="text-red-700 text-xs mt-1">Please try again, or use WhatsApp for a faster reply.</p>
            </div>
          </div>
        )}

        <form ref={form} onSubmit={sendEmail} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-charcoal/70 mb-2">Full Name *</label>
            <input type="text" name="from_name" required className={inputClass} placeholder="Your name" />
          </div>

          <div>
            <label className="block text-sm font-medium text-charcoal/70 mb-2">Email Address *</label>
            <input type="email" name="from_email" required className={inputClass} placeholder="your@email.com" />
          </div>

          <div>
            <label className="block text-sm font-medium text-charcoal/70 mb-2">Subject *</label>
            <input type="text" name="subject" required className={inputClass} placeholder="Website / AI chatbot inquiry" />
          </div>

          <div>
            <label className="block text-sm font-medium text-charcoal/70 mb-2">Message *</label>
            <textarea name="message" required rows="4" className={`${inputClass} resize-none`} placeholder="Tell us about your business and what you need..." />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-amber hover:bg-amber-dark disabled:bg-amber/50 text-cream font-medium py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Sending...</span>
              </>
            ) : (
              <>
                <span>Send Message</span>
                <Send size={18} />
              </>
            )}
          </button>

          <p className="text-xs text-charcoal/40 text-center">
            * Required fields. We respect your privacy and never share your information.
          </p>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
