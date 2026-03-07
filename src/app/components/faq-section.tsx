import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: 'What if I need revisions after launch?',
      answer:
        'The MVP Sprint includes one round of feedback during development. Post-launch revisions or new features can be handled through a separate support agreement or additional sprint.',
    },
    {
      question: 'Who owns the intellectual property?',
      answer:
        'You do. Once final payment is received, you own 100% of the code, design assets, and all IP. We transfer everything to your repositories with full documentation.',
    },
    {
      question: 'Do you use low-code or no-code tools?',
      answer:
        'No. We build production-grade MVPs with real code using modern frameworks like React, Node.js, and PostgreSQL. This ensures scalability, customization, and no vendor lock-in.',
    },
    {
      question: 'Can the 2-3 week timeline be faster?',
      answer:
        'The 2-3 week sprint is optimized for quality and thorough testing. Rushing can compromise the product. However, for simpler projects, we may finish earlier—but 2-3 weeks is our standard promise.',
    },
    {
      question: 'What happens if scope needs to change mid-sprint?',
      answer:
        'We lock scope at the start to prevent this. If absolutely necessary changes arise, we\'ll transparently discuss timeline and cost implications before proceeding.',
    },
    {
      question: 'Do you provide ongoing maintenance?',
      answer:
        'The sprint includes deployment and handover. For ongoing support, bug fixes, or feature additions, we offer monthly retainer packages or pay-per-sprint options.',
    },
  ];

  return (
    <section id="faq" className="py-[120px] px-6 lg:px-8 bg-[#F3F5EF] relative z-10 overflow-hidden border-b border-border/50">
      <div className="max-w-[1200px] mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-[64px]">
          <h2 className="text-[34px] md:text-[40px] font-semibold text-foreground mb-4 tracking-[-0.015em]">
            Common Questions
          </h2>
          <p className="text-base text-muted-foreground">
            Everything you need to know about the MVP Sprint process.
          </p>
        </div>

        <div className="max-w-[800px] mx-auto space-y-[16px]">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-2xl overflow-hidden hover:border-accent/50 transition-colors duration-250 ease-out"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left bg-transparent cursor-pointer"
              >
                <span className="text-[18px] font-semibold text-card-foreground pr-8">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`flex-shrink-0 text-accent transition-transform duration-250 ease-out ${openIndex === index ? 'rotate-180' : ''
                    }`}
                  size={20}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-[400px] opacity-100 pb-6' : 'max-h-0 opacity-0'
                  }`}
              >
                <div className="px-8 text-muted-foreground text-base leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}