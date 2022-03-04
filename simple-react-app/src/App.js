import './App.css';

function App() {
  return (
    <>
      <p>Local image</p>
      <img src="big_picture.jpg" style={{ width: "200px" }} alt="hello" />
      <br />
      <p>Hosted image</p>
      <img src="https://res.cloudinary.com/ddkcynmus/image/upload/q_40/v1646322954/pexels-skyler-sion-9808219_byhpb6_q9jrto.jpg" style={{ width: "200px" }} alt="hello" />
    </>
  );
}

export default App;
