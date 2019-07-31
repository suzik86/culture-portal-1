const randomColor = () => {
  const rgb = [Math.random() * 180 + 76, Math.random() * 180 + 76, Math.random() * 180 + 76];
  return `rgb(${rgb})`;
};

export default randomColor;
