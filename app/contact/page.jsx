"use client";
import { useState } from "react";
import "../globals.css";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    const body = { name: name, email: email, message: message };
    try {
      const response = await fetch("/api/send-mail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (response.ok) setSubmitSuccess(true);
      else setSubmitError(true);
    } catch (error) {
      setSubmitError(true);
    }
    setSubmitting(false);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-zinc-700">
      <form
        onSubmit={handleFormSubmit}
        className="bg-white p-10 rounded-lg shadow-md w-full max-w-lg"
      >
        <h2 className="text-3xl mb-8 font-semibold">Contact Us</h2>

        <div className="mb-5">
          <label className="block text-xl mb-2" htmlFor="first-name">
            Full Name
          </label>
          <input
            className="w-full p-2 border rounded"
            type="text"
            name="first-name"
            id="first-name"
            autoComplete="given-name"
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="mb-5">
          <label className="block text-xl mb-2" htmlFor="email">
            Email address
          </label>
          <input
            className="w-full p-2 border rounded"
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-5">
          <label className="block text-xl mb-2" htmlFor="message">
            Content
          </label>
          <textarea
            className="w-full p-2 border rounded resize-none"
            id="message"
            name="message"
            rows={3}
            onChange={(e) => setMessage(e.target.value)}
            defaultValue={""}
          />
        </div>

        {submitSuccess && (
          <div className="text-center text-green-500 mt-4" role="alert">
            Message sent successfully!
          </div>
        )}
        {submitError && (
          <div className="text-center text-red-500 mt-4" role="alert">
            Error sending message. Please try again later.
          </div>
        )}

        <div className="flex justify-between">
          <button
            id="submitButton"
            type="submit"
            className="bg-blue-500 text-white p-3 rounded hover:bg-blue-600"
            disabled={submitting}
          >
            {submitting ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
}
