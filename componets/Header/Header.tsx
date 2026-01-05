import Link from 'next/link';
import css from './Header.module.css';

const Header = () => {
  return (
    <div>
      <header className={css.header}>
        <div className="container">
          <div className={css.headerContainer}>
            <a href="/" className={css.logo}>
              <svg width="136" height="15" aria-hidden="true">
                <use href="/sprite.svg#TravelTrucks"></use>
              </svg>
            </a>
            <nav className={css.nav}>
              <Link href="/" prefetch={false} className={css.navLink}>
                Home
              </Link>
              <Link href="/catalog" prefetch={false} className={css.navLink}>
                Catalog
              </Link>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
