import PostItem from "@/components/post-item";
import SectionTitle from "@/components/section-title";
import { buttonVariants } from "@/components/ui/button";
import { getPosts } from "@/lib/post";
import { ChevronsRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const PostsSection = async () => {
  const { posts } = await getPosts();

  return (
    <section className="space-y-6 md:space-y-8">
      <div className="flex items-center justify-between gap-8">
        <SectionTitle title="Last Articals" />
        <Link href="/posts" className={buttonVariants({ variant: "link" })}>
          <span>See more</span>
          <ChevronsRight className="size-4" />
        </Link>
      </div>
      {/* posts cards */}
      <div className="grid gap-4 md:gap-8">
        {posts.slice(0, 4).map((post) => (
          <PostItem key={post._id} post={post} />
        ))}
      </div>
    </section>
  );
};

export default PostsSection;
