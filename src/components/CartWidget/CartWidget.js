import cart2 from "./assets/cart2.svg";

const CartWidget = () => {
  return (
    <div>
      <img src={cart2} alt="carrito" />
      <span>0</span>
    </div>
  );
};

export default CartWidget;
