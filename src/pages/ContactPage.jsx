import { useState } from "react";
import Breadcrumbs from "../components/Breadcrumbs";
import StatusBanner from "../components/StatusBanner";

const initialFormState = {
  fullName: "",
  email: "",
  studentType: "",
  supportCategory: "",
  message: "",
  consent: false,
};

const studentTypes = [
  "Domestic student",
  "International student",
  "Higher degree by research student",
  "Apprentice or vocational student",
  "Prospective student",
];

export default function ContactPage({ services }) {
  const [formData, setFormData] = useState(initialFormState);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const supportCategories = [...new Set(services.map((service) => service.category))];

  function updateField(name, value) {
    setFormData((current) => ({ ...current, [name]: value }));
  }

  function validateForm() {
    const nextErrors = {};

    if (!formData.fullName.trim()) {
      nextErrors.fullName = "Enter your full name.";
    }

    if (!formData.email.trim()) {
      nextErrors.email = "Enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      nextErrors.email = "Enter a valid email address.";
    }

    if (!formData.studentType) {
      nextErrors.studentType = "Select the student type that best describes you.";
    }

    if (!formData.supportCategory) {
      nextErrors.supportCategory = "Select a support category.";
    }

    if (!formData.message.trim()) {
      nextErrors.message = "Provide a short summary of the support you need.";
    } else if (formData.message.trim().length < 20) {
      nextErrors.message = "Add a little more detail so staff can help effectively.";
    }

    if (!formData.consent) {
      nextErrors.consent = "You must confirm that the information provided is accurate.";
    }

    return nextErrors;
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const nextErrors = validateForm();

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setStatus({
        type: "error",
        message: "Please correct the highlighted fields before submitting your request.",
      });
      return;
    }

    setIsSubmitting(true);
    await new Promise((resolve) => window.setTimeout(resolve, 700));
    setIsSubmitting(false);

    setStatus({
      type: "success",
      message:
        "Your request has been submitted. A staff member will contact you within one to three business days.",
    });
    setErrors({});
    setFormData(initialFormState);
  }

  const errorEntries = Object.entries(errors);

  return (
    <div className="page-section">
      <div className="container narrow-content">
        <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Request support" }]} />
        <header className="page-header">
          <h1>Request support</h1>
          <p>
            Use this form if you would like help from the student support team and you are not
            sure which service to contact directly.
          </p>
        </header>

        {status.type ? (
          <StatusBanner
            tone={status.type}
            title={status.type === "success" ? "Request submitted" : "Please review this form"}
          >
            <p>{status.message}</p>
            {status.type === "success" ? (
              <p>
                If your circumstances change or the matter becomes urgent, call the support
                line on (02) 6200 3000 during business hours.
              </p>
            ) : null}
            {status.type === "error" && errorEntries.length > 0 ? (
              <ul className="content-list compact-list">
                {errorEntries.map(([field, message]) => (
                  <li key={field}>
                    <a href={`#${field}`}>{message}</a>
                  </li>
                ))}
              </ul>
            ) : null}
          </StatusBanner>
        ) : null}

        <form className="support-form" noValidate onSubmit={handleSubmit}>
          <h2>Support request form</h2>
          <p className="helper-text">
            Fields marked by context below are required unless labelled optional.
          </p>
          <div className="form-grid">
            <div className="form-field">
              <label htmlFor="fullName">Full name</label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                value={formData.fullName}
                onChange={(event) => updateField("fullName", event.target.value)}
                aria-invalid={errors.fullName ? "true" : "false"}
                aria-describedby={errors.fullName ? "fullName-error" : undefined}
              />
              {errors.fullName ? (
                <p className="field-error" id="fullName-error">
                  {errors.fullName}
                </p>
              ) : null}
            </div>

            <div className="form-field">
              <label htmlFor="email">Email address</label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={(event) => updateField("email", event.target.value)}
                aria-invalid={errors.email ? "true" : "false"}
                aria-describedby={errors.email ? "email-error" : undefined}
              />
              {errors.email ? (
                <p className="field-error" id="email-error">
                  {errors.email}
                </p>
              ) : null}
            </div>

            <div className="form-field">
              <label htmlFor="studentType">Student type</label>
              <select
                id="studentType"
                name="studentType"
                value={formData.studentType}
                onChange={(event) => updateField("studentType", event.target.value)}
                aria-invalid={errors.studentType ? "true" : "false"}
                aria-describedby={errors.studentType ? "studentType-error" : undefined}
              >
                <option value="">Select student type</option>
                {studentTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
              {errors.studentType ? (
                <p className="field-error" id="studentType-error">
                  {errors.studentType}
                </p>
              ) : null}
            </div>

            <div className="form-field">
              <label htmlFor="supportCategory">Support category</label>
              <select
                id="supportCategory"
                name="supportCategory"
                value={formData.supportCategory}
                onChange={(event) => updateField("supportCategory", event.target.value)}
                aria-invalid={errors.supportCategory ? "true" : "false"}
                aria-describedby={
                  errors.supportCategory ? "supportCategory-error" : undefined
                }
              >
                <option value="">Select a support category</option>
                {supportCategories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
              {errors.supportCategory ? (
                <p className="field-error" id="supportCategory-error">
                  {errors.supportCategory}
                </p>
              ) : null}
            </div>
          </div>

          <div className="form-field">
            <label htmlFor="message">Describe the support you need</label>
            <textarea
              id="message"
              name="message"
              rows="6"
              value={formData.message}
              onChange={(event) => updateField("message", event.target.value)}
              aria-invalid={errors.message ? "true" : "false"}
              aria-describedby={errors.message ? "message-error" : "message-hint"}
            />
            <p className="helper-text" id="message-hint">
              Include relevant dates, barriers, and any urgent concerns. Do not include highly
              sensitive information unless it is needed for us to respond safely.
            </p>
            {errors.message ? (
              <p className="field-error" id="message-error">
                {errors.message}
              </p>
            ) : null}
          </div>

          <div className="form-field checkbox-field">
            <label className="checkbox-label" htmlFor="consent">
              <input
                type="checkbox"
                id="consent"
                name="consent"
                checked={formData.consent}
                onChange={(event) => updateField("consent", event.target.checked)}
                aria-invalid={errors.consent ? "true" : "false"}
                aria-describedby={errors.consent ? "consent-error" : undefined}
              />
              <span>
                I confirm that the information provided is accurate to the best of my
                knowledge.
              </span>
            </label>
            {errors.consent ? (
              <p className="field-error" id="consent-error">
                {errors.consent}
              </p>
            ) : null}
          </div>

          <button type="submit" className="button-link form-submit-button" disabled={isSubmitting}>
            {isSubmitting ? "Submitting request..." : "Submit request"}
          </button>
        </form>

        <section className="alternative-contact">
          <h2>Alternative contact methods</h2>
          <p>
            If you would prefer not to use the form, you can contact the portal directly using
            the options below.
          </p>
          <ul className="content-list">
            <li>Phone: (02) 6200 3000, Monday to Friday, 8:30 am to 5:00 pm</li>
            <li>Email: supportportal@actstudentservices.gov.au</li>
            <li>In person: Student Services Centre, Canberra City campus</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
