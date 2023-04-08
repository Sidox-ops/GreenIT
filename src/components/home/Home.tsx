import type { Component } from "solid-js";
import styles from "./Home.module.css";
import banner from "../../assets/images/home-banner.webp";
import carOne from "../../assets/images/popular-car-one.avif";

const Home: Component = () => {
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <span class={styles.bannerTitle}>CONCESSIONNAIRE AUTOMOBILE</span>
        <span class={styles.bannerSubTitle1}>Offres de voitures neuves ou d'occasions</span>
        <span class={styles.bannerSubTitle2}>Rachat de vos véhicules</span>
        <span class={styles.bannerBtn}>
          <span>Voir les offres</span>
        </span>
        <picture>
          <source class={styles.bannerImg} srcset={banner} media="(min-width: 800px)"></source>
          <source class={styles.bannerImg} srcset={banner} media="(min-width: 600px)"></source>
          <img class={styles.bannerImg} src={banner} alt="MDN" />
        </picture>
      </header>
      <div class={styles.popularCarSection}>
        <h2 class={styles.popularCarTitle}>Les occasions les plus populaires</h2>
        <div class={styles.container}>
          <a class={styles.popularCar} href='/car/1'>
            <picture>
              <img src={carOne} alt="1e voiture populaire" />
            </picture>
            <p class={styles.popularCarName}>Citroën C5 Aircross</p>
            <span class={styles.popularCarOption}> bluehdi 180 s&amp;s eat8 Shine</span>
          </a>
          <a class={styles.popularCar} href='/car/2'>
            <picture>
              <img src={carOne} alt="2e voiture populaire" />
            </picture>
            <p class={styles.popularCarName}>Citroën C5 Aircross</p>
            <span class={styles.popularCarOption}> bluehdi 180 s&amp;s eat8 Shine</span>
          </a>
          <a class={styles.popularCar} href='/car/3'>
            <picture>
              <img src={carOne} alt="3e voiture populaire" />
            </picture>
            <p class={styles.popularCarName}>Citroën C5 Aircross</p>
            <span class={styles.popularCarOption}> bluehdi 180 s&amp;s eat8 Shine</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;