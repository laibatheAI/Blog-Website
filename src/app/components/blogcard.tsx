import Link from "next/link";
import { DATA } from "@/app/utils/blogData";
import Image from "next/image";

interface BlogCardProps {
  blogData: DATA;
}

export default function BlogCard({ blogData }: BlogCardProps) {
  return (
    <div className="bg-white border rounded-lg shadow-xl mt-8 shadow-slate-600 p-4 hover:scale-105 transform transition duration-300">
      <Image
        src={blogData.image}
        alt={blogData.title}
        width={1000}
        height={1000}
        className=" rounded-md shadow-md shadow-black"
      />
      <h2 className="font-bold text-lg lg:text-xl underline font-serif text-blue-950 px-5 py-2 mt-2">
        {blogData.title}
      </h2>

      <p className="px-5 pb-2 text-left leading-relaxed">
        {blogData.description}
      </p>

      <Link href={`/blog/${blogData.slug}`}>
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
          Read More
        </button>
      </Link>
    </div>
  );
}
