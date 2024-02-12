import { useQuery } from "@apollo/client";
import { GET_ROOMS } from "@/graphql/queries/GetRooms";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import RoomCreationDialog from "./RoomCreationDialog";

const Component = () => {
  const { loading, error, data } = useQuery(GET_ROOMS);

  if (loading) return <Skeleton className="h-[228px] w-full rounded-xl" />;
  if (error) return <p>Error :(</p>;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Room List</CardTitle>
        <CardDescription>部屋一覧</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {data.rooms.map((room: any) => (
            <Link to={`/${room.id}`} key={room.id} className="flex">
              <Button variant="outline" className="w-full">
                <span>{room.name}</span>
              </Button>
            </Link>
          ))}
          {data.rooms.length === 0 && (
            <li className="flex justify-center items-center h-20">
              <span>部屋がありません</span>
            </li>
          )}
        </ul>
      </CardContent>
      <CardFooter>
        <RoomCreationDialog />
      </CardFooter>
    </Card>
  );
};

export default Component;
