// @ts-nocheck
import React from "react";
import { useSelector } from "react-redux";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { company_name, my_orders } from "./constants";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    grow: {
      flexGrow: 1,
    },
    navBar: {
      backgroundColor: "#fff",
    },
    menuButton: {
      marginRight: theme.spacing(2),
      color:'#000'
    },
    title: {
      fontSize: "18px",
      color: "#000",
    },
    orderFont: {
      fontSize: "15px",
      color: "#000",
    },
    fontBlack:{
      color:"#000"
    }
  })
);

function Header() {
  const classes = useStyles();
  const totalCart = useSelector((state) => state.cart.total);
  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar className={classes.navBar}>
          <IconButton
            edge="start"
            className={classes.menuButton}            
            aria-label="open drawer"
            color="inherit"
          >
            <ArrowBackIcon />
          </IconButton>
          <Typography className={classes.title} noWrap>
            {company_name}
          </Typography>
          <div className={classes.grow} />
          <div>
            <IconButton
              className={classes.orderFont}
              aria-label="show 4 new mails"
              color="inherit"
            >
              {my_orders}
            </IconButton>
            <IconButton aria-label="show 17 new notifications" className={classes.fontBlack} color="inherit">
              <Badge badgeContent={totalCart} color="secondary">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
