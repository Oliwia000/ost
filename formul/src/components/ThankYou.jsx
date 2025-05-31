import React from "react";

function ThankYou({ data, onBack }) {
  return (
    <div className="container py-5">
      <h2 className="text-success mb-4">Dziękujemy za przesłanie wiadomości!</h2>
      <div className="bg-light p-4 rounded shadow-sm">
        <p><strong>Imię i nazwisko:</strong> {data.name}</p>
        <p><strong>Email:</strong> {data.email}</p>
        <p><strong>Temat:</strong> {data.subject}</p>
        <p><strong>Wiadomość:</strong> {data.message}</p>
        <p><strong>Data wysłania:</strong> {data.date}</p>
      </div>
      <button className="btn btn-link mt-4" onClick={onBack}>Wróć </button>
    </div>
  );
}
export default ThankYou;
