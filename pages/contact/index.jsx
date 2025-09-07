export default function ContactPage() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
        <p className="mb-8 text-gray-600">
          Let’s talk about your project. Fill out the form below and our team will get back to you.
        </p>

        <form
          action="/contact/success"
          method="GET"
          className="space-y-6"
        >
          <div>
            <label className="block mb-2 text-sm font-medium">Name</label>
            <input
              type="text"
              className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-600"
              placeholder="Your name"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium">Email</label>
            <input
              type="email"
              className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-600"
              placeholder="you@example.com"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium">Message</label>
            <textarea
              className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-600"
              rows="5"
              placeholder="Tell us about your project"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
