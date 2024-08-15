import { Image } from "sanity";
import { Avatar, AvatarImage } from "./ui/avatar";
import { urlForImage } from "../sanity/lib/image";
import { Calendar } from "lucide-react";

interface AuthorAvatarProps {
  authorImage: Image;
  authorName: string;
  publishDate: Date;
}

const AuthorAvatar = ({
  authorImage,
  authorName,
  publishDate
}: AuthorAvatarProps) => {
  return (
    <div className="flex items-center justify-between gap-2">
      {/* avatar */}
      <div className="flex items-center gap-2">
        <Avatar>
          <AvatarImage src={urlForImage(authorImage) || ""} />
        </Avatar>
        <p className="font-semibold">{authorName}</p>
      </div>
      {/* publish date */}
      <div className="flex items-center gap-2">
        <Calendar className="w-4 h-4 text-primary" />
        <small className="text-muted-foreground">
          {new Date(publishDate).toLocaleDateString("en-UK", {
            day: "numeric",
            month: "long",
            year: "numeric"
          })}
        </small>
      </div>
    </div>
  );
};

export default AuthorAvatar;
