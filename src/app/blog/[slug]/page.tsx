import blogData from "@/app/utils/blogData";
import Image from "next/image";
import Comment from "@/app/components/comment";

export default function BlogDetailPage(

  {params,}: {params: { slug: string };}
) {
  const blog = blogData.find((b) => b.slug === params.slug);

  if (!blog) {
    return <p className="text-center text-gray-600">Blog not found!</p>;
  }

  return (
    <div className="grid justify-center items-center">
      <div className="border rounded-lg shadow-2xl lg:w-[1000px] w-[320px] px-8 grid justify-center items-center mx-auto my-20 pb-14">

      <h1 className="text-xl lg:text-5xl lg:tracking-wide font-bold underline font-serif text-blue-950 lg:px-5 py-5 text-center">
        {blog.title}
      </h1>

      <div>
        <Image
          src={blog.image}
          alt={blog.title}
          width={1000} // Specify width
          height={500} // Specify height
          className="rounded-md "
          style={{ boxShadow: "5px 5px 5px gray" }}
        />
        </div>
      <div className="text-black lg:font-semibold mt-6 px-2">
        {blog.content.map((block, idx) => (
          <p key={idx} className="mb-4">
            {block.text}
          </p>
        ))}

        <Comment />
      </div>
        
      </div>
   </div>
  );
}
