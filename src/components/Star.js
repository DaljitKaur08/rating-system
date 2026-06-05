//Star Component shows a single star icon 
import {FaStar} from 'react-icons/fa';
function Star(props){
    return (
        <FaStar
        onClick={props.onClick}
        color={props.color}
        size={40}
        />
    )
}
export default Star;