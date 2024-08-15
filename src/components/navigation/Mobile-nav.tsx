import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";
import { Menu } from "lucide-react";
import Link from "next/link";
import { navLinks } from "@/constants/nav-links";

export default function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Menu className="size-8 md:hidden cursor-pointer" />
      </SheetTrigger>
      <SheetContent className="py-32">
        <nav className="flex flex-col items-center gap-4">
          {navLinks.map((link, index) => {
            const { label, href, icon: Icon } = link;
            return (
              <SheetClose key={index} asChild>
                <Link
                  href={href}
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "lg" }),
                    "w-full justify-start"
                  )}
                >
                  <Icon className="w-5 h-5 mr-2" />{" "}
                  {/* لضبط حجم الأيقونة وإضافة مسافة بينها وبين النص */}
                  <span>{label}</span>
                </Link>
              </SheetClose>
            );
          })}
        </nav>
        <SheetClose asChild>
          <button className="mt-4 text-sm text-gray-500">Close</button>
        </SheetClose>
      </SheetContent>
    </Sheet>
  );
}
