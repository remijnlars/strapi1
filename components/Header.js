import Link from 'next/link';
const Header = () => {
  return (
    <header>
      <nav>
        <Link href="/">
          <span id="site-name"></span>
        </Link>

      </nav>
    </header>
  );
};

export default Header;