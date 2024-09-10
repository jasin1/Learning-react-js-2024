import './colors.css';

function Colors(){
  return(
    <main>
      <h1>Guess the color code</h1>
      <div className="colors-wrapper">
        <div className="colors-view"></div>
        <div className="btns-wrapper">
          <button>hex</button>
          <button>hex</button>
          <button>hex</button>
        </div>

      </div>
    </main>
  );
}

export default Colors;