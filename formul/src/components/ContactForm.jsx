import React, { useState } from "react";

function ContactForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Imię i nazwisko jest wymagane.";
    if (!formData.email) {
      newErrors.email = "Email jest wymagany.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Niepoprawny format email.";
    }
    if (!formData.subject) newErrors.subject = "Wybierz temat.";
    if (!formData.message) newErrors.message = "Wpisz wiadomość.";
    return newErrors;
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      const currentDate = new Date().toLocaleString();
      onSubmit({ ...formData, date: currentDate });
    }
  };

  const handleReset = () => {
    setFormData({ name: "", email: "", subject: "", message: "" });
    setErrors({});
  };
  return (
    <div className="container py-5">
      <h2 className="mb-4 text-warning">Formularz kontaktowy</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Imię i nazwisko:</label>
          <input
            type="text"
            name="name"
            placeholder="Wpisz imię i nazwisko"
            className={`form-control ${errors.name ? "is-invalid" : ""}`}
            value={formData.name}
            onChange={handleChange}
          />
          <div className="invalid-feedback">{errors.name}</div>
        </div>
        <div className="mb-3">
          <label className="form-label">Email:</label>
          <input
            type="email"
            name="email"
            placeholder="np. jan.kowalski@onet.pl"
            className={`form-control ${errors.email ? "is-invalid" : ""}`}
            value={formData.email}
            onChange={handleChange}
          />
          <div className="invalid-feedback">{errors.email}</div>
        </div>

        <div className="mb-3">
          <label className="form-label">Temat:</label>
          <select
            name="subject"
            className={`form-select ${errors.subject ? "is-invalid" : ""}`}
            value={formData.subject}
            onChange={handleChange}
          >
            <option value="">-- Wybierz temat --</option>
            <option value="Wsparcie techniczne">Wsparcie techniczne</option>
            <option value="Wycena projektu">Wycena projektu</option>
            <option value="Współpraca">Współpraca</option>
            <option value="Inne">Inne</option>
          </select>
          <div className="invalid-feedback">{errors.subject}</div>
        </div>

        <div className="mb-3">
          <label className="form-label">Treść wiadomości:</label>
          <textarea
            name="message"
            placeholder="Wpisz wiadomość..."
            className={`form-control ${errors.message ? "is-invalid" : ""}`}
            rows="5"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <div className="invalid-feedback">{errors.message}</div>
        </div>

        <div className="d-flex gap-2">
          <button type="submit" className="btn btn-primary">Wyślij</button>
          <button type="button" className="btn btn-outline-secondary" onClick={handleReset}>Resetuj</button>
        </div>
      </form>
    </div>
  );
}
export default ContactForm;
