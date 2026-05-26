'use client'

import { useState } from 'react'
import { supabase } from '@/lib/supabase'

export default function ReviewForm({ providerId }: { providerId: string }) {
  const [form, setForm] = useState({
    reviewer_name: '',
    reviewer_country: '',
    rating: 5,
    title: '',
    body: '',
    procedure_done: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    await supabase.from('reviews').insert([{ ...form, provider_id: providerId, rating: Number(form.rating) }])
    setLoading(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="bg-teal-50 border border-teal-200 rounded-2xl p-8 text-center">
        <div className="text-4xl mb-4">⭐</div>
        <h3 className="text-xl font-bold text-teal-800 mb-2">Review Submitted!</h3>
        <p className="text-teal-600">Thank you for sharing your experience.</p>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-stone-100 p-8">
      <h2 className="text-xl font-bold text-stone-800 mb-6">Leave a Review</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-stone-700 mb-1">Your Name</label>
          <input
            name="reviewer_name"
            value={form.reviewer_name}
            onChange={handleChange}
            required
            className="w-full border border-stone-200 rounded-xl px-4 py-3 text-stone-800 focus:outline-none focus:ring-2 focus:ring-teal-400"
            placeholder="John Smith"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-stone-700 mb-1">Your Country</label>
          <input
            name="reviewer_country"
            value={form.reviewer_country}
            onChange={handleChange}
            required
            className="w-full border border-stone-200 rounded-xl px-4 py-3 text-stone-800 focus:outline-none focus:ring-2 focus:ring-teal-400"
            placeholder="United States"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-stone-700 mb-1">Procedure Done</label>
          <input
            name="procedure_done"
            value={form.procedure_done}
            onChange={handleChange}
            required
            className="w-full border border-stone-200 rounded-xl px-4 py-3 text-stone-800 focus:outline-none focus:ring-2 focus:ring-teal-400"
            placeholder="Hair Transplant"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-stone-700 mb-1">Rating</label>
          <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                onClick={() => setForm({ ...form, rating: star })}
                className={`text-2xl ${form.rating >= star ? 'text-yellow-400' : 'text-stone-300'}`}
              >
                ★
              </button>
            ))}
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-stone-700 mb-1">Review Title</label>
          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            required
            className="w-full border border-stone-200 rounded-xl px-4 py-3 text-stone-800 focus:outline-none focus:ring-2 focus:ring-teal-400"
            placeholder="Great experience overall"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-stone-700 mb-1">Your Review</label>
          <textarea
            name="body"
            value={form.body}
            onChange={handleChange}
            required
            rows={4}
            className="w-full border border-stone-200 rounded-xl px-4 py-3 text-stone-800 focus:outline-none focus:ring-2 focus:ring-teal-400"
            placeholder="Share your experience with this clinic..."
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-teal-600 text-white font-bold py-4 rounded-xl hover:bg-teal-700 transition disabled:opacity-50"
        >
          {loading ? 'Submitting...' : 'Submit Review'}
        </button>
      </form>
    </div>
  )
}