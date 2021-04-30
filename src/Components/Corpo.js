import Stories from "./Stories"
import Posts from "./Posts"

export default function Corpo(){
    return (
        <div class="corpo">
            <div class="conteudo">
                <div class="principal">
                <Stories/>
                <div class="spacer-stories"></div>
                <Posts/>
                <div class="spacer-rodape"></div>
                </div>
            </div>
        </div>
    );
}