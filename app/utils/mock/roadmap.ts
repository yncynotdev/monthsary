import type { MockRoadmap } from "~/types/types";

export function getMockRoadmap() {
  const data: MockRoadmap[] = [
    {
      img: "/images/cat-orange.png",
      title: "When We First Met",
      description: "A random introduction at a mutual friend’s BBQ. Just a quick hello—but something lingered in the air.",
      date: "05/11/2020",
      done: true,
    },
    {
      img: "/images/cat-orange.png",
      title: "First Real Hangout",
      description: "Grabbed pizza after a long walk in the city. No fancy plans—just conversation, comfort, and a hint of something more.",
      date: "06/19/2020",
      done: true,
    },
    {
      img: "/images/cat-orange.png",
      title: "The Night We Talked for Hours",
      description: "What started as a quick chat turned into a 6-hour call. Everything just flowed—like we’d known each other forever.",
      date: "09/18/2020",
      done: true,
    },
    {
      img: "/images/cat-orange.png",
      title: "Our First Adventure",
      description: "Tried an amusement park together—screams on the roller coaster, laughter in the rain, and matching souvenir shirts.",
      date: "10/27/2020",
      done: true,
    },
    {
      img: "/images/cat-orange.png",
      title: "The Move-In Moonlight",
      description: "Moved in with just a mattress and a coffee machine. Late-night decorating, pizza on the floor, and endless smiles.",
      date: "12/30/2020",
      done: true,
    },
    {
      img: "/images/cat-orange.png",
      title: "When We Wrote Our Vows",
      description: "Sitting side by side, writing down promises that came from the heart. Every word was a memory in the making.",
      date: "01/01/2021",
      done: true,
    },
  ];
  return data;
}
