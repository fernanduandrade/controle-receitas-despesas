const HandleBalanceValues = (array, str) => {
  if (str) {
    const searchValues = array.filter(
      (element) => element.register_type === str
    );
    return searchValues.reduce((acc, element) => {
      return acc + element.expense;
    }, 0);
  }

  return array.reduce((acc, element) => {
    return acc + element.expense;
  }, 0);
};

export default HandleBalanceValues;
