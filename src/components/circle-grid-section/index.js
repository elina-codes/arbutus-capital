import React from "react"
import { IconText } from "components"
import useStyles from "./styles"

const CircleGridSection = ({ data = [], ...props }) => {
  const classes = useStyles()
  return (
    <div className={classes.circleGrid}>
      {data.map((item, i) => {
        const { icon: Icon, image, text } = item
        return (
          <IconText
            {...{
              icon: Icon,
              image,
              text,
              ...props,
              className: classes.circleGridIcon,
              key: `icon-${i}-${text}`,
            }}
          />
        )
      })}
    </div>
  )
}
export default CircleGridSection
