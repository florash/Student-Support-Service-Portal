import { Route, Routes } from "react-router-dom";
import { services } from "./data/services";
import { faqs } from "./data/faqs";
import { resources } from "./data/resources";
import { quickLinks } from "./data/quickLinks";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import ServiceDetailPage from "./pages/ServiceDetailPage";
import ResourcesPage from "./pages/ResourcesPage";
import ResourceDetailPage from "./pages/ResourceDetailPage";
import FAQPage from "./pages/FAQPage";
import ContactPage from "./pages/ContactPage";
import NotFoundPage from "./pages/NotFoundPage";
import SearchResultsPage from "./pages/SearchResultsPage";
import StaticInfoPage from "./pages/StaticInfoPage";

export default function App() {
  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <ScrollToTop />
      <Header />
      <main id="main-content" className="main-content">
        <Routes>
          <Route
            path="/"
            element={
              <HomePage services={services} resources={resources} quickLinks={quickLinks} />
            }
          />
          <Route path="/services" element={<ServicesPage services={services} />} />
          <Route
            path="/services/:serviceSlug"
            element={<ServiceDetailPage services={services} />}
          />
          <Route
            path="/resources"
            element={<ResourcesPage resources={resources} services={services} />}
          />
          <Route
            path="/resources/:resourceId"
            element={<ResourceDetailPage resources={resources} />}
          />
          <Route path="/faq" element={<FAQPage faqs={faqs} />} />
          <Route path="/contact" element={<ContactPage services={services} />} />
          <Route
            path="/accessibility"
            element={
              <StaticInfoPage
                title="Accessibility"
                intro="We aim to provide accessible online information and practical support for students, carers, and community members."
                sections={[
                  {
                    heading: "Using this portal",
                    paragraphs: [
                      "We aim to use clear headings, plain English, keyboard-friendly navigation, and readable colour contrast throughout the portal.",
                      "If you find a page or form difficult to use, contact the support team so we can help and review the issue.",
                    ],
                  },
                  {
                    heading: "Alternative formats",
                    paragraphs: [
                      "If you need information in another format, contact the portal and we will work with you to provide a suitable option where possible.",
                    ],
                  },
                ]}
              />
            }
          />
          <Route
            path="/privacy"
            element={
              <StaticInfoPage
                title="Privacy"
                intro="This portal handles support-related information carefully and only uses it for service delivery, triage, and related support purposes."
                sections={[
                  {
                    heading: "How information is used",
                    paragraphs: [
                      "Information submitted through this portal is used to assess support needs, direct enquiries to the right team, and respond to student requests.",
                      "Relevant information may be shared with the service team handling your enquiry when needed to provide support or manage risk.",
                    ],
                  },
                  {
                    heading: "Questions about privacy",
                    paragraphs: [
                      "If you have questions about how your information is handled, contact the support portal before submitting a request.",
                    ],
                  },
                ]}
              />
            }
          />
          <Route
            path="/help"
            element={
              <StaticInfoPage
                title="Help and support"
                intro="Use this page if you need help using the portal or you are not sure which support area is right for you."
                sections={[
                  {
                    heading: "Finding the right service",
                    paragraphs: [
                      "You can browse support categories, search by topic, or submit a general request if you are unsure where to start.",
                    ],
                  },
                  {
                    heading: "Contact options",
                    paragraphs: [
                      "Phone: (02) 6200 3000, Monday to Friday, 8:30 am to 5:00 pm.",
                      "Email: supportportal@actstudentservices.gov.au.",
                    ],
                  },
                ]}
              />
            }
          />
          <Route
            path="/disclaimer"
            element={
              <StaticInfoPage
                title="Disclaimer"
                intro="This portal provides general support information for students and related stakeholders in a university and public education context."
                sections={[
                  {
                    heading: "Using this information",
                    paragraphs: [
                      "We aim to keep the information on this portal current and practical, but some support arrangements, eligibility requirements, or contact details may change.",
                      "Users should contact the relevant support team directly if they need confirmation about a specific situation, urgent matter, or decision affecting study.",
                    ],
                  },
                  {
                    heading: "Urgent situations",
                    paragraphs: [
                      "This portal is not an emergency service. If there is an immediate risk to safety, call 000.",
                    ],
                  },
                ]}
              />
            }
          />
          <Route
            path="/search"
            element={<SearchResultsPage services={services} resources={resources} />}
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
