"use client";

import qs from "query-string";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Filter } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { FC } from "react";
import { Category } from "@/constants/types/interfaces";

interface CategoriesFilterProps {
  categories: Category[];
}

const CategoriesFilter: FC<CategoriesFilterProps> = ({ categories }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentCategory: Category | undefined = categories.find(
    (category) => category._id === searchParams.get("categoryId")
  );

  const onClick = (id: string | undefined) => {
    const url = qs.stringifyUrl(
      { url: window.location.href, query: { categoryId: id } },
      { skipNull: true }
    );

    router.push(url);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          {!currentCategory && <Filter className="size-4" />}
          {currentCategory?.title || "Select Category"}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem onClick={() => onClick(undefined)}>
          All
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        {categories.map((category) => (
          <DropdownMenuItem
            key={category._id}
            onClick={() => onClick(category._id)}
          >
            {category.title}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default CategoriesFilter;
