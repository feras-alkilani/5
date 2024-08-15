import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";

export const richTextComponents = {
  types: {
    image: ({ value }: any) => (
      <Image
        src={urlForImage(value)}
        alt="post image"
        width={720}
        height={440}
        className="rounded-lg max-h-96"
      />
    )
  }
};
