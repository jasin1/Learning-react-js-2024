import './Button.css'
import PropTypes from 'prop-types';


const Button =({text, onClick, className}) =>{
  return(
    <button className={className} onClick={onClick}>
      {text}
    </button>

  );

};

Button.propTypes ={
  text: PropTypes.string.isRequired,
  onClick:PropTypes.func,
  className: PropTypes.string,
}

export default Button;

