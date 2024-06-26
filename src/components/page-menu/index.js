import React from "react"
import classNames from "classnames"
import { Section, Text } from "components"
import useStyles from "./styles"

const PageMenu = ({ className, sections = [] }) => {
  const classes = useStyles()

  const scrollToElement = (e, target) => {
    e.preventDefault()
    document.getElementById(target).scrollIntoView({ behavior: "smooth" })
  }

  return (
    <Section dense dark className={classNames(classes.pageMenu, className)}>
      <ul className={classes.pageMenuList}>
        {sections.map(section => (
          <li key={section.target} className={classes.pageMenuListItem}>
            <Text variant="h4" component="span">
              <a
                className={classes.sectionTitle}
                href={`#${section.target}`}
                onClick={e => scrollToElement(e, section.target)}
              >
                {section.title}
              </a>
            </Text>
          </li>
        ))}
      </ul>
    </Section>
  )
}

export default PageMenu
