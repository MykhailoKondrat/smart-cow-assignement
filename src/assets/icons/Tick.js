import * as React from 'react'

const SvgTick = (props) => (
  <svg
    width={16}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#tick_svg__a)">
      <path
        d="M6.807 12a1.06 1.06 0 0 1-.777-.316L3.53 8.986a.746.746 0 0 1-.166-.28.655.655 0 0 1-.022-.31.705.705 0 0 1 .124-.293.876.876 0 0 1 .253-.232c.102-.063.218-.11.342-.136a1.186 1.186 0 0 1 .74.084c.11.053.207.123.284.206L6.73 9.8l4.134-5.424a.993.993 0 0 1 .607-.354c.252-.048.517-.012.736.1.457.231.597.723.312 1.097l-4.884 6.406a.912.912 0 0 1-.335.267c-.136.065-.29.102-.448.108L6.807 12Z"
        fill="#181059"
      />
    </g>
    <defs>
      <clipPath id="tick_svg__a">
        <path
          fill="#fff"
          transform="translate(3.04 3.84)"
          d="M0 0h9.92v8.32H0z"
        />
      </clipPath>
    </defs>
  </svg>
)

export default SvgTick
