import "./styles.css";
import Logo from "../../assets/images/logo.png";

const Header: React.FC = () => {
  return (
    <header id='header-menu'>
      <div className='wrapper'>
        <a href='/'>
          <img className='logo' src={Logo} alt='Logo Spotify' />
        </a>
        <nav>
          <ul>
            <li>
              <a href=''>Premium</a>
            </li>
            <li>
              <a href=''>Suporte</a>
            </li>
            <li>
              <a href=''>Baixar</a>
            </li>
            <li role='separator' className='divisor'></li>
            <li>
              <a href=''>Inscrever-se</a>
            </li>
            <li>
              <a href=''>Entrar</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
