export interface CardData {
  category: string;
  title: string;
  description: string;
  likes: number;
  comments: number;
}

const cardData: CardData[] = [
  {
    category: "Category 1",
    title: "Raclette Blueberry Nextious Level",
    description:
      "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
    likes: 1200,
    comments: 6,
  },
  {
    category: "Category 2",
    title: "Ennui Snackwave Thundercats",
    description:
      "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
    likes: 800,
    comments: 4,
  },
  {
    category: "Category 3",
    title: "Selvage Poke Waistcoat Godard",
    description:
      "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
    likes: 1500,
    comments: 8,
  },
  {
    category: "Category 3",
    title: "Selvage Poke Waistcoat Godard",
    description:
      "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
    likes: 1500,
    comments: 8,
  },
  // Add more card data objects as needed
];

export default cardData;
