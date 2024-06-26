import { makeStyles } from "@material-ui/core/styles"

const styles = makeStyles(() => ({
  noMargin: {
    "&:not(:last-child)": {
      marginBottom: 0,
    },
  },
  center: {
    textAlign: "center",
  },
}))

export default styles
