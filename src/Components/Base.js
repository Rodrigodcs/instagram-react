import Icons from "./Icons"


export default function Base(){
    const iconsFromServer = [
        {name:"home", link:"#"},
        {name:"search-outline", link:"#"},
        {name:"add-circle-outline", link:"#"},
        {name:"heart-outline", link:"#"},
        {name:"person-outline", link:"#"}]
    return (
        <div class="base">
            {iconsFromServer.map(i => <Icons name={i.name} link={i.link}/>)}
        </div>
    );
}