import "./App.css";

function App() {

  const category = "Sneakers"
  const price = 7893121
  return (
    <div class="ParetBox">
      <div class="Foto">
        <img src="sneakers.jpeg" alt="sneakers" />
      </div>
      <div class="Deskripsi">
        <p class="Category">{category}</p>
        <p class="Title">All star</p>
        <p class="Price">IDR {price}</p>
        <p class="Info">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem
        </p>
      </div>
    </div>
  );
}

export default App;