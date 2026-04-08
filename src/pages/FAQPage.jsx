import Breadcrumbs from "../components/Breadcrumbs";
import FAQAccordion from "../components/FAQAccordion";

export default function FAQPage({ faqs }) {
  const groupedFaqs = faqs.reduce((groups, item) => {
    if (!groups[item.topic]) {
      groups[item.topic] = [];
    }

    groups[item.topic].push(item);
    return groups;
  }, {});

  return (
    <div className="page-section">
      <div className="container narrow-content">
        <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "FAQ" }]} />
        <header className="page-header">
          <h1>Frequently asked questions</h1>
          <p>
            Common questions about response times, privacy, appointments, and finding the
            right service.
          </p>
        </header>
        {Object.entries(groupedFaqs).map(([topic, items]) => (
          <section className="faq-topic" key={topic}>
            <h2>{topic}</h2>
            <FAQAccordion items={items} />
          </section>
        ))}
      </div>
    </div>
  );
}
