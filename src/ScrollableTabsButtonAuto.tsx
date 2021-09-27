// @ts-nocheck
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "./redux";
import { makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import TabPanel from "./TabPanel";
import DishCard from "./DishCard";
import CircularProgress from "@material-ui/core/CircularProgress";

function a11yProps(index: any) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
  progressIndicator: {
    top: "300px",
    position: "relative",
  },
  fontBlack:{
    color:"#000"
  }
}));

function ScrollableTabsButtonAuto({ postData, fetchPosts }) {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return postData.loading ? (
    <CircularProgress className={classes.progressIndicator} />
  ) : postData.error ? (
    <h2>{postData.error}</h2>
  ) : (
    <div className={classes.root}>
      <AppBar position="static" color="inherit">
        <Tabs
          value={value}
          indicatorColor="secondary"
          textColor="secondary"
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          {postData &&
            postData.posts &&
            postData.posts.map(({ menu_category_id, menu_category }) => (
              <Tab
                key={menu_category_id}
                label={menu_category}
                {...a11yProps(menu_category_id)}
              />
            ))}
        </Tabs>
      </AppBar>
      {postData &&
        postData.posts &&
        postData.posts.map(({ menu_category_id, category_dishes }, index) => (
          <TabPanel key={menu_category_id} value={value} index={index}>
            {category_dishes.map((category_dish) => (
              <DishCard key={category_dish.dish_id} dish={category_dish} />
            ))}
          </TabPanel>
        ))}
    </div>
  );
}

const mapStateToProps = (state: { posts: any }) => {
  return {
    postData: state.posts,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    fetchPosts: () => dispatch(fetchPosts()),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ScrollableTabsButtonAuto);
