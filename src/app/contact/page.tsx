import Footer from "../components/footer";

export default function ContactPage() {
  return (
    <div className="w-full h-72 pt-20 shadow-2xl bg-[url('/background2.jpg')] bg-no-repeat bg-cover bg-center">
      <div className="px-5 py-14">
        <h1
          className="grid justify-center items-center font-bold text-5xl lg:text-6xl text-outline text-center"
          style={{ textShadow: "3px 3px 3px black" }}
        >
          Contact Us
        </h1>
        <p className="text-black font-semibold text-[15px] lg:text-xl leading-relaxed mt-28 lg:mb-10 text-center px-5 lg:mx-10">
        Have questions, feedback, or just want to say hello? Fill out the form below, and we&#39;ll get back to you as soon as possible. 
        Whether you&#39;re looking for more information about our services, need help with something specific, or simply want to connect, we&#39;re here to assist. 
        Your thoughts and inquiries are valuable to us, and we look forward to hearing from you!
        </p>

        <div className=" grid lg:justify-center lg:items-center">
          <form className="lg:w-[500px] my-8 space-y-6 border rounded-xl shadow-2xl py-5 px-3">
            {/* Name Field */}
            <div>
              <label
                htmlFor="name"
                className="block text-lg font-medium text-gray-700"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your name"
              />
            </div>

            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-lg font-medium text-gray-700"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your email"
              />
            </div>

            {/* Message Field */}
            <div>
              <label
                htmlFor="message"
                className="block text-lg font-medium text-gray-700"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Write your message here..."
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white rounded-lg px-4 py-2 font-medium hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
}
