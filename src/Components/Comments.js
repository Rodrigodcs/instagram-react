

export default function Comments(props){

    return(
        <div class={"c"+props.index}>
            <p><a href={props.link}>{props.name}</a> {props.comments} </p>
            <a href="#"><ion-icon name="heart-outline"></ion-icon></a>
        </div>
    )
}
