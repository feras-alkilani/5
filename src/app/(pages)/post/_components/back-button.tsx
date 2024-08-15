"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeftCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

const BackButton = () => {
  const router = useRouter();

  return (
    <Button variant="link" onClick={() => router.back()}>
      <ArrowLeftCircle className="size-4" />
      <span>back</span>
    </Button>
  );
};

export default BackButton;
