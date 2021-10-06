import "./App.css";
import ReviewItems from "./components/Reviews";
import propTypes from "prop-types";
function App() {
  return (
    <div className="ParetBox">
      <FotoPorduct />
      <ProductInfo discount={50} category="Ramadhan" name="All star 2" />
      <div className="Review-box">
        <h2>Reviews</h2>
        <ReviewItems />
      </div>
    </div>
  );
}

function FotoPorduct() {
  return (
    <div className="Foto">
      <img src="sneakers.jpeg" alt="sneakers" />
    </div>
  );
}

function ProductInfo(props) {
  const { category, name, discount } = props;
  const benefit = [
    "Tidak kusut terkena air",
    "Tidak seperti ini",
    "Tidak seperti itu",
  ];
  const listBenefits = benefit.map((value, id) => <li key={id}>{value}</li>);

  return (
    <div className="Deskripsi">
      <p className="Category">{category}</p>
      <p className="Title">{name}</p>
      <p className="Price">IDR 7.893.121</p>
      <CheckDiscount discount={discount} />
      <p className="Info">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s
      </p>
      <ul>{listBenefits}</ul>
      <a onClick={(e) => TambahCart(name, e)} href="#test">
        Tambah cart
      </a>
    </div>
  );
}

function TambahCart(e) {
  // dont forget semicolon
  return console.log("Membeli product " + e);
}

function CheckDiscount(props) {
  const { discount } = props;
  if (discount) {
    return <p>Discount {discount}% off</p>;
  } else {
    return <p>Discount not availbale yet</p>;
  }
}

CheckDiscount.propTypes = {
  discount: propTypes.number.isRequired,
};

export default App;
