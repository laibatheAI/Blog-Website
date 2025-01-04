import Image from "next/image";
import Link from "next/link";
import Footer from "./components/footer";
export default function FrontPage() {
  return (
    <div className="w-full h-auto lg:h-auto lg:w-full bg-[url('/background2.jpg')] bg-no-repeat bg-cover bg-center pt-11">
      {/* website Name */}
      <div>
        <h1
          className="grid justify-center items-center font-bold text-5xl lg:text-6xl text-outline py-7"
          style={{ textShadow: "3px 3px 3px black"}}
        >
          Inkspire
        </h1>
      </div>
      {/* website Slogan */}
      <div>
        <h2
          className="grid justify-center items-center font-semibold text-[30px] text-outline lg:text-6xl text-center"
          style={{ textShadow: "3px 3px 3px black" }}
        >
          *Ink Your Passion, Inspire the World*
        </h2>
      </div>

      {/* blogs div */}
      <div className="grid grid-cols-1 lg:grid-cols-3 justify-around items-center gap-5 lg:mx-10 lg:mt-8 mt-28 z-0">
        {/* 1st card */}
        
        <div className="bg-white rounded-md hover:scale-105 transform transition duration-300 mx-2">
          <div className=" p-4">
            <Image
              src="/dubai frame.jpg"
              alt="Dubai Frame"
              width={1000}
              height={1200}
             className="rounded-lg h-[210px]"
             style={{ boxShadow:"5px 5px 5px gray" }}
            />
          </div>

          <h1 className="font-bold text-xl underline font-serif text-blue-950 px-5 py-2">
          Dubai Frame
          </h1>

          <p className="px-5 pb-2 text-left text-black">
          Discover Dubai&apos;s evolution at the iconic Dubai Frame, a golden architectural marvel that bridges the city&apos;s historic charm and futuristic vision with stunning views and immersive experiences.
          </p>
        </div>

        {/* 2nd card */}
        <div className="bg-white rounded-md hover:scale-105 transform transition duration-300 h-[380px] mx-2 pb-3">
          <div className=" p-4">
            <Image
              src="/skyD.jpg"
              alt="Sky Diving"
              width={1000}
              height={1000}
              className="rounded-lg"
              style={{ boxShadow:"5px 5px 5px gray" }}
            />
          </div>

          <h1 className="font-bold text-xl underline font-serif text-blue-950 px-5 pb-1">
          Leap of Thrill
          </h1>

          <p className="px-5 pb-10 text-left">
          Experience the thrill of skydiving and take in breathtaking views from thousands of feet above. Perfect for adventure enthusiasts, it&#39;s the ultimate way to soar and explore like never before!
          </p>
        </div>

        {/* 3rd card */}
        <div className="bg-white rounded-md hover:scale-105 transform transition duration-300 mx-2" >
          <div className=" p-4">
            <Image
              src="/the wild robot.jpg"
              alt="The Wild Robot"
              width={1000}
              height={1000}
              className="rounded-lg"
              style={{ boxShadow:"5px 5px 5px gray" }}
            />
          </div>

          <h1 className="font-bold text-xl underline font-serif text-blue-950 px-5 py-2">
          THE WILD ROBOT
          </h1>

          <p className="px-5 pb-2 text-left">
          The Wild Robot movie follows a robots journey in the wilderness, learning to adapt and connect with nature. It is a touching tale of resilience and harmony between technology and the natural world.,

          </p>
        </div>

      </div>

      <div className="animate-bounce bg-blue-500 backdrop-blur-xl rounded-full grid justify-center items-center w-[200px] h-[40px] mx-auto my-10 ">
        <button className=" text-lg font-blod font-serif text-white"
        style={{ textShadow: "2px 2px 2px black" }}>
          <Link href="/blog">
          See All
          </Link>
        </button>
      </div>

      <Footer />
    </div>
  );
}



