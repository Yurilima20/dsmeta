import imagem from '../../assets/img/logo.svg'
import './styles.css'
function Header() {
    return (
        <>
            <header>
                <div className="dsmeta-logo-container">
                    <img src={imagem} alt="DSmeta"/>
                        <h1>Dsmeta</h1>
                        <p>Desenvolvido por <a href="https://www.linkedin.com/in/yuri-gon%C3%A7alves-lima-4b2b121aa/"> @YuriLima</a>
                        </p>
                </div>
            </header>
        </>
    )

}

export default Header