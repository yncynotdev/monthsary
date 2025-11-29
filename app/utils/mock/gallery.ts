import type { MockGallery } from "~/types/types";

export function getMockGallery() {
  const data: MockGallery[] = [
    {
      image_url: "/images/cat-thunder.png",
      description:
        "It all began at a cozy coffee shop downtown. A shared smile, a casual conversation—and from that moment, something just clicked.",
      date: "November 15, 2018",
    },
    {
      image_url: "/images/cat-orange.png",
      description:
        "A movie night under the stars. Nervous laughter turned into endless conversation. The spark became a flame.",
      date: "April 2, 2018",
    },
    {
      image_url: "/images/cat-tilapia.png",
      description:
        "After a night of stargazing, the words just slipped out—and they felt more right than anything else.",
      date: "June 10, 2018",
    },
    {
      image_url: "/images/cat.png",
      description:
        "Explored the streets of Kyoto hand in hand. Got lost, laughed too much, and made unforgettable memories.",
      date: "September 5, 2019",
    },
    {
      image_url: "/images/cat-purple.png",
      description:
        "Turning a house into a home—together. First couch, first shared bills, and a lot of midnight snacks.",
      date: "February 14, 2020",
    },
    {
      image_url: "/images/cat-green.png",
      description:
        "In the middle of their favorite park, under autumn leaves, the question was asked—and the answer was a joyful “Yes!”",
      date: "November 26, 2022",
    },
    {
      image_url: "/images/cat-orange.png",
      description:
        "Surrounded by family and friends, they vowed forever. Tears, laughter, and a dance to remember.",
      date: "June 3, 2024",
    },
  ];

  return data;
}
