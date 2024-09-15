import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-white text-black font-sans">
      {/* Headline and Subheadline */}
      <section className="text-center my-16">
        <h1 className="text-6xl font-extrabold text-gray-900">
          Turn Your <span className="text-blue-600">Failed Ideas</span> into Opportunities
        </h1>
        <p className="text-xl mt-4 text-gray-500 max-w-2xl mx-auto">
          A marketplace for buying and selling abandoned projects, unfinished products, and failed ideas.
        </p>
      </section>

      {/* Primary CTA */}
      <div className="text-center my-12">
        <Link href="/add-listing" className="bg-blue-600 text-white px-10 py-4 rounded-full shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-105 inline-block">
          
            List Your Project
          
        </Link>
        <Link href="/listings" className="ml-6 text-blue-600 underline hover:text-blue-800 transition-all transform hover:scale-105">
          
            Browse Available Projects
        
        </Link>
      </div>

      {/* Social Proof */}
      <section className="text-center my-12">
        <p className="text-gray-500">Featured In</p>
        <div className="flex justify-center mt-6 space-x-8">
          {/* Example logos or media */}
          <Image src="/logo1.png" alt="Logo 1" width={120} height={50} />
          <Image src="/logo2.png" alt="Logo 2" width={120} height={50} />
          <Image src="/logo3.png" alt="Logo 3" width={120} height={50} />
        </div>
      </section>

      {/* Hero Image/Video */}
      <section className="my-16">
        <div className="max-w-6xl mx-auto rounded-lg overflow-hidden shadow-xl">
          <img src="/hero-image.jpg" alt="FailedIdeas Hero Image" className="w-full h-auto transition-transform hover:scale-105 duration-700" />
        </div>
      </section>

      {/* Key Benefits */}
      <section className="text-center my-16">
        <h2 className="text-4xl font-extrabold text-gray-900">Why Choose <span className="text-blue-600">FailedIdeas?</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12 max-w-6xl mx-auto">
          <div className="p-8 bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-md hover:shadow-xl transition-all">
            <h3 className="text-2xl font-semibold text-gray-900">Turn Failure into Profit</h3>
            <p className="mt-4 text-gray-600">
              Earn money from your abandoned projects by selling them to others.
            </p>
          </div>
          <div className="p-8 bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-md hover:shadow-xl transition-all">
            <h3 className="text-2xl font-semibold text-gray-900">Discover Unique Opportunities</h3>
            <p className="mt-4 text-gray-600">
              Find unfinished projects that can be revitalized with your expertise.
            </p>
          </div>
          <div className="p-8 bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-md hover:shadow-xl transition-all">
            <h3 className="text-2xl font-semibold text-gray-900">Learn from Mistakes</h3>
            <p className="mt-4 text-gray-600">
              Gain insights into why projects failed and avoid similar pitfalls in the future.
            </p>
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="text-center my-16 bg-gray-50 py-16">
        <h2 className="text-4xl font-extrabold text-gray-900">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12 max-w-6xl mx-auto">
          <div className="p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all">
            <p className="text-gray-600">
              "I thought my project was a complete loss until I listed it on FailedIdeas.com..."
            </p>
            <p className="mt-6 text-gray-900 font-semibold">— John D.</p>
          </div>
          <div className="p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all">
            <p className="text-gray-600">
              "The marketplace helped me find unfinished projects that matched my skills..."
            </p>
            <p className="mt-6 text-gray-900 font-semibold">— Sarah K.</p>
          </div>
          <div className="p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all">
            <p className="text-gray-600">
              "The community around FailedIdeas is supportive, and the platform is easy to use..."
            </p>
            <p className="mt-6 text-gray-900 font-semibold">— Mike L.</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="text-center my-16">
        <h2 className="text-4xl font-extrabold text-gray-900">Frequently Asked Questions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12 max-w-6xl mx-auto">
          <div className="p-8 bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-md hover:shadow-xl transition-all">
            <h3 className="text-xl font-semibold text-gray-900">How do I list a project?</h3>
            <p className="mt-4 text-gray-600">
              Simply sign up, go to the "Add Listing" page, and fill out the necessary information.
            </p>
          </div>
          <div className="p-8 bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-md hover:shadow-xl transition-all">
            <h3 className="text-xl font-semibold text-gray-900">What types of projects can I list?</h3>
            <p className="mt-4 text-gray-600">
              You can list any failed or abandoned projects, including apps, products, and more.
            </p>
          </div>
          <div className="p-8 bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-md hover:shadow-xl transition-all">
            <h3 className="text-xl font-semibold text-gray-900">How do transactions work?</h3>
            <p className="mt-4 text-gray-600">
              Transactions are handled securely through our payment gateway.
            </p>
          </div>
          <div className="p-8 bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-md hover:shadow-xl transition-all">
            <h3 className="text-xl font-semibold text-gray-900">What fees do you charge?</h3>
            <p className="mt-4 text-gray-600">
              We charge a small commission on successful sales and offer premium listings.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <div className="text-center my-12">
        <Link href="/auth"  className="bg-blue-600 text-white px-10 py-4 rounded-full shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-105 inline-block">
          
            Get Started Today
          
        </Link>
      </div>
    </div>
  );
}
