import React from 'react';
import { withKnobs, boolean} from '@storybook/addon-knobs';
import Button from "../components/button";
import NavigationButton from "../components/navigation-button";
import Navigation from "../components/navigation";
import Stack from "../components/stack";

import {Home} from "../components/icons";
import TextTitle from "../components/text-title";
import ThemeButton from "../components/theme-button";

export default {
  title: 'Buttons',
  decorators: [withKnobs],
};

 
export const Normal = () => <Button>Save</Button>

export const Theme = () => 
<Stack column>
  <ThemeButton>Save</ThemeButton>
  <ThemeButton full>FullWidth</ThemeButton>
  <ThemeButton full big>
    Save Big Button
  </ThemeButton>
</Stack>

export const NavButton = () => 
<NavigationButton>
  <Home />
    <TextTitle>Home</TextTitle>
</NavigationButton>;

export const Nav = () => {
  const flat = boolean('Flat', false)
  return <Navigation flat={flat} selectedKey="home" />
}

