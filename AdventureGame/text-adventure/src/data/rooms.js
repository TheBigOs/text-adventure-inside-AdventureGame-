const rooms = {
  start: {
    title: "Dark Room",
    description: "You wake up in a dark room.",
    exits: {
      north: "hallway"
    },
    items: ["flashlight"]
  },

  hallway: {
    title: "Hallway",
    description: "A long metal corridor stretches ahead.",
    exits: {
      south: "start",
      east: "controlRoom"
    },
    items: []
  },

  controlRoom: {
    title: "Control Room",
    description: "Old monitors flicker in the darkness.",
    exits: {
      west: "hallway"
    },
    items: ["keycard"]
  }
};
