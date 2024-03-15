import React, { useState,useContext,useEffect } from "react";
import "../Styles/Categories.css";
import { Link, useNavigate } from "react-router-dom";
import Poultry from "./Poultry";

const Categories = () => {
  const navigate = useNavigate();
  const [clicking, setIsClicking] = useState("");

  const dairyHandler = () => {
    navigate("/dairy");
    window.scrollTo({
      top: 0,
      behavior: 'auto',
    });
  };

  const allPoultryProductHandler = () => {
    navigate("/poultry");
    window.scrollTo({
      top: 0,
      behavior: 'auto',
    });
  };

  const allCategoriesHandler = () => {
    navigate("/allcategories");
    window.scrollTo({
      top: 0,
      behavior: 'auto',
    });
  };

  const ProductFilterHandler = (e) => {
    setIsClicking(e.target.id);
    console.log("e.target.id", e.target.id);
    console.log("eggs", e.target.id);
    navigate("/poultry", { state: { productType: e.target.id } });
    window.scrollTo(0,0);
  };

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  return (
    <div>
      <div className="categories-wrapper">
        <div className="categories-div">
          <div className="products-div">
            <p className="head-margin-div">Dairy</p>
            <p className="margin-div">Milk</p>
            <p className="margin-div">Butter</p>
            <p className="margin-div">Cheese</p>
            <p className="view-all-div" onClick={dairyHandler}>
              View all
            </p>
          </div>
          <div className="products-div">
            <p className="head-margin-div">Poultry</p>
            <p className="margin-div" onClick={ProductFilterHandler} id="Eggs">
              Eggs
            </p>
            <p
              className="margin-div"
              onClick={ProductFilterHandler}
              id="Chicken"
            >
              Chicken
            </p>
            <p className="margin-div">Turkey</p>
            <p className="view-all-div" onClick={ProductFilterHandler}>
              View all
            </p>
          </div>
          <div className="products-div">
            <p className="head-margin-div">Sea Food</p>
            <p className="margin-div">Shrimps</p>
            <p className="margin-div">Fish</p>
            <p className="margin-div">Lobster</p>
            <p className="view-all-div">View all</p>
          </div>
          <div className="products-div">
            <p className="head-margin-div">Vegetables</p>
            <p className="margin-div">Leafy</p>
            <p className="margin-div">Roots</p>
            <p className="margin-div">Seasoning</p>
            <p className="view-all-div">View all</p>
          </div>
          <div className="products-div">
            <p className="head-margin-div">Fresh Fruits</p>
            <p className="margin-div">Apples</p>
            <p className="margin-div">Citrus</p>
            <p className="margin-div">Exotic</p>
            <p className="view-all-div">View all</p>
          </div>
          <div className="products-div">
            <p className="head-margin-div">Flowers</p>
            <p className="margin-div">Roses</p>
            <p className="margin-div">Blue and Blush</p>
            <p className="margin-div">Festive</p>
            <p className="view-all-div">View all</p>
          </div>
        </div>
        <button className="view-all-categories" onClick={allCategoriesHandler}>
          View All Categories
        </button>
      </div>
    </div>
  );
};

export default Categories;
