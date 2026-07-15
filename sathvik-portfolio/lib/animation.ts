export const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: .7,
    },
  },
};

export const fadeLeft = {
  hidden: {
    opacity: 0,
    x: -60,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: .8,
    },
  },
};

export const fadeRight = {
  hidden: {
    opacity: 0,
    x: 60,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: .8,
    },
  },
};

export const zoom = {
  hidden:{
    opacity:0,
    scale:.8,
  },

  visible:{
    opacity:1,
    scale:1,
    transition:{
      duration:.7,
    }
  }
}