const b1={
  picUrl: https://m.media-amazon.com/images/I/518+W2zr3BL._AC_UY436_QL65_.jpg
  bname: "react design pattern",
  price:2000,
  quantity:2,
  rating:4.8,
};
function Book() {
    return (
        <div>
          <img src="https://m.media-amazon.com/images/I/518+W2zr3BL._AC_UY436_QL65_.jpg"
          alt="design pattern react js"/>
            <h1>Lets Us react</h1>
            <h2>price:765.00</h2>
            <h3>Quantity:5</h3>
            <h4>Rating:5.0</h4>
        </div>
    );
}

export default function App() {
    return (
        <>
            <Book/>
            <h1>hello react</h1>
            <Book />
            <Book />
            <Book />
        </>
    );
}