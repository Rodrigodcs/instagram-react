import Post from "./Post"

export default function Posts(){
    
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
            {postsFromServer.map(p=> <Post index={p.postIndex} name={p.name} image={p.image} link={p.link} postImage={p.postImage} postedComment={p.postedComment} postTime={p.postTime} numberOfComments={p.numberOfComments} />)}
        </>
    );
}