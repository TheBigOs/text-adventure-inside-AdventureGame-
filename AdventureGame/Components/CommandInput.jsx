import { useState } from "react";

export default function CommandInput({ onCommand }) {
  const [command, setCommand] = useState("");

  function submit(e) {
    e.preventDefault();

    onCommand(command);

    setCommand("");
  }

  return (
    <form onSubmit={submit}>
      <input
        value={command}
        onChange={(e) => setCommand(e.target.value)}
        placeholder="Type a command..."
      />
    </form>
  );
}
