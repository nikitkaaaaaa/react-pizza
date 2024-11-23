export default interface IPopupProduct {
  id: number;
  title: string;
  showPopup: boolean;
  closePopup: () => void;
  imageUrl: string[];
  description: string;
  price: number;
}
