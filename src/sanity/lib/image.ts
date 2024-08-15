import createImageUrlBuilder from "@sanity/image-url";
import type { Image } from "sanity";

import { dataset, projectId } from "../env";

const imageBuilder = createImageUrlBuilder({
  projectId: projectId || "",
  dataset: dataset || ""
});

export const urlForImage = (source: Image) => {
  // تحقق من صحة الكائن المصدر
  if (!source || !source.asset || !source.asset._ref) {
    console.error("Invalid image source:", source);
    return "";
  }

  // حاول بناء رابط الصورة
  return imageBuilder.image(source).auto("format").fit("max").url();
};
