import React, { useState } from "react";
import ContactForm from "./components/ContactForm";
import ThankYou from "./components/ThankYou";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [submittedData, setSubmittedData] = useState(null);

  return submittedData ? (
    <ThankYou data={submittedData} onBack={() => setSubmittedData(null)} />
  ) : (
    <ContactForm onSubmit={setSubmittedData} />
  );
}
export default App;
