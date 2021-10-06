import "./App.css";

function App() {
  return (
    <div className="ParetBox">
      <FotoPorduct />
      <ProductInfo isDiscount="true" category="Ramadhan" name="All star 2" />
      <div className="Review-box">
        <h2>Reviews</h2>
        <div className="Item">
          <img src="logo192.png" width="50" />
          <h1>Lorem ipsum</h1>
          <p>Lorem ipsum dolor sit amet</p>
        </div>
      </div>
    </div>
  );
}

function ReviewItems() {
  // Siapkan data
  const users = [
    {id: 1, name: "Rijal bin Husen", review: "Lorem ipsum dolor sit amet"},
    {id: 2, name: "Husen", review: "Lorem ipsum dolor sit amet"},
    {id: 3, name: "Rijal", review: "Lorem ipsum dolor sit amet"},
    {id: 4, name: "Abu rijal", review: "Lorem ipsum dolor sit amet"}
  ]
}

function FotoPorduct() {
  return (
    <div className="Foto">
      <img src="sneakers.jpeg" alt="sneakers" />
    </div>
  );
}

function ProductInfo(props) {
  const {category, name, isDiscount} = props;
  const benefit = ["Tidak kusut terkena air", "Tidak seperti ini", "Tidak seperti itu"];
  const listBenefits = benefit.map((value) => <li>{value}</li>)

  return (
    <div class="Deskripsi">
      <p className="Category">{category}</p>
      <p className="Title">{name}</p>
      <p className="Price">IDR 7.893.121</p>
      <CheckDiscount isDiscount={isDiscount} />
      <p className="Info">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s
      </p>
      <ul>
        <li>{listBenefits}</li>
      </ul>
      <a onClick={ (e) => TambahCart(name, e) } href="#"> Tambah cart</a>
    </div>
  );
}

function TambahCart(e) {
  // dont forget semicolon
  return console.log("Membeli product " + e);
}

function CheckDiscount(props) {
  const { isDiscount } = props
  if(isDiscount == "true") {
    return (
        <p>Discount 50% off</p>
      );
  }
  else {
    return (
      <p>Discount not availbale yet</p>
    );
  }
}

export default App;
