export default function getSceneStyle(props, computedProps) {
  const style = {
    flex: 1,
    backgroundColor: '#00796b',
    shadowColor: '#00796b',
    shadowOffset: null,
    shadowOpacity: 0.1,
    shadowRadius: null,
  };
  if (computedProps.isActive) {
    style.marginTop = computedProps.hideNavBar ? 0 : 64;
    style.marginBottom = computedProps.hideTabBar ? 0 : 50;
  }
  return style;
};
