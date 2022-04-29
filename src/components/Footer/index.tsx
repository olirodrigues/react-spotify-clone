import "./styles.css";
import Logo from "../../assets/images/logo.png";
import Lista from "../Lista";
import IconeSocial from "../IconeSocial";

const listaEmpresa = [
  {
    nome: "Sobre",
    link: "#",
  },
  {
    nome: "Empregos",
    link: "#",
  },
  {
    nome: "For the Record",
    link: "#",
  },
];

const listaComunidades = [
  {
    nome: "Para Artistas",
    link: "#",
  },
  {
    nome: "Desenvolvedores",
    link: "#",
  },
  {
    nome: "Publicidade",
    link: "#",
  },
  {
    nome: "Investidores",
    link: "#",
  },
  {
    nome: "Fornecedores",
    link: "#",
  },
];

const listaLinks = [
  {
    nome: "Suporte",
    link: "#",
  },
  {
    nome: "Player da Web",
    link: "#",
  },
  {
    nome: "Aplicativo móvel grátis",
    link: "#",
  },
];

const Footer: React.FC = () => {
  return (
    <footer id='footer'>
      <nav>
        <a href='/' id='logo-home'>
          <img className='logo' src={Logo} alt='Logo Spotify' />
        </a>
        <div className='listas'>
          <Lista titulo='Empresa' itens={listaEmpresa} />
          <Lista titulo='Comunidades' itens={listaComunidades} />
          <Lista titulo='Links Úteis' itens={listaLinks} />
        </div>
        <div>
          <IconeSocial />
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
