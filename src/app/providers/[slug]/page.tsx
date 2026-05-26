import { supabase } from '@/lib/supabase'
import Link from 'next/link'
import InquiryForm from './InquiryForm'
import ReviewForm from './ReviewForm'

export default async function ProviderPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const { data: provider } = await supabase
    .from('providers')
    .select('*')
    .eq('slug', slug)
    .single()

  if (!provider) {
    return <div className="p-10 text-center text-stone-500">Provider not found.</div>
  }

  return (
    <main className="min-h-screen bg-stone-50">
      {/* Nav */}
      <nav className="bg-white border-b border-stone-200 px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-teal-600">MediGo</Link>
        <Link href="/providers" className="text-stone-600 hover:text-teal-600 font-medium">
          ← Back to Providers
        </Link>
      </nav>

      <section className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-sm border border-stone-100 overflow-hidden mb-6">
          <img
            src={provider.profile_image_url || 'https://placehold.co/800x400'}
            alt={provider.name}
            className="w-full h-64 object-cover"
          />
          <div className="p-8">
            <span className="text-xs font-semibold text-teal-600 uppercase tracking-wide">{provider.specialty}</span>
            <h1 className="text-3xl font-bold text-stone-800 mt-1 mb-1">{provider.name}</h1>
            <p className="text-stone-500 mb-4">{provider.city}</p>
            <p className="text-stone-600 mb-6">{provider.description}</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-stone-50 rounded-xl p-4 text-center">
                <div className="text-teal-600 font-bold text-lg">{provider.price_range}</div>
                <div className="text-stone-400 text-xs mt-1">Price Range</div>
              </div>
              <div className="bg-stone-50 rounded-xl p-4 text-center">
                <div className="text-teal-600 font-bold text-lg">{provider.years_experience} yrs</div>
                <div className="text-stone-400 text-xs mt-1">Experience</div>
              </div>
              <div className="bg-stone-50 rounded-xl p-4 text-center">
                <div className="text-teal-600 font-bold text-lg">{provider.languages_spoken?.length}</div>
                <div className="text-stone-400 text-xs mt-1">Languages</div>
              </div>
              <div className="bg-stone-50 rounded-xl p-4 text-center">
                <div className="text-teal-600 font-bold text-lg">{provider.is_verified ? '✓ Verified' : 'Unverified'}</div>
                <div className="text-stone-400 text-xs mt-1">Status</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bio */}
        <div className="bg-white rounded-2xl shadow-sm border border-stone-100 p-8 mb-6">
          <h2 className="text-xl font-bold text-stone-800 mb-4">About</h2>
          <p className="text-stone-600">{provider.bio}</p>
        </div>

        {/* Contact */}
        <div className="bg-white rounded-2xl shadow-sm border border-stone-100 p-8 mb-6">
          <h2 className="text-xl font-bold text-stone-800 mb-4">Contact</h2>
          <div className="space-y-2 text-stone-600">
            {provider.phone && <p>📞 {provider.phone}</p>}
            {provider.email && <p>✉️ {provider.email}</p>}
            {provider.website && <p>🌐 <a href={provider.website} className="text-teal-600 hover:underline" target="_blank">{provider.website}</a></p>}
            {provider.address && <p>📍 {provider.address}</p>}
          </div>
        </div>

        {/* Inquiry Form */}
        <InquiryForm providerId={provider.id} />
        <div className="mt-6">
  <ReviewForm providerId={provider.id} />
</div>
      </section>
    </main>
  )
}