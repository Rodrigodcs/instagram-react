import Sugestoes from "./Sugestoes"

export default function Sidebar(){
    return (
        <div class="sidebar">
            <div class="conteudo-sidebar">
                <div class="log">
                    <a href="#"><img src="Imagens/rodrigo.jpg"/></a>
                    <div class="seguir">
                        <div class="status">
                            <a href="#"><h1 class="w500 cor1">rodrigodcsee</h1></a>
                            <h2 class="w400 cor2">Rodrigo</h2>
                        </div>
                        <a href="#"><h1 class="seguir-link">Mudar</h1></a>
                    </div>
                </div>
                <Sugestoes/>
                <div class="sobre cor3 w400">
                
                    <a href="#"><h3>Sobre</h3></a><h4>•</h4><a href="#"><h3>Ajuda</h3></a><h4>•</h4>
                    <a href="#"><h3>Imprensa</h3></a><h4>•</h4><a href="#"><h3>API</h3></a><h4>•</h4>
                    <a href="#"><h3>Carreiras</h3></a><h4>•</h4><a href="#"><h3>Privacidade</h3></a><h4>•</h4>
                    <a href="#"><h3>Termos</h3></a><h4>•</h4><a href="#"><h3>Localizações</h3></a><h4>•</h4>
                    <a href="#"><h3>Contas mais relevantes</h3></a><h4>•</h4>
                    <a href="#"><h3>Hashtags</h3></a><h4>•</h4><a href="#"><h3>Idioma</h3></a>
                
                </div>
                <div class="cor3 w400 cr">
                    © 2021 INSTAGRAM DO FACEBOOK
                </div>
            </div>
        </div>
    );
}