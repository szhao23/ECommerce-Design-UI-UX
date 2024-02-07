// components/Navbar.tsx
import Link from "next/link";
import styles from "../styles/Navbar.module.css";

const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        {/* Add more navigation items as needed */}
      </ul>
    </nav>
  );
};

export default Navbar;
