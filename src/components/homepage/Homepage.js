import Image from 'next/image';
import Link from 'next/link';
import logo from "../../../public/images/logo.png"

export default function Home() {
  return (
    <div className="bg-white text-black">
      {/* Company Logo */}
      <header className="py-6">
        <Image src={logo} alt='failideas logo' width={50} height={50} className="mx-auto" />
      </header>

      {/* Headline and Subheadline */}
      <section className="text-center my-12">
        <h1 className="text-5xl font-bold text-gray-800">Turn Your Failed Ideas into Opportunities</h1>
        <p className="text-lg mt-4 text-gray-600">
          A marketplace for buying and selling abandoned projects, unfinished products, and failed ideas.
        </p>
      </section>

      {/* Primary CTA */}
      <div className="text-center my-8">
        <Link href="/add-listing" className="bg-black text-white px-8 py-4 rounded-full shadow-lg hover:bg-gray-800 transition-all transform hover:scale-105">
          List Your Failed Project
        </Link>
        <Link href="/listings" className="ml-4 text-black underline hover:text-gray-600 transition-all transform hover:scale-105">
          Browse Available Projects
        </Link>
      </div>

      {/* Social Proof */}
      <section className="text-center my-8">
        <p className="text-gray-600">As Featured In...</p>
        {/* Add logos or proof */}
      </section>

      {/* Hero Image/Video */}
      <section className="my-12 text-center">
        <img src="/hero-image.jpg" alt="FailedIdeas Hero Image" className="mx-auto rounded-lg shadow-lg" />
        {/* Optional video */}
        {/* <video src="/explainer-video.mp4" controls className="mx-auto mt-4 rounded-lg shadow-lg"></video> */}
      </section>

      {/* Key Benefits */}
      <section className="text-center my-12">
        <h2 className="text-4xl font-bold text-gray-800">Why Use FailedIdeas?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div className="p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all bg-gray-100">
            <h3 className="text-2xl font-semibold text-gray-800">Turn Failure into Profit</h3>
            <p className="mt-2 text-gray-600">Earn money from your abandoned projects by selling them to others.</p>
          </div>
          <div className="p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all bg-gray-100">
            <h3 className="text-2xl font-semibold text-gray-800">Discover Unique Opportunities</h3>
            <p className="mt-2 text-gray-600">Find unfinished projects that can be revitalized with your expertise.</p>
          </div>
          <div className="p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all bg-gray-100">
            <h3 className="text-2xl font-semibold text-gray-800">Learn from Mistakes</h3>
            <p className="mt-2 text-gray-600">Gain insights into why projects failed and avoid similar pitfalls in the future.</p>
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="text-center my-12">
        <h2 className="text-4xl font-bold text-gray-800">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div className="p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all bg-gray-100">
            <p className="text-gray-600">"I thought my project was a complete loss until I listed it on FailedIdeas.com..."</p>
            <p className="mt-4 text-gray-800 font-semibold">— John D.</p>
          </div>
          <div className="p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all bg-gray-100">
            <p className="text-gray-600">"The marketplace helped me find unfinished projects that matched my skills..."</p>
            <p className="mt-4 text-gray-800 font-semibold">— Sarah K.</p>
          </div>
          <div className="p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all bg-gray-100">
            <p className="text-gray-600">"The community around FailedIdeas is supportive, and the platform is easy to use..."</p>
            <p className="mt-4 text-gray-800 font-semibold">— Mike L.</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="text-center my-12">
        <h2 className="text-4xl font-bold text-gray-800">Frequently Asked Questions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div className="p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all bg-gray-100">
            <h3 className="text-xl font-semibold text-gray-800">How do I list a project on FailedIdeas.com?</h3>
            <p className="mt-2 text-gray-600">Simply sign up, go to the "Add Listing" page, and fill out the necessary information.</p>
          </div>
          <div className="p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all bg-gray-100">
            <h3 className="text-xl font-semibold text-gray-800">What types of projects can I list?</h3>
            <p className="mt-2 text-gray-600">You can list any failed or abandoned projects, including apps, products, and more.</p>
          </div>
          <div className="p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all bg-gray-100">
            <h3 className="text-xl font-semibold text-gray-800">How do transactions work?</h3>
            <p className="mt-2 text-gray-600">Transactions are handled securely through our payment gateway.</p>
          </div>
          <div className="p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all bg-gray-100">
            <h3 className="text-xl font-semibold text-gray-800">What fees do you charge?</h3>
            <p className="mt-2 text-gray-600">We charge a small commission on successful sales and offer premium listings.</p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <div className="text-center my-8">
        <Link href="/auth" className="bg-black text-white px-8 py-4 rounded-full shadow-lg hover:bg-gray-800 transition-all transform hover:scale-105">
          Get Started Today
        </Link>
      </div>

      {/* Contact Information */}
      <footer className="text-center my-12">
        <p className="text-gray-600">Contact Us: support@failedideas.com | +1-800-555-FAILED</p>
        <div className="mt-4">
          <Link href="/privacy-policy" className="text-black underline hover:text-gray-600 transition">
            Privacy Policy
          </Link>
          <Link href="/terms-of-service" className="ml-4 text-black underline hover:text-gray-600 transition">
            Terms of Service
          </Link>
        </div>
      </footer>
    </div>
  );
}
