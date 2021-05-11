import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      marginTop: theme.spacing(2),
    },
  },
  page: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "5%",
  },
  ul: {
    "& .MuiPaginationItem-root": {
      color: "#F8B334",
    },
    "& .MuiPaginationItem-page.Mui-selected": {
      backgroundColor: "rgba(251, 144, 39)",
      color: "#ffffff",
    },
  },
}));

const BasicPagination = ({
  productsPerPage,
  countProducts,
  setCurrentPage,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Pagination
        className={`${classes.ul} ${classes.page}`}
        count={Math.ceil(parseInt(countProducts) / productsPerPage)}
        style={{ color: "#F8B334" }}
        onChange={(e, newPage) => setCurrentPage(newPage)}
      />
      {/* {console.log(currentPage)} */}
    </div>
  );
};

export default BasicPagination;
