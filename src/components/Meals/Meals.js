import AvailableMeals from "./AvailableMeals";
import MealsSummary from "./MealsSummary";
import { Fragment } from "react";

const Meals = (props) => {
  return (
    <Fragment>
      <MealsSummary />
      <AvailableMeals />
    </Fragment>
  );
};

export default Meals;
