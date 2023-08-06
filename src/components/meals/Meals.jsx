import React from "react";
import MealsItem from "./MealsItem";
import { styled } from "styled-components";

const DUMMY_MEALS = [
  {
    id: 1,
    title: "Sushi",
    description: "finest fish and veggies",
    price: 22.99,
  },
  {
    id: 2,
    title: "Pizza",
    description: "finest fish and veggies",
    price: 16.0,
  },
  {
    id: 3,
    title: "Barbecue",
    description: "finest fish and veggies",
    price: 12.99,
  },
  {
    id: 4,
    title: "Green Bowl",
    description: "finest fish and veggies",
    price: 19.99,
  },
];

export const Meals = () => {
  return (
    <Container>
      <ul>
        {DUMMY_MEALS.map((meal) => {
          return (
            <MealsItem
              key={meal.id}
              title={meal.title}
              description={meal.description}
              price={meal.price}
              id={meal.id}
            />
          );
        })}
      </ul>
    </Container>
  );
};

const Container=styled("section")