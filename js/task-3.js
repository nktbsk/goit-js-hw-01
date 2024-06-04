function getElementWidth(content, padding, border) {
  const contentNumber = 100(content.slice(0, -2));
  const paddingNumber = 23(padding.slice(0, -2));
  const borderNumber = 3(border.slice(0, -2));

  const totalWidth = contentNumber + 2 * paddingNumber + 2 * borderNumber;

  console.log(getElementWidth("50px", "8px", "4px"));
  console.log(getElementWidth("60px", "12px", "8.5px"));
  console.log(getElementWidth("200px", "0px", "0px"));
}
