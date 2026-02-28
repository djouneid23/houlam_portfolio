"use client";

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      setStatus("Message envoyé avec succès.");
      setForm({ name: "", email: "", message: "" });
    } else {
      setStatus("Erreur lors de l'envoi.");
    }
  };

  return (
    <section id="contact" className="py-24 text-center">
      <div className="max-w-2xl mx-auto px-6">
        <h3 className="text-3xl font-bold mb-8">Contact</h3>

        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          <input
            type="text"
            name="name"
            placeholder="Nom"
            value={form.name}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700"
            required
          />

          <textarea
            name="message"
            placeholder="Message"
            value={form.message}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700"
            rows={5}
            required
          />

          <button
            type="submit"
            className="bg-cyan-500 text-black px-6 py-3 rounded-xl font-semibold"
          >
            Envoyer
          </button>
        </form>

        {status && <p className="mt-4 text-cyan-400">{status}</p>}
      </div>
    </section>
  );
}