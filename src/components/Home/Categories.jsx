import React from "react";
import CategoriesCard from "./CategoriesCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShirt } from "@fortawesome/free-solid-svg-icons"; // Import other icons you need
import { Link, NavLink } from "react-router-dom";
import ViewAll from "./ViewAll";

const Categories = () => {
  const categories = [
    {
      label: "Jacket",
      icon: <FontAwesomeIcon icon={faShirt} size="6x" className="w-full" />,
      backgroundColor: "#e0e7ff",
      link: "/categories/jacket",
    },
    {
      label: "Shirt",
      icon: <FontAwesomeIcon icon={faShirt} size="6x" className="w-full" />,
      backgroundColor: "#f3f4f6",
      link: "/categories/shirt",
    },
    {
      label: "Pants",
      icon: <FontAwesomeIcon icon={faShirt} size="6x" className="w-full" />,
      backgroundColor: "#e0f7fa",
      link: "/categories/pants",
    },
    {
      label: "Shoes",
      icon: <FontAwesomeIcon icon={faShirt} size="6x" className="w-full" />,
      backgroundColor: "#e0f7fa",
      link: "/categories/shoes",
    },

    // Add more categories here
  ];

  return (
    <div className="mt-[102px] flex flex-col items-center self-stretch">
      <div className="max-w-7xl mx-auto flex w-full flex-col gap-5 lg:px-1 md:px-5">
        <div className="flex flex-wrap items-start justify-between gap-5">
          <h2 className="sm:text-[28px] md:text-[30px] lg:text-[30px] text-[36px] self-start font-bold text-gray-800 font-poppins">
            Categories
          </h2>
          <ViewAll path={"/Categories"} />
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-center w-full">
          {/* List container with spacing */}
          {categories.map((category, index) => (
            <Link to={category.link}>
              <li key={index}>
                <CategoriesCard
                  backgroundColor={category.backgroundColor}
                  icon={category.icon}
                  width="100%"
                  label={category.label}
                />
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Categories;
