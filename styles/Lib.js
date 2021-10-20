export const headingAnimations = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.65,
    },
  },
  hidden: {
    opacity: 0,
    y: 20,
    transition: {
      delay: 0.65,
    },
  },
  exit: {
    opacity: 0,
    y: 400,
    transition: {
      delay: 0.65,
    },
  },
};

export const headingChildren = {
  visible: {
    opacity: 1,
    transition: {
      delay: 0.8,
    },
  },
  hidden: {
    opacity: 0,
  },
};

export const MenuAnimations = {
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      // velocity: 1,
    },
  },
  hidden: {
    x: `-100%`,
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};
