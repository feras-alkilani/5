import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import Image from "next/image"; // استيراد Image من next/image

export default function Logo() {
  return (
    <Link href="/" className={cn("text-3xl md:text-4xl")}>
      <div className="flex items-center">
        <p>
          <span className="text-primary">My</span> Blog
        </p>{" "}
        <Image src="/logo-icon.png" alt="logo icon" width={32} height={32} />
      </div>
    </Link>
  );
}
