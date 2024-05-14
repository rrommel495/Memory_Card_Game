import "./App.css";
import MainGame from "./components/MainGame";
MainGame;

function App() {
  function resetgame() {
    location.reload();
  }

  return (
    <>
      <MainGame />
      <br />
      <center>
        <button type="button" className="btn btn-primary" onClick={resetgame}>
          Reset
        </button>
      </center>
    </>
  );
}

export default App;
