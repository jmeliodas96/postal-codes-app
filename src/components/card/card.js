import React from "react";

import classes from "./card.module.css";
import { truncStr } from "../../utils";

const PostalCodeCard = props => {
  const { Deparment, Municipality, Neighbourhood, Postal_code } = props.item;

  return (
    <div className={classes.Container}>
      
      <div className={classes.Bottom}>
        <h3 className={classes.Title}>{truncStr(Deparment, 19)}</h3>
        <h3 className={classes.Title}>{truncStr(Municipality, 19)}</h3>
        <h3 className={classes.Title}>{truncStr(Neighbourhood, 19)}</h3>
        <h3 className={classes.Title}>{truncStr(Postal_code, 19)}</h3>
      </div>
    </div>
  );
};

export default PostalCodeCard;
