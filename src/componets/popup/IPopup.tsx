export default interface IPopupProduct {
  title: string;
  showPopup: boolean;
  closePopup: () => void;
  imageUrl: string[];
  description: string;
  price: number;
}
