import { NavLink } from "@/constants/types/interfaces";
import { Files, Home } from "lucide-react";

export const navLinks: NavLink[] = [
  { label: "Home", href: "/", icon: Home },
  { label: "Posts", href: "/posts", icon: Files }
];
