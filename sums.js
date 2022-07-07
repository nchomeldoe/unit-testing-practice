export const multiply = (numberOne, numberTwo) => {
  return numberOne * numberTwo;
};

export const divide = (numberOne, numberTwo) => {
  if (numberTwo === 0) {
    return "Can't divide by 0";
  } else {
    return numberOne / numberTwo;
  }
};
