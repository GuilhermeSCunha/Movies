import { Outside, InsideBoll } from './style';

function Switch (props) {

    const { onClick,   isChecked } = props;

    const side = isChecked ? "flex-end" : "flex-start";
    const Background = isChecked ? "#71b404" : "#aeb1aa";
    const shadowSide = isChecked ? "-3px" : "3px" ;

    return (

        <Outside onClick = {onClick} style = {{

            justifyContent: side,
            backgroundColor: Background,
        
        }}>

            <InsideBoll style = {{boxShadow: ` ${shadowSide} 0px rgba(0, 0, 0, 0.2)`}}>

            </InsideBoll>

        </Outside>

    );

}

export default Switch;