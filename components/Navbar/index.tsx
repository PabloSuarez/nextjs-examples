import Link from "next/link";
import style from './style.module.css';

const NavBar = () => (
    <header className={style.header}>
        <nav>
            <Link href="/">HOME</Link>
            <Link href="/example-server-side-rendering">SSR</Link>
            <Link href="/example-client-side-rendering">CSR</Link>
            <Link href="/example-static-generation-with-data">STATIC</Link>
        </nav>
    </header>
);

export default NavBar;