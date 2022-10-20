export const getLocation = () => {
  if (typeof window === 'undefined') {
    return { pathname: '/' } as Location;
  }
  return window.location;
};
