import Sugestao from "./Sugestao"

export default function Sugestoes(){

    const sugestoesDoServidor = [
        {name:"bad.vibes.memes",image:"Imagens/badvibesmemes 1.png" ,link:"#" ,seguidor:false ,novo:false },
        {name:"chibirdart" ,image:"Imagens/chibirdart 1.png" ,link:"#" ,seguidor:false ,novo:false},
        {name:"razoresparaacreditar" ,image:"Imagens/razoesparaacreditar 1.png" ,link:"#" ,seguidor:false ,novo:false},
        {name:"adorable_animals" ,image:"Imagens/adorableanimals 1.png" ,link:"#" ,seguidor:false ,novo:false},
        {name:"smallcutecats" ,image: "Imagens/smallcutecats 1.png",link:"#" ,seguidor:false ,novo:false}]

    return(
    <div class="sugestoes">
        <div class="indice">
            <h2 class="cor2 w500">Sugestões para você</h2>
            <a href="#"><h2 class="cor1 w500">Ver tudo</h2></a>
        </div>
        {sugestoesDoServidor.map(s => <Sugestao name={s.name} image={s.image} link={s.link} seguidor={s.seguidor} novo={s.novo}/>)}
    </div>
    )
}



