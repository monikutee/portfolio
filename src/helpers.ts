const desktopHeader = 85;
const mobileHeader = 280;

export const scrollWithOffset = (el: any) => {
  const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
  const viewportWidth = Math.max(
    document.documentElement.clientWidth,
    window.innerWidth || 0
  );
  if (viewportWidth > 991) {
    window.scrollTo({ top: yCoordinate - desktopHeader, behavior: "smooth" });
  } else {
    window.scrollTo({ top: el.offsetTop - mobileHeader, behavior: "smooth" });
  }
};
