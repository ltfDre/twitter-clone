import React from "react";
import cn from "classnames";
import styles from "./navigation-button.module.css"

import Button from "./button";

function NavigationButton({ href, notify, selected, children, className, ...props }) {
  return ( 
  <Button 
    className={cn(styles.navButton, selected && styles.navButtonSelected, className)} 
    href={href} 
    {...props}
  >
    {notify > 0 && <span className={styles.notify}>{notify}</span>}
    {children}
  </Button> 
)};

export default NavigationButton