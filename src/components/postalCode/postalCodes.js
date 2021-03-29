import React from "react";

import PostalCodeCard from "../card/card";
import classes from "./postalCodes.module.css";

const PostalCodes = ({ list }) => {
  let cards = <h3>Cargando...</h3>;

  if (list.length > 0) {
    cards = list.map((m, i) => <PostalCodeCard key={i} item={m} />);
  } else {
    cards = <h3>No hay resultados...</h3>;
  }

  return (
    <div className={classes.Container}>
      <div className={classes.ContainerInner}>{cards}</div>
    </div>
  );

};

export default PostalCodes;
