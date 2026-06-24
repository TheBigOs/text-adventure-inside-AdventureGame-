export function parseCommand(
  input,
  gameState,
  updateState
) {
  const command = input.toLowerCase().trim();

  if (command === "look") {
    updateState.describeRoom();
    return;
  }

  if (command === "inventory") {
    updateState.showInventory();
    return;
  }

  if (command.startsWith("go ")) {
    updateState.move(
      command.replace("go ", "")
    );
    return;
  }

  if (command.startsWith("take ")) {
    updateState.takeItem(
      command.replace("take ", "")
    );
    return;
  }

  updateState.addOutput(
    "Unknown command."
  );
}
