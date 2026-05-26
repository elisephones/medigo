import { supabase } from '@/lib/supabase'
import Link from 'next/link'

export default async function ProvidersPage() {
  const { data: providers } = await supabase.from('providers').select('*')

  return (
    <main className="min-h-screen bg-stone-50">
      {/* Nav */}
      <nav className="bg-white border-b border-stone-200 px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-teal-600">MediGo</Link>
      </nav>

      <section className="px-6 py-12 max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-stone-800 mb-2">Browse Providers</h1>
        <p className="text-stone-500 mb-10">Find top-rated clinics and doctors in Turkey</p>

        {!providers || providers.length === 0 ? (
          <p className="text-stone-400">No providers yet.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {providers.map((provider) => (
              <Link key={provider.id} href={`/providers/${provider.slug}`}>
                <div className="bg-white rounded-2xl shadow-sm border border-stone-100 overflow-hidden hover:shadow-md transition cursor-pointer">
                  <img
                    src={provider.profile_image_url || 'https://placehold.co/400x300'}
                    alt={provider.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <span className="text-xs font-semibold text-teal-600 uppercase tracking-wide">{provider.specialty}</span>
                    <h2 className="text-xl font-bold text-stone-800 mt-1 mb-1">{provider.name}</h2>
                    <p className="text-stone-500 text-sm mb-2">{provider.city}</p>
                    <p className="text-stone-600 text-sm mb-4 line-clamp-2">{provider.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-teal-600 font-semibold text-sm">{provider.price_range}</span>
                      <span className="text-xs text-stone-400">{provider.languages_spoken?.join(', ')}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </main>
  )
}