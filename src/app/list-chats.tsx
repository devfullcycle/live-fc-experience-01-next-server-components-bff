async function getChats() {
  const response = await fetch("http://localhost:3000/api/chats", {
    cache: "no-store",
  });
  //Incremental Static Regeneration (ISR)
  //   const response = await fetch("http://localhost:3000/api/chats", {
  //     next: {revalidate: 10}
  //   });
  return await response.json();
}

export async function ListChats() {
  const chats = await getChats();
  
  return (
    <ul>
      {chats.map((chat: any, key: any) => (
        <li key={key}>{chat.name}</li>
      ))}
    </ul>
  );
}
