import { GetServerSideProps } from "next";
//import { prisma } from "../../prisma/prisma";

type Chat = {
  id: number;
  name: string;
};

type ListChatsProps = {
  chats: Chat[];
};

export default function ListChats(props: ListChatsProps) {
  return (
    <div>
      <h1>Chats</h1>
      <ul>
        {props.chats.map((chat) => (
          <li key={chat.id}>{chat.name}</li>
        ))}
      </ul>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  //const chats = await prisma.chat.findMany();
  const response = await fetch("http://localhost:3000/api/chats");
  const chats = await response.json();

  return {
    props: {
      chats,
      // chats: chats.map((chat: any) => ({
      //   ...chat,
      //   createdAt: chat.createdAt.toISOString(),
      // })),
    },
  };
};



// const getStaticProps: GetStaticProps = async (ctx) => {
//   const response = await fetch("http://localhost:3000/api/chats");
//   const chats = await response.json();

//   return {
//     props: {
//       chats,
//     },
//     revalidate: 60, //revalidate()
//   };
// }