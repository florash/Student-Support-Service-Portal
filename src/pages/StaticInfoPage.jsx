import Breadcrumbs from "../components/Breadcrumbs";

export default function StaticInfoPage({ title, intro, sections, breadcrumbLabel }) {
  return (
    <div className="page-section">
      <div className="container narrow-content">
        <Breadcrumbs
          items={[
            { label: "Home", to: "/" },
            { label: breadcrumbLabel || title },
          ]}
        />
        <header className="page-header">
          <h1>{title}</h1>
          <p className="lead">{intro}</p>
        </header>
        {sections.map((section) => (
          <section className="content-section" key={section.heading}>
            <h2>{section.heading}</h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </section>
        ))}
      </div>
    </div>
  );
}
