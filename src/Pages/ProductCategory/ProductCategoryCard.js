import React from "react";
import { Link } from "react-router-dom";

const ProductCategoryCard = ({product}) => { 
    const {_id,img, categoryTitle, category} = product;
  return (
    <Link to={`/category/${_id}`}>
    <div className="p-4 shadow-lg rounded-lg text-center">
      <img src={img} className="w-32 mx-auto" alt="" />
      <h4 className="text-xl mt-4">{categoryTitle}</h4>
    </div>
    </Link>
  );
};

export default ProductCategoryCard;
