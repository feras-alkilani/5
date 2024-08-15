import { Metadata } from "next";
import CategoriesSection from "./_components/categories-section";
import AuthorsSection from "../../../components/authors-section";
import PostsSection from "./_components/posts-section";

export const metadata: Metadata = {
  title: "My Plog, Discover an new opjeacts!",
  description: "Hi, I'm Feras Alkilani, I'm a ploger!"
};

export default function Home() {
  return (
    <>
      {/* main section  */}
      <section className="flex flex-col items-center justify-center gap-6 md:gap-8 text-center p-4 pt-8 md:p-8 md:pt-12">
        <h1 className="text-2xl md:text-4xl font-semibold">
          Welcome to MyPlog 👋
        </h1>
        <p className="max-w-[40rem] text-lg">
          Discover a new world with me: Enjoy an inspiring tour in my blog,
          where interesting stories, valuable information, golden tips, and
          unforgettable experiences await you that will immerse you in the magic
          of exploration and enhance your passion for travel and experience.
        </p>
      </section>
      <div className="grid md:grid-cols-5 gap-8 md:gap:16">
        <div className="md:col-span-3">
          <PostsSection />
        </div>
        <div className="md:col-span-2 space-y-8">
          <CategoriesSection />
          <AuthorsSection />
        </div>
      </div>
    </>
  );
}
