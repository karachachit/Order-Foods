import React from "react";
import MealsItem from "./MealsItem";

const Meals = () => {
  const [meals, setMeals] = useState(DUMMY_MEALS);

  return (
    <div>
      <MealsItem />
    </div>
  );
};

export default Meals;
