import { motion } from 'framer-motion';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="py-12 px-6 lg:px-8 border-t border-border bg-background">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 2L4 12H10L9 18L16 8H10L11 2Z" fill="currentColor" stroke="currentColor" className="text-accent-foreground" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <span className="text-xl font-bold text-foreground tracking-tight">Express MVP</span>
          </div>

          <div className="flex items-center gap-8 text-sm text-muted-foreground font-medium">
            <button
              onClick={() => scrollToSection('how-it-works')}
              className="hover:text-foreground transition-colors duration-250 ease-out cursor-pointer"
            >
              How It Works
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="hover:text-foreground transition-colors duration-250 ease-out cursor-pointer"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="hover:text-foreground transition-colors duration-250 ease-out cursor-pointer"
            >
              FAQ
            </button>
            <a href="mailto:hello@expressmvp.com" className="hover:text-foreground transition-colors duration-250 ease-out">
              Contact
            </a>
          </div>

          <div className="text-sm text-muted-foreground/60">
            © {currentYear} Express MVP
          </div>
        </motion.div>
      </div>
    </footer>
  );
}