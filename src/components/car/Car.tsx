import { useParams } from "@solidjs/router";
import { Component, createMemo, createSignal } from "solid-js";
import styles from "./Car.module.css";

const Car: Component = () => {
  const params = useParams();

  interface ICar {
    id: number;
    name: string;
    shortDescription: string;
    year: number;
    kilometer: number;
    price: number;
    isManual: boolean;
    isGasoil: boolean;
    images: Array<string>;
  }

  const cars = createMemo(() => [
    {
      id: 1,
      name: "Peugeot Partner Fourgon",
      shortDescription: "STANDARD 650 KG BLUEHDI 75 BVM5 PREMIUM",
      year: 2019,
      kilometer: 10671,
      price: 19990,
      isManual: true,
      isGasoil: true,
      images: ["berlingo1.avif", "berlingo2.avif", "berlingo3.avif"],
    },
    {
      id: 2,
      name: "Mercedes-Benz classe B",
      shortDescription: "180 D 7G-DCT STYLE LINE EDITION",
      year: 2020,
      kilometer: 61604,
      price: 25990,
      isManual: false,
      isGasoil: true,
      images: ["mercedes1.avif", "mercedes2.avif", "mercedes3.avif"],
    },
    {
      id: 3,
      name: "Audi A1 Sportback Business",
      shortDescription: "A1 SPORTBACK 1.4 TFSI 122 BUSINESS LINE",
      year: 2014,
      kilometer: 114088,
      price: 13990,
      isManual: false,
      isGasoil: false,
      images: ["audi1.avif", "audi2.avif", "audi3.avif"],
    },
  ]);

  /* 👇 Display the correct car with params */
  const [car] = createSignal(
    cars().find((car: ICar) => car.id === parseInt(params.id))
  );

  if (!car()) {
    return (
      <h1
        style={{
          display: "flex",
          "justify-content": "center",
          height: "75vh",
          "align-items": "center",
          "margin-top": "-100px",
        }}
      >
        Aucun véhicule trouvé 🤷‍♂️
      </h1>
    );
  }

  return (
    <div class={styles.car}>
      <section>
        {/* TODO 🛠️: Use a optimized carousel to display all images WITH LAZY LOADING!! */}
        <img
          src={`/src/assets/cars/${car()?.images[0]}`}
          alt={car()?.name}
          class={styles.carImage}
        />
        <article class={styles.carDetails}>
          <h1>{car()?.name}</h1>

          <p style={{ "font-size": "0.9em" }}>{car()?.shortDescription}</p>
          <p>
            {car()?.year} | {car()?.kilometer}km
          </p>
          <p class={styles.carPrice}>{car()?.price}€</p>
        </article>
      </section>
    </div>
  );
};

export default Car;
