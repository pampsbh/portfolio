import React from 'react';
import { motion } from 'framer-motion';

const clients = [
  { name: 'XP Investimentos', logo: '/logos/xp-investimentos.png', url: 'https://www.xpi.com.br' },
  { name: 'Nubank', logo: '/logos/nubank.png', url: 'https://nubank.com.br' },
  { name: 'VLI', logo: '/logos/vli.png', url: 'https://www.vli-logistica.com.br' },
  { name: 'Adiq', logo: '/logos/adiq.png', url: 'https://www.adiq.com.br' },
  { name: 'Bosch', logo: '/logos/bosch.png', url: 'https://www.bosch.com.br' },
  { name: 'Unimed S.J. do Rio Preto', logo: '/logos/unimed.png', url: 'https://www.unimedsjrp.com.br' },
];

const ClientsSection = () => {
  return (
    <section className="relative py-14 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="font-mono text-xs uppercase tracking-[0.14em] text-ink-tertiary text-center mb-10"
        >
          Products built for
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8"
        >
          {clients.map((client) => {
            const img = (
              <img
                src={client.logo}
                alt={client.name}
                className="h-16 w-auto max-w-[200px] object-contain opacity-50 hover:opacity-90 transition-all duration-300 brightness-200 [mix-blend-mode:screen]"
              />
            );
            return client.url ? (
              <a
                key={client.name}
                href={client.url}
                target="_blank"
                rel="noopener noreferrer"
                title={client.name}
              >
                {img}
              </a>
            ) : (
              <span key={client.name}>{img}</span>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ClientsSection;
