import logo from "../../assets/img/logo.svg";
import './styles.css';

function Header() {
    return (
        <header>
            <div className="dsmeta-logo-container">
                <img src={logo} alt="DSMeta" />
                <h1>Alpha Sales</h1>
                <h1>Índices de Vendas</h1>
                <p>By André Luis &copy; Septiembre 2022 - Initial Version </p>
                <a href="https://github.com/Andrelfran73" target="_blank">GitHub.com</a>
                <a href="https://www.linkedin.com/in/andr%C3%A9-luis-francisco-a76ab832/" target="_blank">Linkedin.com </a>
            </div>
        </header >
    )
}
export default Header;