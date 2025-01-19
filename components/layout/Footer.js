import React from 'react';
import Image from 'next/image';
import classes from './Footer.module.scss';
import Logo from '../../images/Taste-Trail-Primary.png';
import Text from '../text/Text';

function Footer() {
  return (
    <footer className={classes.footer}>
      <Image src={Logo} alt="meal-khuj logo" />
      <Text>
        Find the perfect
        meal recipe
        for you
      </Text>
      <Text className={classes.copyright}>
        © “My-Meals” 2025 All right reserved.
      </Text>
    </footer>
  );
}

export default Footer;
