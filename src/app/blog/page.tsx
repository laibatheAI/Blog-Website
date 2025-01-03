import blogData, { DATA } from "@/app/utils/blogData";
import BlogCard from "@/app/components/blogcard";
import Footer from "../components/footer";

export default function BlogPage() {
  return (
    <div className="w-full h-72 pt-20 shadow-2xl bg-[url('/background2.jpg')] bg-no-repeat bg-cover bg-center ">
      <div className="px-4">
      <h1 className="grid justify-center items-center font-bold text-5xl lg:text-6xl text-outline py-4"
          style={{ textShadow: "3px 3px 3px black"}}>
        Blogs
      </h1>

      <h2 className="grid justify-center items-center font-bold text-4xl lg:text-6xl text-outline pt-8 pb-14 lg:pt-5"
          style={{ textShadow: "3px 3px 3px black"}}>
        Our Latest Blogs 
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 gap-y-10 pb-20">

        {blogData.map((blogData: DATA) => (
          <BlogCard key={blogData.id} blogData={blogData} />
        ))}
      </div>
      </div>
      

      <Footer />
    </div>
  );
}
