import { useCallback, useEffect, useState } from 'react';
import './colors.css';
import Button from '../../components/Button/Button';

function Colors(){
  const [color, setColor] = useState("");
  const [answers, setAnswers] = useState([]);
  const [isWrongSelect, setIsWrongSelect] = useState(null);

  
  
  function getRandomHexColor(){
    const hexChars = '0123456789ABCDEF';
    let color = '#';
    
    for (let i = 0; i < 6; i++){
      const randomIndex = Math.floor(Math.random() * hexChars.length);
      color += hexChars[randomIndex];
    }
    return color;
  }
  
  const pickColor = useCallback( () =>{
    const randomColor = getRandomHexColor();
    setColor(randomColor);
    setAnswers([randomColor, getRandomHexColor(), getRandomHexColor()].sort(
      () => 0.5 - Math.random()
    ));

    console.log("Random color is: ", randomColor);

  }, []);
  

  useEffect(() =>{
    pickColor();
  },[pickColor]);

  function handleAnswerClicked(answer){
    if(answer === color){
        console.log("right color guessed");
        setIsWrongSelect(true);
        pickColor();
    }else{
      console.log("wrong color guessed");
      setIsWrongSelect(false);

    }

  }
  
  return(
    <main>
      <h1>Guess the color code</h1>
      <div className="colors-wrapper">
        <div className="colors-view" style={{background: color}}></div>
        <div className="btns-wrapper">
          {answers.map((answer, index) =>(
            <button onClick={()=> handleAnswerClicked(answer)} key={`${answer}-${index}`}>{answer}</button>
          ))}

        </div>
        <div className="answer">
          {isWrongSelect === false && <h2 className='wrong'>Wrong!</h2>}
          {isWrongSelect === true && <h2 className='right'>Correct!</h2>}
        </div>

      </div>
    </main>
  );
}

export default Colors;