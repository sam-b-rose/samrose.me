import React from 'react';
import { styled } from '@style';

const Hero = () => (
  <HeroWrapper>
    <HeroSVG width="4195" height="1429" viewBox="0 0 4195 1429" fill="none">
      <path d="M1923 855.5C1539.89 834.824 1638 861 1319 950C1000 1039 937 953 667 1118C397 1283 264.167 1259.44 4 1307V2H4180V315.331C3975.09 526.09 3844.03 620.816 3547.16 698.291C3267.5 759 3110 670 2822.1 777.237C2559.59 901.004 2182.89 879.324 1923 855.5Z"></path>
      <path d="M4177 305.5C3972.09 516.259 3997.03 600.485 3700.16 677.96C3420.5 738.669 3263 649.669 2975.1 756.906C2712.59 880.673 2335.89 858.993 2076 835.169C1692.89 814.493 1791 840.669 1472 929.669C1153 1018.67 1090 932.669 820 1097.67C550 1262.67 264.667 1261.44 4.5 1309"></path>
    </HeroSVG>
  </HeroWrapper>
);

const HeroWrapper = styled('div', {
  position: 'absolute',
  top: '0',
  right: '0',
  left: '0',
  overflow: 'hidden',
  zIndex: '0',
});

const HeroSVG = styled('svg', {
  position: 'relative',
  top: '0',
  marginTop: '-30rem',
  marginLeft: '-110rem',
  left: '50%',
  overflow: 'hidden',
  zIndex: '0',

  '& > path:first-of-type': {
    fill: '$subtle',
  },

  '& > path:last-of-type': {
    stroke: '$gray200',
  },

  '@media (minWidth: 1800px)': {
    marginLeft: '-150rem',
  },
});

export default Hero;
