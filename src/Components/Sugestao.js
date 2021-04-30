

export default function Sugestao(props){
    return (   
        <div class="sugestao">
            <a href={props.link}><img src={props.image}/></a>
            <div class="seguir">
                <div class="status">
                    <a href={props.link}><h1 class="w500 cor1">{props.name}</h1></a>
                    <h2 class="w400 cor2">{props.seguidor?"Segue vocẽ":props.novo? "Novo no instagram":"Não segue vocẽ"}</h2>
                </div>
                <a href={props.link}><h1 class="seguir-link">Seguir</h1></a>
            </div>
        </div>
    );
}




