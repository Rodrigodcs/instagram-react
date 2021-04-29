




export default function Header(){
    return (
        <div class="header">
            <div class="header-content">
                <div class="logo-web">
                    <a href="#"><ion-icon name="logo-instagram"></ion-icon></a>
                </div>
                <div class="separador"></div>
                <div class="logo-busca-icones">
                    <div class="logo-mobile">
                        <a href="#"><ion-icon name="logo-instagram"></ion-icon></a>
                    </div>
                    <a href="#"><img class="logo" src="Imagens/logo.png"/></a>
                    <div class="pesquisa">
                        <input class="pesquisar" type="pesquisar" placeholder="Pesquisar">
                    </div>
                    <div class="icones">
                        <div class="novo">
                        <a href="#"><ion-icon name="paper-plane-outline"></ion-icon></a>
                        <div class="circle">3</div>
                        </div>
                        <a href="#"><ion-icon name="compass-outline"></ion-icon></a>
                        <a href="#"><ion-icon name="heart-outline"></ion-icon></a>
                        <a href="#"><ion-icon name="person-outline"></ion-icon></a>
                    </div>
                    <div class="icone-mobile">
                        <div class="novo">
                        <a href="#"><ion-icon name="paper-plane-outline"></ion-icon></a>
                        <div class="circle">3</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}