import Typography from "typography"

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.5,
  headerFontFamily: ["PT Sans", "sans serif"],
  bodyFontFamily: ["PT Sans", "sans serif"],
})

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
