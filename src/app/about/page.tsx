import Footer from "../components/footer";

export default function AboutPage() {
  return (
    <div className="w-full h-72 pt-20 shadow-2xl bg-[url('/background2.jpg')] bg-no-repeat bg-cover bg-center ">
      <h1
        className="grid justify-center items-center font-bold text-5xl lg:text-6xl text-outline text-center my-10"
        style={{ textShadow: "3px 3px 3px black" }}
      >
        About Us
      </h1>

      <p className="text-black font-semibold text-md lg:text-xl leading-relaxed mt-40 text-center px-5 lg:mx-10">
        Here, we’re all about exploring ideas, sharing knowledge, and inspiring
        conversations. Whether it&#39;s diving into the latest tech trends,
        uncovering lifestyle tips, or celebrating the wonders of the world
        around us, our blog is your go-to destination for thought-provoking and
        engaging content. We believe in the power of stories and information to
        spark curiosity and bring people together. Join us on this journey of
        discovery, and let’s explore, learn, and grow together!
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 justify-between items-center gap-10 lg:mt-5 mx-2 px-4 lg:px-20">

        <div className="lg:my-8 mt-8 rounded-md shadow-2xl lg:p-10">
          <h2 className="text-2xl font-semibold text-blue-950">Our Mission</h2>

          <p className="text-black mt-2">
            At Inkspire, we believe in the power of words to educate, inspire,
            and transform. Our mission is to ignite curiosity and empower our
            readers to explore new ideas and perspectives.
          </p>
        </div>

        <div className="my-8 rounded-md shadow-2xl lg:p-10">
          <h2 className="text-2xl font-semibold text-blue-950">
            Why Choose Inkspire?
          </h2>

          <ul className="list-disc pl-5 text-black mt-2 space-y-2">
            <li>Engaging and well-researched content.</li>
            <li>Diverse topics tailored to your interests.</li>
            <li>A community that values growth and inspiration.</li>
          </ul>
        </div>
      </div>

      <p className="text-blue-950 font-bold mt-8 italic text-center mb-10">
        &#34;Ink your passion, inspire the world.&#34; Inkspire
      </p>

      <Footer />
    </div>
  );
}
