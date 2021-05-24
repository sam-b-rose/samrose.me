import React from 'react';
import styled from 'styled-components';

const Hero = () => (
  <HeroWrapper>
    <HeroSVG width="4195" height="1429" viewBox="0 0 4195 1429" fill="none">
      <g filter="url(#filter0_d)">
        <path
          d="M1923 855.5C1539.89 834.824 1638 861 1319 950C1000 1039 937 953 667 1118C397 1283 264.167 1259.44 4 1307V2H4180V315.331C3975.09 526.09 3844.03 620.816 3547.16 698.291C3267.5 759 3110 670 2822.1 777.237C2559.59 901.004 2182.89 879.324 1923 855.5Z"
          fill="var(--colors-subtle)"
        ></path>
      </g>
      <path
        d="M4177 305.5C3972.09 516.259 3997.03 600.485 3700.16 677.96C3420.5 738.669 3263 649.669 2975.1 756.906C2712.59 880.673 2335.89 858.993 2076 835.169C1692.89 814.493 1791 840.669 1472 929.669C1153 1018.67 1090 932.669 820 1097.67C550 1262.67 264.667 1261.44 4.5 1309"
        stroke="var(--colors-gray200)"
      ></path>
      <defs>
        <filter
          id="filter0_d"
          x="0"
          y="0"
          width="4184"
          height="1313"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset dy="2"></feOffset>
          <feGaussianBlur stdDeviation="2"></feGaussianBlur>
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.02 0"
          ></feColorMatrix>
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          ></feBlend>
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow"
            result="shape"
          ></feBlend>
        </filter>
      </defs>
    </HeroSVG>
  </HeroWrapper>
);

const HeroWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  overflow: hidden;
  z-index: 0;
`;

const HeroSVG = styled.svg`
  position: relative;
  top: 0;
  margin-top: -30rem;
  margin-left: -110rem;
  left: 50%;
  overflow: hidden;
  z-index: 0;

  @media (min-width: 1800px) {
    margin-left: -150rem;
  }
`;

export default Hero;
