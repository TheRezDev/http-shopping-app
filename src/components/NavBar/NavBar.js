import React from 'react';
import styles from './navBar.module.css';
import { useProducts } from '../Providers/ProductsProvider';

const NavBar = () => {
   const products = useProducts();
   const totalItems = products.filter((p) => p.quantity > 0).length;
   return (
      <header className={styles.navBar}>
         <h2>The.rez.dev shopping</h2>
         <span>{totalItems }</span>
      </header>
   );
}

export default NavBar;
