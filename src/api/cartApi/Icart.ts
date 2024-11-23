export default interface Icart {
  id: number;
  parentId: number;
  title: string;
  imageUrl: string;
  size: string;
  price: number;
  typeDough: string;
  count: number;
  ingredients?: string[];
}
