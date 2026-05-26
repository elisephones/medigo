'use client'

import { useState } from 'react'
import { supabase } from '@/lib/supabase'

export default function InquiryForm({ providerId }: { providerId: string }) {
  const [form, setForm] = useState({
    sender_name: '',
    sender_email: '',
    sender_country: '',
    procedure_interest: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    await supabase.from('inquiries').insert([{ ...form, provider_id: providerId, status: 'new' }])
    setLoading(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="bg-teal-50 border border-teal-200 rounded-2xl p-8 text-center">
        <div className="text-4xl mb-4">✅</div>
        <h3 className="text-xl font-bold text-teal-800 mb-2">Message Sent!</h3>
        <p className="text-teal-600">The clinic will get back to you shortly.</p>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-stone-100 p-8">
      <h2 className="text-xl font-bold text-stone-800 mb-6">Send an Inquiry</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-stone-700 mb-1">Your Name</label>
          <input
            name="sender_name"
            value={form.sender_name}
            onChange={handleChange}
            required
            className="w-full border border-stone-200 rounded-xl px-4 py-3 text-stone-800 focus:outline-none focus:ring-2 focus:ring-teal-400"
            placeholder="John Smith"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-stone-700 mb-1">Email Address</label>
          <input
            name="sender_email"
            type="email"
            value={form.sender_email}
            onChange={handleChange}
            required
            className="w-full border border-stone-200 rounded-xl px-4 py-3 text-stone-800 focus:outline-none focus:ring-2 focus:ring-teal-400"
            placeholder="john@email.com"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-stone-700 mb-1">Your Country</label>
          <input
            name="sender_country"
            value={form.sender_country}
            onChange={handleChange}
            required
            className="w-full border border-stone-200 rounded-xl px-4 py-3 text-stone-800 focus:outline-none focus:ring-2 focus:ring-teal-400"
            placeholder="United States"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-stone-700 mb-1">Procedure of Interest</label>
          <input
            name="procedure_interest"
            value={form.procedure_interest}
            onChange={handleChange}
            required
            className="w-full border border-stone-200 rounded-xl px-4 py-3 text-stone-800 focus:outline-none focus:ring-2 focus:ring-teal-400"
            placeholder="Hair Transplant"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-stone-700 mb-1">Message</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            rows={4}
            className="w-full border border-stone-200 rounded-xl px-4 py-3 text-stone-800 focus:outline-none focus:ring-2 focus:ring-teal-400"
            placeholder="I'm interested in learning more about your services..."
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-teal-600 text-white font-bold py-4 rounded-xl hover:bg-teal-700 transition disabled:opacity-50"
        >
          {loading ? 'Sending...' : 'Send Inquiry'}
        </button>
      </form>
    </div>
  )
}