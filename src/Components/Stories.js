import Storie from "./Storie"

export default function Stories(){
    
    const storiesListFromServer =[
        {name:"9gag" ,image:"Imagens/9gag.png" ,link:"#"},
        {name:"meowed" ,image:"Imagens/meowed 1.png" ,link:"#"},
        {name:"barked" ,image:"Imagens/barked 1.png" ,link:"#"},
        {name:"nathanwpylestrangeplanet" ,image:"Imagens/nathanwpylestrangeplanet 1.png" ,link:"#"},
        {name:"wawawiwacomicsa" ,image:"Imagens/wawawiwacomicsa 1.png" ,link:"#"},
        {name:"respondeai" ,image:"Imagens/respondeai 1.png" ,link:"#"},
        {name:"filomoderna" ,image:"Imagens/filomoderna 1.png" ,link:"#"},
        {name:"memeriagourmet" ,image:"Imagens/memeriagourmet 1.png" ,link:"#"},
        {name:"9gagdenovo" ,image:"Imagens/9gag.png" ,link:"#"}
    ]
    
    return(
        <div class="stories-box">
            <div class="vector">
                <a href="#">
                    <img src="Imagens/Vector.png"/>
                </a>
            </div>
            <div class="padding-inicial"></div>
            {storiesListFromServer.map(s => <Storie name={s.name} image={s.image} link={s.link}/>)} 
            <div class="padding-final"></div>
        </div>
    );
}





