"use client";

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    setLoading(false);

    if (res.ok) {
      setStatus("Message envoyé avec succès.");
      setForm({ name: "", email: "", message: "" });
    } else {
      setStatus("Erreur lors de l’envoi. Vous pouvez aussi me contacter via LinkedIn ou WhatsApp.");
    }
  };

  return (
    <section id="contact" className="py-24">
      <div className="max-w-6xl mx-auto grid gap-10 px-6 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-300">
            Contact
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold">
            Parlons sécurité, logiciel ou infrastructure.
          </h2>
          <p className="mt-5 text-slate-400 leading-relaxed">
            Disponible pour échanger autour de projets web, cybersécurité,
            architecture SI, automatisation ou mise en place d’environnements de lab.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-lg border border-slate-800 bg-slate-900 p-6 shadow-xl shadow-slate-950/20"
        >
          <div className="grid md:grid-cols-2 gap-4">
            <label className="block">
              <span className="text-sm font-medium text-slate-300">Nom</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="mt-2 w-full rounded-lg border border-slate-700 bg-slate-950 p-3 outline-none transition focus:border-emerald-400"
                required
              />
            </label>

            <label className="block">
              <span className="text-sm font-medium text-slate-300">Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="mt-2 w-full rounded-lg border border-slate-700 bg-slate-950 p-3 outline-none transition focus:border-emerald-400"
                required
              />
            </label>
          </div>

          <label className="mt-4 block">
            <span className="text-sm font-medium text-slate-300">Message</span>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              className="mt-2 w-full rounded-lg border border-slate-700 bg-slate-950 p-3 outline-none transition focus:border-emerald-400"
              rows={6}
              required
            />
          </label>

          <button
            type="submit"
            disabled={loading}
            className="mt-6 rounded-lg bg-emerald-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-emerald-300 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Envoi..." : "Envoyer le message"}
          </button>

          {status && <p className="mt-4 text-sm text-emerald-300">{status}</p>}
        </form>
      </div>
    </section>
  );
}
