import { Button } from "./style";

const Icon = (iconString) => require(`../../assets/icons/${iconString}.png`).default;

function IconButton (props) {

    const { onClick, disable, iconName, alt } = props;

    return (

        <Button type="submit" onClick = {onClick} disabled = {disable} >
                <img src= { Icon(iconName) } alt= {alt} /> 
        </Button> 

    );

}

export default IconButton;