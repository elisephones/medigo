import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-stone-50">
      {/* Nav */}
      <nav className="bg-white border-b border-stone-200 px-6 py-4 flex items-center justify-between">
        <span className="text-2xl font-bold text-teal-600">MediGo</span>
        <Link href="/providers" className="text-stone-600 hover:text-teal-600 font-medium">
          Browse Providers
        </Link>
      </nav>

      {/* Hero */}
      <section className="bg-teal-600 text-white px-6 py-24 text-center">
        <h1 className="text-5xl font-bold mb-4">Affordable Healthcare Abroad</h1>
        <p className="text-xl text-teal-100 mb-10 max-w-2xl mx-auto">
          Find world-class doctors and clinics in Turkey and beyond — at a fraction of US prices.
        </p>
        <Link
          href="/providers"
          className="bg-white text-teal-600 font-bold px-8 py-4 rounded-full text-lg hover:bg-teal-50 transition"
        >
          Find a Provider
        </Link>
      </section>

      {/* Why MediGo */}
      <section className="px-6 py-20 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-stone-800 mb-12">Why MediGo?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-sm text-center border border-stone-100">
            <h3 className="text-xl font-bold text-stone-800 mb-2">Save Up to 80%</h3>
            <p className="text-stone-500">Get the same quality procedures at a fraction of what you would pay in the US, UK, or Canada.</p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-sm text-center border border-stone-100">
            <h3 className="text-xl font-bold text-stone-800 mb-2">Verified Reviews</h3>
            <p className="text-stone-500">Read real reviews from real patients who have traveled abroad for care.</p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-sm text-center border border-stone-100">
            <h3 className="text-xl font-bold text-stone-800 mb-2">Top Destinations</h3>
            <p className="text-stone-500">Browse providers in Turkey, the world's number one destination for cosmetic surgery.</p>
          </div>
        </div>
      </section>

      {/* Specialties */}
      <section className="bg-white px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-stone-800 mb-12">Popular Procedures</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link href="/providers?specialty=Hair+Transplant" className="bg-stone-50 hover:bg-teal-50 border border-stone-200 hover:border-teal-300 rounded-xl p-4 text-center transition">
              <div className="text-sm font-medium text-stone-700">Hair Transplant</div>
            </Link>
            <Link href="/providers?specialty=Rhinoplasty" className="bg-stone-50 hover:bg-teal-50 border border-stone-200 hover:border-teal-300 rounded-xl p-4 text-center transition">
              <div className="text-sm font-medium text-stone-700">Rhinoplasty</div>
            </Link>
            <Link href="/providers?specialty=Dental+Veneers" className="bg-stone-50 hover:bg-teal-50 border border-stone-200 hover:border-teal-300 rounded-xl p-4 text-center transition">
              <div className="text-sm font-medium text-stone-700">Dental Veneers</div>
            </Link>
            <Link href="/providers?specialty=Liposuction" className="bg-stone-50 hover:bg-teal-50 border border-stone-200 hover:border-teal-300 rounded-xl p-4 text-center transition">
              <div className="text-sm font-medium text-stone-700">Liposuction</div>
            </Link>
            <Link href="/providers?specialty=Breast+Augmentation" className="bg-stone-50 hover:bg-teal-50 border border-stone-200 hover:border-teal-300 rounded-xl p-4 text-center transition">
              <div className="text-sm font-medium text-stone-700">Breast Augmentation</div>
            </Link>
            <Link href="/providers?specialty=Facelift" className="bg-stone-50 hover:bg-teal-50 border border-stone-200 hover:border-teal-300 rounded-xl p-4 text-center transition">
              <div className="text-sm font-medium text-stone-700">Facelift</div>
            </Link>
            <Link href="/providers?specialty=Eyelid+Surgery" className="bg-stone-50 hover:bg-teal-50 border border-stone-200 hover:border-teal-300 rounded-xl p-4 text-center transition">
              <div className="text-sm font-medium text-stone-700">Eyelid Surgery</div>
            </Link>
            <Link href="/providers?specialty=Tummy+Tuck" className="bg-stone-50 hover:bg-teal-50 border border-stone-200 hover:border-teal-300 rounded-xl p-4 text-center transition">
              <div className="text-sm font-medium text-stone-700">Tummy Tuck</div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-teal-600 text-white px-6 py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to explore your options?</h2>
        <p className="text-teal-100 mb-8 text-lg">Browse verified providers in Turkey today.</p>
        <Link
          href="/providers"
          className="bg-white text-teal-600 font-bold px-8 py-4 rounded-full text-lg hover:bg-teal-50 transition"
        >
          Browse Providers
        </Link>
      </section>

      {/* Footer */}
      <footer className="bg-stone-800 text-stone-400 text-center px-6 py-8">
        <p>2026 MediGo. Connecting patients with world-class care abroad.</p>
      </footer>
    </main>
  )
}