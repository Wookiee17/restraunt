// @ts-nocheck
import React from "react";
import { addToCart, removeFromCart } from "./redux";
import { connect } from "react-redux";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import LensIcon from "@material-ui/icons/Lens";
import AddIcon from "@material-ui/icons/Add";
import IconButton from "@material-ui/core/IconButton";
import RemoveIcon from "@material-ui/icons/Remove";
import Box from "@material-ui/core/Box";
import { customization } from "./constants";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      "&:hover": {
        backgroundColor: "#079807",
      },
    },
    paper: {
      padding: theme.spacing(2),
      margin: "auto",
    },
    button: {
      backgroundColor: "#07a907",
      color: "#fff",
      height: "10px",
    },
    buttonLeft: {
      borderRadius: "25px 0px 0px 25px",
    },
    buttonRight: {
      borderRadius: "0px 25px 25px 0px",
    },
    buttonMiddle: {
      borderRadius: "0px",
      fontSize: "16px",
    },
    imageStyle: {
      height: "70px",
      width: "70px",
      borderRadius: "4px",
    },
    calorieFont: {
      padding: "30px",
    },
    cardMargin: {
      marginBottom: "10px",
    },
    bgGreen: {
      color: "#07a907",
      border: "1px solid",
    },
    bgRed: {
      color: "#ff0000",
      border: "1px solid",
    },
    fontRed: {
      color: "#ff0000",
      paddingLeft:'10px'
    },
    headFont: {
      fontWeight: 600,
      fontSize: "18px",
    },
    subFont: {
      fontWeight: 600,
      fontSize: "16px",
    },
    description: {
      fontSize: "14px",
      paddingTop: "10px",
    },
  })
);

function DishCard({ dish, cart, addToCart, removeFromCart }) {
  const classes = useStyles();
  const count = cart.items[dish.dish_id]
    ? cart.items[dish.dish_id].quantity
    : 0;
  return (
    <div className={`${classes.root} ${classes.cardMargin}`}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item xs={1} component={"div"}>
            {dish.dish_Type === 2 ? (
              <LensIcon className={classes.bgGreen} fontSize="small" />
            ) : (
              <LensIcon className={classes.bgRed} fontSize="small" />
            )}
          </Grid>
          <Grid item xs={11} sm container>
            <Grid
              item
              xs
              container
              direction="column"
              spacing={2}
              style={{ textAlign: "start" }}
              component={"div"}
            >
              <Grid item xs>
                <Typography
                  className={classes.headFont}
                  gutterBottom
                  component={"div"}
                >
                  {dish.dish_name}
                </Typography>
                <Box display="flex">
                  <Box flexGrow={1} className={classes.subFont}>
                    {`${dish.dish_currency} ${dish.dish_price}`}
                  </Box>
                  <Box
                    pr={2}
                    className={classes.subFont}
                  >{`${dish.dish_calories} calories`}</Box>
                </Box>
                <Typography
                  pt={4}
                  className={classes.description}
                  component={"div"}
                  color="textSecondary"
                >
                  {dish.dish_description}
                </Typography>
              </Grid>
              <Grid item>
                <IconButton
                  color="primary"
                  aria-label="upload picture"
                  component="div"
                  className={` ${classes.root} ${classes.button} ${classes.buttonLeft}`}
                  onClick={() => {
                    removeFromCart(parseInt(dish.dish_id));
                  }}
                >
                  <RemoveIcon />
                </IconButton>
                <IconButton
                  color="primary"
                  aria-label="upload picture"
                  component="div"
                  className={`${classes.root} ${classes.button} ${classes.buttonMiddle} `}
                >
                  {count}
                </IconButton>
                <IconButton
                  color="primary"
                  aria-label="upload picture"
                  component="span"
                  className={` ${classes.root} ${classes.button} ${classes.buttonRight}`}
                  onClick={() => {
                    addToCart(parseInt(dish.dish_id));
                  }}
                >
                  <AddIcon />
                </IconButton>
              </Grid>
              {dish.addonCat.length > 0 ? (
                <Typography
                  component={"div"}
                  color="textSecondary"
                  className={classes.fontRed}
                >
                  {customization}
                </Typography>
              ) : (
                <div></div>
              )}
            </Grid>
            <Grid item>
              <img
                alt="dish"
                src={dish.dish_image}
                className={classes.imageStyle}
              />
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

const mapStateToProps = (state: { cart: any }) => {
  return {
    cart: state.cart,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
    removeFromCart: (id) => dispatch(removeFromCart(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DishCard);
