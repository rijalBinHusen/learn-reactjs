import "./App.css";

function App() {
  return (
    <div className="ParetBox">
      <FotoPorduct />
      <ProductInfo category="Ramadhan" name="All star 2" />
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
  const {category, name} = props
  const price = 7893121;

  return (
    <div class="Deskripsi">
      <p className="Category">{category}</p>
      <p className="Title">{name}</p>
      <p className="Price">IDR {price}</p>
      <p className="Info">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem
      </p>
    </div>
  );
}

export default App;
