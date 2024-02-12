import { FC } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

type Props = {
  content: string;
  createdAt: string;
  user: {
    name: string;
    avatar: string;
  };
  isMe: boolean;
};

const formatDate = (date: string) => {
  const d = new Date(date);
  return `${d.getHours()}:${d.getMinutes()}`;
};

const Component: FC<Props> = ({ content, createdAt, user, isMe }) => {
  return (
    <li
      className={`flex border-b border-border pb-2 p-2 justify-between ${isMe ? "flex-row-reverse" : ""}`}
    >
      <div
        className={`flex gap-2 items-center ${isMe ? "flex-row-reverse" : ""}`}
      >
        <Avatar>
          <AvatarImage src={user.avatar} />
          <AvatarFallback>USER</AvatarFallback>
        </Avatar>
        <div className={`flex flex-col ${isMe ? "text-right" : ""}`}>
          <span className="text-xs">{user.name}</span>
          <span>{content}</span>
        </div>
      </div>
      <div className="flex items-end">
        <span className="text-xs">{formatDate(createdAt)}</span>
      </div>
    </li>
  );
};

export default Component;
