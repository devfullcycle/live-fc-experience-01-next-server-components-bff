import CreateChatPage from "../create-chat";
import { ListChats } from "../list-chats";

export default function HomePage() {
  return (
    <div>
      <h1>Página do chat gpt</h1>
      <div className="flex flex-row gap-5">
        <div>
          {/* @ts-expect-error server component */}
          <ListChats />
        </div>
        <div>
          <CreateChatPage />
        </div>
      </div>
    </div>
  );
}
