// eslint-disable-next-line import/no-anonymous-default-export
export default (data = [], action) => {
  switch (action.type) {
    case 'SAVE':
      // const newdata = { name: 'text' };
      return [...data, action.payload];
    default:
      return data;
  }
};
