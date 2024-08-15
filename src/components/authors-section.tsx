import React from "react";
import { Card } from "./ui/card";
import { Avatar, AvatarImage } from "./ui/avatar";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { PortableText } from "@portabletext/react";
import { urlForImage } from "@/sanity/lib/image";
import { richTextComponents } from "./rich-text-components";
import { Github, Linkedin } from "lucide-react";
import { getAuthor } from "@/lib/author";

const AuthorSection = async () => {
  const { author } = await getAuthor();

  return (
    <section>
      <Card className="p-6 max-w-5xl mx-auto flex flex-col items-center text-center gap-4 md:gap-6">
        <Avatar>
          <AvatarImage src={urlForImage(author.image)} />
        </Avatar>
        <h3 className="text-xl md:text-2xl font-semibold">{author.name}</h3>
        <div className="prose dark:prose-invert prose-li:marker:text-primary prose-a:text-primary prose-headings:text-primary">
          <PortableText value={author.bio} components={richTextComponents} />
        </div>
        <div className="flex items-center gap-6">
          <Link
            href={author.linkedin!}
            target="_blank"
            className={buttonVariants({ variant: "secondary", size: "icon" })}
          >
            <Linkedin className="size-6 text-muted-foreground" />
          </Link>
          <Link
            href={author.github!}
            target="_blank"
            className={buttonVariants({ variant: "secondary", size: "icon" })}
          >
            <Github className="size-6 text-muted-foreground" />
          </Link>
        </div>
      </Card>
    </section>
  );
};

export default AuthorSection;
