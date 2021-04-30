

export default function Likes(props){


    return(
        <div class="curtido">
            <a href={props.link}><img src={props.image}/></a>
            <p>Curtido por <a href={props.link}>{props.name}</a> e <a href="#">outras {props.howMany} pessoas</a></p>
        </div>
    )
}
