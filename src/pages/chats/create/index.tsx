export default function CreateChatPage() {
  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const input = document.querySelector("#name") as HTMLInputElement;
    const response = await fetch("/api/chats", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: input.value,
      }),
    });
    const data = await response.json();
    console.log(data);
  }

  return (
    <div>
      <h1>Create Chat</h1>
      <form className="flex flex-col" onSubmit={onSubmit}>
        <div>
          <label htmlFor="name">Name</label>
        </div>
        <div>
          <input type="text" name="name" id="name" />
        </div>
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}
