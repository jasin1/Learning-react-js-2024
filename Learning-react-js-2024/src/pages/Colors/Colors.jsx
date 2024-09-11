import { useEffect, useState } from 'react';
import './colors.css';

function Colors(){
  const [color, setColor] = useState("");
  const [answers, setAnswers] = useState([]);
  const [isWrongSelect, setIsWrongSelect] = useState(false);

  
  function getRandomHexColor(){
    const hexChars = '0123456789ABCDEF';
    let color = '#';
    
    for (let i = 0; i < 6; i++){
      const randomIndex = Math.floor(Math.random() * hexChars.length);
      color += hexChars[randomIndex];
    }
    return color;
  }

  useEffect(() =>{
    const randomColor = getRandomHexColor();
    setColor(randomColor);
    setAnswers([randomColor, getRandomHexColor(), getRandomHexColor()].sort(
      () => 0.5 - Math.random()
    ));

    console.log("Random color is: ", randomColor);
   
  },[])

  function handleAnswerClicked(answer){
    if(answer === color){
        console.log("right color guessed");
        setIsWrongSelect(false);
    }else{
      console.log("wrong color guessed");
      setIsWrongSelect(true);

    }

  }
  
  return(
    <main>
      <h1>Guess the color code</h1>
      <div className="colors-wrapper">
        <div className="colors-view" style={{background: color}}></div>
        <div className="btns-wrapper">
          {answers.map((answer) =>(
            <button onClick={()=> handleAnswerClicked(answer)} key={answer}>{answer}</button>
          ))}

        </div>
        <div className="answer">
          {isWrongSelect && <h2 className='wrong'>Wrong!</h2>}
        </div>

      </div>
    </main>
  );
}

export default Colors;