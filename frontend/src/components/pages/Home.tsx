import Layout from '@/components/templates/Layout'
import RoomList from '@/components/organisms/RoomList'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import ChatMessageList from '@/components/organisms/ChatMessageList'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_MESSAGE } from '@/graphql/mutations/CreateMessage';

const Component = () => {
  const [createMessage] = useMutation(CREATE_MESSAGE);
  const [content, setContent] = useState('');
  const { id } = useParams();
  const isRoomSelected = !!id;

  const handleSendMessage = () => {
    if (!content) return;
    createMessage({
      variables: {
        images: [],
        content,
        senderId: 1,
        roomId: parseInt(id as string)
      }
    }).then(() => {
      setContent('');
      window.location.reload();
    }).catch((e) => {
      console.error(e);
    })
  }

  const handleKeyPress = (e: any) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  }

  useEffect(() => {
    window.addEventListener('keypress', handleKeyPress);
    return () => {
      window.removeEventListener('keypress', handleKeyPress);
    }
  }, [content]);

  useEffect(() => {
    setTimeout(() => {
      const chatRoom = document.getElementById('chat-room');
      if (!chatRoom) return;
      chatRoom.scrollTop = chatRoom.scrollHeight;
    }, 100);
  }, []);

  return (
    <Layout>
      <div className='container py-8 w-full grid grid-cols-12 gap-4'>
        <div className='col-span-4 hidden md:block'>
          <RoomList />
        </div>
        <div className='col-span-12 md:col-span-8'>
          <Card>
            <CardHeader>
              <CardTitle>Chat Room</CardTitle>
              <CardDescription>チャットルーム</CardDescription>
            </CardHeader>
            <CardContent className='h-[60vh] rounded-md overflow-y-auto' id='chat-room'>
              {!isRoomSelected ? (
                <div className='flex justify-center items-center h-full'>
                  <span>部屋を選んでください</span>
                </div>
              ) : (
                <div className='w-full md:w-10/12 mx-auto'>
                  <ChatMessageList roomId={parseInt(id as string)} />
                </div>
              )}
            </CardContent>
            {isRoomSelected && (
              <CardFooter className='flex gap-2'>
                <Input placeholder='Message' value={content} onChange={(e) => setContent(e.target.value)} />
                <Button onClick={handleSendMessage}>Send</Button>
              </CardFooter>
            )}
          </Card>
        </div>
      </div>
    </Layout>
  )
}

export default Component;