import React from 'react';
import { motion } from 'motion/react';

export const Privacy = () => {
  return (
    <div className="bg-brand-dark min-h-screen pt-32 pb-24 text-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-8">
            Privacy <span className="text-brand-cyan">Policy</span>
          </h1>
          <div className="glass-card p-8 md:p-12 rounded-3xl space-y-8 text-brand-muted leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. Information We Collect</h2>
              <p>We collect information you provide directly to us when you request a quote, schedule a service, or contact us. This may include your name, email address, phone number, vehicle details, and any other information you choose to provide.</p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. How We Use Your Information</h2>
              <p>We use the information we collect to provide, maintain, and improve our services, to process your requests and transactions, and to communicate with you about your vehicle's service needs.</p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. Information Sharing</h2>
              <p>We do not share your personal information with third parties except as necessary to provide our services (such as ordering parts for your vehicle) or when required by law.</p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. Data Security</h2>
              <p>We take reasonable measures to help protect information about you from loss, theft, misuse, unauthorized access, disclosure, alteration, and destruction.</p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. Contact Us</h2>
              <p>If you have any questions about this Privacy Policy, please contact us at our Fort Worth location or call our shop directly.</p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
