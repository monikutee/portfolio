export const scrollWithOffset = (el: any) => {
  const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
  const yOffset = -85;
  window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
};
