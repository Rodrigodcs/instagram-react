import Icons from "./Icons"


export default function Header(){
    return (
        <div class="header">
            <div class="header-content">
                <div class="logo-web">
                    <Icons name="logo-instagram" link="#"/>
                </div>
                <div class="separador"></div>
                <div class="logo-busca-icones">
                    <div class="logo-mobile">
                        <Icons name="logo-instagram" link="#"/>
                    </div>
                    <a href="#"><img class="logo" src="Imagens/logo.png"/></a>
                    <div class="pesquisa">
                        <input class="pesquisar" type="pesquisar" placeholder="Pesquisar"/>
                    </div>
                    <div class="icones">
                        <div class="novo">
                            <Icons name="paper-plane-outline" link="#"/>
                            <Icons name="compass-outline" link="#"/>
                            <Icons name="heart-outline" link="#"/>
                            <Icons name="person-outline" link="#"/>
                        </div>
                    </div>
                    <div class="icone-mobile">
                        <div class="novo">
                            <Icons name="paper-plane-outline" link="#"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}