import { FC } from "react";
import ChatMessage from "../molecules/ChatMessage";
import { GET_MESSAGES } from "../../graphql/queries/GetMessages";
import { useQuery } from "@apollo/client";

type Props = {
  roomId: number;
};

const Component: FC<Props> = ({ roomId }) => {
  const { loading, error, data } = useQuery(GET_MESSAGES, {
    variables: { roomId },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <ul className="py-4 space-y-4">
      {data.messages.map((message: any) => (
        <ChatMessage
          key={message.id}
          content={message.content}
          createdAt={message.created_at}
          user={{
            name: "Shad",
            avatar: "https://github.com/shadcn.png",
          }}
          isMe={true}
        />
      ))}
    </ul>
  );
};

export default Component;
