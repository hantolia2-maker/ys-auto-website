import React from 'react';
import { motion } from 'motion/react';

export const Terms = () => {
  return (
    <div className="bg-brand-dark min-h-screen pt-32 pb-24 text-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-8">
            Terms of <span className="text-brand-cyan">Service</span>
          </h1>
          <div className="glass-card p-8 md:p-12 rounded-3xl space-y-8 text-brand-muted leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. Agreement to Terms</h2>
              <p>By accessing our website or using our auto repair services, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access the service.</p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. Service Estimates & Authorizations</h2>
              <p>All repair estimates are valid for 14 days unless otherwise specified. We will not perform any unauthorized repairs. Additional required repairs discovered during service will be communicated for approval before proceeding.</p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. Warranties and Guarantees</h2>
              <p>Parts and labor are warranted according to the specific manufacturer warranties and our shop policies. Warranty claims must be made with original receipts and before any third-party modifications.</p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. Payment Terms</h2>
              <p>Payment is due in full upon completion of services. Vehicles will not be released until full payment is received. We accept major credit cards, cash, and authorized financing options.</p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. Liability</h2>
              <p>We are not responsible for loss or damage to vehicles or articles left in vehicles in case of fire, theft, or any other cause beyond our control.</p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
