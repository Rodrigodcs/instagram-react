import Likes from "./Likes"
import Comments from "./Comments"


export default function Post(props){

    const postsFromServer =[

        {postIndex:0, name:"bad.vibes.memes" ,image:"Imagens/badvibesmemes 1.png" ,link:"#", postImage:"Imagens/164642190_2508516702778562_7568091999511987535_n.jpg", postedComment:"Soldado abatido!",postTime:"2", numberOfComments:"106",
        comments:[{index:"1", from:"leandrodcs",link:"#",comment:"arece Dark Souls!!!"},{index:"2", from:"bettle.juice",link:"#",comment:" It happens a lot, but sometimes, it never happens. Nothing wrong with that!"}], 
        likes:{from:"responde ai", link:"#",image:"Imagens/respondeai 2.png",howMany:"1.235"}},

        {postIndex:1, name:"barked" ,image:"Imagens/barked 2.png" ,link:"#", postImage:"Imagens/urso.jpg", postedComment:" Peacefull!!!",postTime:"13", numberOfComments:"325",
        comments:[{index:"1", from:"sean",link:"#",comment:"hey Lester, isn't that cute?"},{index:"2", from:"bettle.juice",link:"#",comment:"Are you nuts!!!"}], 
        likes:{from:"responde ai", link:"#",image:"Imagens/respondeai 2.png",howMany:"1.692"}},

        {postIndex:2, name:"meowed" ,image:"Imagens/meowed 2.png" ,link:"#", postImage:"Imagens/gato-telefone 1.png", postedComment:"Olha que bonitinho!",postTime:"6", numberOfComments:"654",
        comments:[{index:"1", from:"julianaisnts",link:"#",comment:"que fofinho!!!"},{index:"2", from:"sean",link:"#",comment:"check this out!!!!"}], 
        likes:{from:"responde ai", link:"#",image:"Imagens/respondeai 2.png",howMany:"10.963"}}
    ]

    return(
        <>
            <div class="post">
                <div class="post-header">
                    <div class="nome-post">
                        <a href={props.link}><img src={props.image}/></a>
                        <a href={props.link}><h1>{props.name}</h1></a>
                    </div>
                    <a href="#"><ion-icon name="ellipsis-horizontal"></ion-icon></a>
                    </div>
                        <img src={props.postImage}/>
                    <div class="abaixo">
                        <div class="image-icons">
                            <div class="icon">
                                <a href="#"><ion-icon name="heart-outline"></ion-icon></a>
                                <a href="#"><ion-icon name="chatbubble-outline"></ion-icon></a>
                                <a href="#"><ion-icon name="paper-plane-outline"></ion-icon></a>
                            </div>
                        <a href="#"><ion-icon name="bookmark-outline"></ion-icon></a>
                    </div>
                    <Likes name={postsFromServer[props.index].likes.from} image={postsFromServer[props.index].likes.image} link={postsFromServer[props.index].likes.link} howMany={postsFromServer[props.index].likes.howMany}/>
                    <div class="descricao">
                        <p><a href={props.link}>{props.name}</a> {props.postedComment}</p>
                    </div>
                    <div class="ver-todos">
                        <p><a href="#">Ver todos os {props.numberOfComments} comentários</a></p>
                    </div>
                    <div class="comentarios">
                        {postsFromServer[props.index].comments.map(c=> <Comments name={c.from} link={c.link} comments={c.comment} index={c.index}/>)}
                    </div>
                    <div class="time">
                        <p>HÁ {props.postTime} HORAS</p>
                    </div>
                </div>
                <div class="comentario">
                    <a href="#"><ion-icon name="happy-outline"></ion-icon></a>
                    <input class="comentar" type="comentar" placeholder="Adicione um comentário..."/>
                    <a href="#"><button>Publicar</button></a>
                </div>
            </div>
            <div class="spacer-post"></div>
        </>
    )
}



