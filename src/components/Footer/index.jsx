import React from "react";
import "./footer.css";
import ItemList from "./../itemLi";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  sub: {
    borderTopLeftRadius: "0",
    borderBottomLeftRadius: "0",
    padding: "0.5rem",
  },
  textField: {
    borderRadius: "0.5rem 0 0 0.5rem",
    borderTopRightRadius: "0",
    borderBottomRightRadius: "0",
    backgroundColor: "#F7E0CA",
    width: "65%",
  },
}));
const Footer = () => {
  const classes = useStyles();
  const list1 = ["aboutus", "blog", "Q & A", "resources", "contact us"];
  const list2 = ["terms of service", "privacy policy", "accessibility"];
  return (
    <footer className="parent">
      <div className="div1">
        <img src="/assets/images/sq.svg" alt="logo" className="footerLogo" />
        <div className="iconsFooter">
          <i className="icons fab fa-facebook-square"></i>
          <i className="icons fab fa-twitter"></i>
          <i className="icons fab fa-instagram"></i>
        </div>
      </div>
      <div className="div2">
        <u>Quick Links</u>
        <ul>
          {list1.map((item) => (
            <ItemList li={item} key={item} />
          ))}
        </ul>
      </div>
      <div className="div3">
        <u>Custom Links</u>
        <ul className="unorderL">
          {list2.map((item) => (
            <ItemList li={item} key={item} />
          ))}
        </ul>
      </div>
      <div className="div4">
        <u>Newsletter</u>
        <p className="newsP">
          You can get the lastest updates by subscribing our newsletter
        </p>
        <form action="">
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            size="small"
            className={classes.textField}
          />
          <Button variant="contained" color="secondary" className={classes.sub}>
            Subscribe
          </Button>
        </form>
      </div>
    </footer>
  );
};

export default Footer;
