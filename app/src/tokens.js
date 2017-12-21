const space = 8;
const tokens = {
  space: space,
  gutter: space * 2,
  focus: {
    outline:'1px dotted #D43', 
  },
  font: {
    family: {
      primary: 'Work Sans',
      // eslint-disable-next-line
      secondary: '\"Slabo 27px\"',
    },
    size: {
      tiny: `${space}px`,
      small: '13px',
      default: `${space*2}px`,
      regular: `${space*3}px`,
      title: `${space*4}px`,
      lead: `${space*5}px`,
      giant: `${space*6}px`,
    },
  }
}

export default tokens;
