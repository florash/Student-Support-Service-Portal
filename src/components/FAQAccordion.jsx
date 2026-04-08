import { useState } from "react";

export default function FAQAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="faq-list">
      {items.map((item, index) => {
        const isOpen = index === openIndex;

        return (
          <section className="faq-item" key={item.question}>
            <h3>
              <button
                type="button"
                className="faq-trigger"
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${index}`}
                id={`faq-trigger-${index}`}
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
              >
                <span>{item.question}</span>
                <span aria-hidden="true">{isOpen ? "−" : "+"}</span>
              </button>
            </h3>
            <div
              id={`faq-panel-${index}`}
              role="region"
              aria-labelledby={`faq-trigger-${index}`}
              hidden={!isOpen}
              className="faq-panel"
            >
              <p>{item.answer}</p>
            </div>
          </section>
        );
      })}
    </div>
  );
}
