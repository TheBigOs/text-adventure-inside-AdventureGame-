import { useState } from "react";

import { rooms } from "./rooms";

import OutputLog from "./components/OutputLog";

import CommandInput from "./components/CommandInput";

import { parseCommand } from "./game/parser";

export default function App() {
  const [location, setLocation] =
    useState("start");

  const [inventory, setInventory] =
    useState([]);

  const [output, setOutput] =
    useState([
      "Welcome to the adventure.",
    ]);

  function addOutput(text) {
    setOutput((prev) => [...prev, text]);
  }

  function describeRoom(
    roomId = location
  ) {
    const room = rooms[roomId];

    addOutput(room.title);
    addOutput(room.description);

    addOutput(
      "Exits: " +
        Object.keys(room.exits).join(", ")
    );

    if (room.items.length > 0) {
      addOutput(
        "Items: " +
          room.items.join(", ")
      );
    }
  }

  function move(direction) {
    const room = rooms[location];

    const nextRoom =
      room.exits[direction];

    if (!nextRoom) {
      addOutput(
        "You cannot go that way."
      );
      return;
    }

    setLocation(nextRoom);

    describeRoom(nextRoom);
  }

  function takeItem(itemName) {
    const room = rooms[location];

    const index =
      room.items.indexOf(itemName);

    if (index === -1) {
      addOutput(
        "Item not found."
      );
      return;
    }

    room.items.splice(index, 1);

    setInventory((prev) => [
      ...prev,
      itemName,
    ]);

    addOutput(
      `You take the ${itemName}.`
    );
  }

  function showInventory() {
    if (inventory.length === 0) {
      addOutput(
        "Inventory is empty."
      );
      return;
    }

    addOutput(
      "Inventory: " +
        inventory.join(", ")
    );
  }

  function handleCommand(input) {
    parseCommand(
      input,
      {
        location,
        inventory,
      },
      {
        addOutput,
        move,
        takeItem,
        showInventory,
        describeRoom,
      }
    );
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Text Adventure</h1>

      <OutputLog output={output} />

      <CommandInput
        onCommand={handleCommand}
      />
    </div>
  );
}
