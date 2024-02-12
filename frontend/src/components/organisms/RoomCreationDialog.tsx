import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { PlusIcon } from "@radix-ui/react-icons";
import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_ROOM } from '@/graphql/mutations/CreateRoom';

const Component = () => {
  const [name, setName] = useState('');
  const [createRoom] = useMutation(CREATE_ROOM);

  const handleCreateRoom = () => {
    createRoom({ variables: { name, ownerId: 1, participants: [1] } })
      .then(() => {
        window.location.reload();
      })
      .catch((err) => {
        console.error(err);
      })
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full">
          <PlusIcon className="h-[1.2rem] w-[1.2rem]" />
          Create Room
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create Room</DialogTitle>
          <DialogDescription>
            部屋を作成
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              placeholder="Room Name"
              className="col-span-3"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
          <Button type="submit" onClick={handleCreateRoom}>
            Create
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default Component