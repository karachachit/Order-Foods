import React from "react";
import { Button } from "../../components/UI/Button";
import { styled } from "styled-components";
import { PlusIcan } from "../../assets";

export const MealItemForm = ({ inputId }) => {
  return (
    <FormContainer>
      <InputWrapper>
        <label htmlFor={inputId}>Amount</label>
        <input type="number" id={inputId} min="1" max="5" defaultValue="1" />
      </InputWrapper>
      <Button IconComponent={PlusIcan} size="small">
        Add
      </Button>
    </FormContainer>
  );
};

const FormContainer = styled("form")`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  gap: 12rem;
`;
