import React from "react";
import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover/Cover";
import menuImg from "../../assets/menu/banner3.jpg";
import dessertImg from "../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../assets/menu/pizza-bg.jpg";
import saladImg from "../../assets/menu/salad-bg.jpg";
import soupImg from "../../assets/menu/soup-bg.jpg";
import PopularMenu from "../Home/PopularMenu/PopularMenu";
import useMenu from "../../hooks/useMenu";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import MenuCategory from "./MenuCategory";
import MenuItem from "../Shared/MenuItem/MenuItem";

const Menu = () => {
  const [menu] = useMenu();
  const desserts = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover img={menuImg} title={"Our menu"}></Cover>

      {/* main cover */}
      <SectionTitle
        subHeading={"Dont't miss"}
        heading={"Today's offer"}
      ></SectionTitle>
      {/* offered menu items*/}
      <MenuCategory items={offered}></MenuCategory>
      {/* desserts menu items */}
      <MenuCategory
        items={desserts}
        title={"desserts"}
        img={dessertImg}
      ></MenuCategory>
      {/* pizza items */}
      <MenuCategory items={pizza} title={"pizza"} img={pizzaImg}></MenuCategory>
      {/* salad items */}
      <MenuCategory items={salad} title={"salad"} img={saladImg}></MenuCategory>
      {/* soup items */}
      <MenuCategory items={pizza} title={"soup"} img={soupImg}></MenuCategory>
    </div>
  );
};

export default Menu;
