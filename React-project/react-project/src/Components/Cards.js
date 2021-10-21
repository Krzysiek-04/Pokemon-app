import {
  Container,
  Grid,
  Paper,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { NavLink } from "react-router-dom";

import CardsInfo from "../data/CardsInfo";

const useStyles = makeStyles({
  mainContainer: {
    width: "100%",
    padding: "90px",
    height: "100%",
    marginTop: "0px",
  },
  title: {
    textTransform: "uppercase",
    fontWeight: "bold",
  },
  description: {
    marginBottom: "10rem",
  },
  link: {
    textDecoration: "none",
  },
  paper: {
    backgroundColor: "#f0fbcc",
    height: "80%",
    margin: "40px",
    textAlign: "center",
    boxShadow: "rgba(0,0,0,0.4) 0px 2px 4px",
    "&:hover": {
      boxShadow: "rgba(0,0,0,0.9) 8px 8px 10px",
      transition: "0,6s",
    },
  },
});

const Cards = () => {
  const classes = useStyles();

  const titles = CardsInfo.map(({ id, title, description, path }) => (
    <Grid
      className={classes.gridItem}
      item
      key={id}
      xs={12}
      sm={6}
      md={4}
      lg={4}
      xl={4}
    >
      <NavLink className={classes.paper} to={path}>
        <Paper className={classes.paper}>
          <Typography className={classes.title} color={"secondary"}>
            {title}
          </Typography>
          <Typography className={classes.description}>{description}</Typography>
        </Paper>
      </NavLink>
    </Grid>
  ));

  return (
    <Container>
      <Grid container className={classes.mainContainer}>
        {titles}
      </Grid>
    </Container>
  );
};

export default Cards;
