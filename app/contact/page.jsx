"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import "../globals.css";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [message, setMessage] = useState(null);
  const router = useRouter(); // for routing

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    if (message) {
      setTimeout(() => {
        setMessage(null);
      }, 3000); // remove the message after 3 seconds
    }
  }, [message]);

  return (
    <div className="flex justify-center items-center min-h-screen bg-zinc-700">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-10 rounded-lg shadow-md w-full max-w-lg"
      >
        <h1 className="text-2xl mb-8 font-semibold">Contact Me</h1>

        <div className="mb-5">
          <label className="block text-xl mb-2">Name:</label>
          <input
            className="w-full p-2 border rounded"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-5">
          <label className="block text-xl mb-2">Email:</label>
          <input
            className="w-full p-2 border rounded"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-5">
          <label className="block text-xl mb-2">Subject:</label>
          <input
            className="w-full p-2 border rounded"
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-5">
          <label className="block text-xl mb-2">Message:</label>
          <textarea
            className="w-full p-2 border rounded resize-none"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        {message && <div className="text-center mt-4">{message}</div>}

        <button
          type="submit"
          className="bg-blue-500 text-white p-3 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
