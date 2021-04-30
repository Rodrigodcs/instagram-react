export default function Storie(props){
    return(
    <div class="stories">
        <div class="imagem-stories">
            <a href={props.link}>
                <img src={props.image}/>
            </a>
        </div>
        <a href={props.link}>
            <div class="nome-stories">
                {props.name}
            </div>
        </a>
    </div>
    );
}