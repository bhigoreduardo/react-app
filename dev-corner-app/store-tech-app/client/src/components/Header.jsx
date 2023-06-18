import { Link, NavLink } from "react-router-dom";
import { BsSearch } from "react-icons/bs";

const Header = () => {
  return (
    <header>
      <div className="header-top py-3">
        <div className="container-xxl mx-auto">
          <div className="row text-white">
            <p className="col-md-6 col-12 text-md-start text-center mb-0">
              Frete grátis em compras acima de R$100
            </p>

            <p className="col-md-6 col-12 text-md-end text-center mb-0">
              WhatsApp:&nbsp;
              <a className="text-white" href="tel:(11) 9 9999-9999">
                (11) 9 9999-9999
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="header-middle py-3">
        <div className="container-xxl mx-auto">
          <div className="row align-items-center justify-content-between gap-2">
            <Link className="col-1 d-none d-lg-block text-white">Início</Link>

            <div className="col-sm-5 d-flex align-items-center gap-2 search">
              <input type="text" placeholder="Pesquisar..." className="form-control py-2" />
              <BsSearch className="fs-6" />
            </div>

            <div className="col-lg-5 col-sm-6 d-flex align-items-center justify-content-between links">
              <Link to="/compare-product" className="d-flex align-items-center gap-1 text-white">
                <img src="/icons/compare.svg" alt="compare" />
                <p className="mb-0">Comparar<br />produtos</p>
              </Link>

              <Link to="/wishlist" className="d-flex align-items-center gap-1 text-white">
                <img src="/icons/wishlist.svg" alt="wishlist" />
                <p className="mb-0">Favoritos</p>
              </Link>

              <Link to="/login" className="d-flex align-items-center gap-1 text-white">
                <img src="/icons/user.svg" alt="user" />
                <p className="mb-0">Conta</p>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="header-bottom py-3">
        <div className="container-xxl mx-auto">
          <div className="d-flex align-items-center gap-3">
            <div className="dropdown">
              <button type="button" data-bs-toggle="dropdown" id="shopCategories" aria-expanded="false" className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-1 d-flex align-items-center">
                <img src="/icons/menu.svg" alt="Categorias" />
                <span className="me-5 d-inline-block">Categorias</span>
              </button>

              <div className="dropdown-menu" aria-labelledby="shopCategories">
                <Link className="dropdown-item text-white" to="">Apple</Link>
                <Link className="dropdown-item text-white" to="">Samsung</Link>
                <Link className="dropdown-item text-white" to="">Smart Watch</Link>
              </div>
            </div>

            <div className="d-sm-flex d-none align-items-center gap-2 links">
              <NavLink to="/">Início</NavLink>
              <NavLink to="/produtos">Loja</NavLink>
              <NavLink to="/blogs">Blogs</NavLink>
              <NavLink to="/contacto">Contacto</NavLink>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
