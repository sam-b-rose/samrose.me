import React, { SVGAttributes } from 'react';
import styled from 'styled-components';

import Link from '@components/Link';

type LogoProps = {
  size?: string;
};

const RoseSVG = (props: SVGAttributes<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="256"
    height="256"
    fill="none"
    viewBox="0 0 256 256"
    {...props}
  >
    <g clip-path="url(#clip0)">
      <path
        fill="url(#paint0_linear)"
        fill-opacity=".8"
        fill-rule="evenodd"
        d="M36.626 146.127c1.96 2.992 8.13 11.167 12.287 15.689 4.181 4.513 3.763.66 1.073-3.642-25.028-40.055 17.344-75.696 46.557-94.52 20.416-13.16 76.594-27.332 101.045-24.498 6.169.707 1.112-2.303-2.737-5.626-40.388-34.874-109.68-35.065-147.887 5.9C25.696 68.062 19.121 95 29.324 132.13c0 .003 5.33 10.994 7.302 13.998z"
        clip-rule="evenodd"
      />
      <path
        fill="url(#paint1_linear)"
        fill-opacity=".8"
        fill-rule="evenodd"
        d="M64.225 103.488c-18.567 64.449 82.885 56.765 59.348 48.888-15.592-5.22-21.414-28.981-17.849-43.963 6.516-27.194 24.488-34.457 48.063-44.38-11.007-8.627-73.208 5.44-89.562 39.455z"
        clip-rule="evenodd"
      />
      <path
        fill="url(#paint2_linear)"
        fill-opacity=".8"
        fill-rule="evenodd"
        d="M156.029 56.346c40.821 44.863-19.974 75.592-28.053 85.477-10.966 13.479 13.234 11.442 33.839-.424 42.474-24.432 24.882-88.695-5.786-85.053z"
        clip-rule="evenodd"
      />
      <path
        fill="url(#paint3_linear)"
        fill-opacity=".8"
        fill-rule="evenodd"
        d="M120.265 102.784c-2.257 6.914.568 23.233 8.389 25.616 9.254 2.825 47.101-47.074 19.206-50.31-11.088-1.283-24.137 14.144-27.595 24.694z"
        clip-rule="evenodd"
      />
      <path
        fill="url(#paint4_linear)"
        fill-opacity=".8"
        fill-rule="evenodd"
        d="M166.639 183.934c22.156-14.169 34.53-36.748 27.978-69.108-2.603-12.963-4.835 29.413-43.523 47.775-31.43 14.926-66.393-6.398-91.595-17.267-2.516 10.612 40.328 81.34 107.14 38.6z"
        clip-rule="evenodd"
      />
      <path
        fill="url(#paint5_linear)"
        fill-opacity=".8"
        fill-rule="evenodd"
        d="M176.966 191.93c-70.33 41.231-137.28 5.131-157.732-74.038-2.54-9.807-3.503-17.926-2.627-23.14-18.997 11.442-20.7 44.893-10.153 74.673 9.77 27.528 26.424 50.305 43.042 61.261 71.979 47.482 181.181-70.236 127.47-38.756z"
        clip-rule="evenodd"
      />
      <path
        fill="url(#paint6_linear)"
        fill-opacity=".8"
        fill-rule="evenodd"
        d="M255.84 127.341c-2.726-44.777-35.677-92.716-85.563-78.282 21.059 14.633 35.121 35.802 41.09 60.38 15.198 62.337-23.092 122.675-87.698 133.545 47.286 26.102 136.616-42.058 132.171-115.643z"
        clip-rule="evenodd"
      />
    </g>
    <defs>
      <linearGradient
        id="paint0_linear"
        x1="246.496"
        x2="23.194"
        y1="96.178"
        y2="105.508"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="var(--color-logo-dark)" />
        <stop offset="1" stop-color="var(--color-logo-light)" />
      </linearGradient>
      <linearGradient
        id="paint1_linear"
        x1="177.821"
        x2="61.144"
        y1="115.858"
        y2="119.992"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="var(--color-logo-dark)" />
        <stop offset="1" stop-color="var(--color-logo-light)" />
      </linearGradient>
      <linearGradient
        id="paint2_linear"
        x1="203.197"
        x2="124.652"
        y1="109.917"
        y2="111.81"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="var(--color-logo-dark)" />
        <stop offset="1" stop-color="var(--color-logo-light)" />
      </linearGradient>
      <linearGradient
        id="paint3_linear"
        x1="168.001"
        x2="119.156"
        y1="106.59"
        y2="107.966"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="var(--color-logo-dark)" />
        <stop offset="1" stop-color="var(--color-logo-light)" />
      </linearGradient>
      <linearGradient
        id="paint4_linear"
        x1="232.212"
        x2="58.603"
        y1="160.569"
        y2="170.912"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="var(--color-logo-dark)" />
        <stop offset="1" stop-color="var(--color-logo-light)" />
      </linearGradient>
      <linearGradient
        id="paint5_linear"
        x1="241.379"
        x2="-1.404"
        y1="178.14"
        y2="189.809"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="var(--color-logo-dark)" />
        <stop offset="1" stop-color="var(--color-logo-light)" />
      </linearGradient>
      <linearGradient
        id="paint6_linear"
        x1="290.628"
        x2="122.409"
        y1="160.867"
        y2="164.942"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="var(--color-logo-dark)" />
        <stop offset="1" stop-color="var(--color-logo-light)" />
      </linearGradient>
      <clipPath id="clip0">
        <path fill="#fff" d="M0 0h256v256H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default ({ size = '2.5rem' }: LogoProps) => (
  <WrapperLink href="/">
    <RoseSVG width={size} height={size} />
  </WrapperLink>
);

const WrapperLink = styled(Link)`
  display: flex;
  text-decoration: none;
  transition: transform 0.2s cubic-bezier(0.4, 0, 1, 1);

  &:hover {
    transform: scale(1.1);
  }
`;

const Logo = styled.span<LogoProps>`
  color: var(--color-primary);
  font-size: ${(props) => props.size};
  font-weight: 600;
`;
