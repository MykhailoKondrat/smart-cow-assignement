import * as React from 'react'

const SvgLogo = (props) => (
  <svg
    width={35}
    height={34}
    viewBox={`0 0 35 34`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <ellipse
      cx={11.597}
      cy={16.5}
      rx={10.5}
      ry={7.5}
      transform="rotate(9.527 11.597 16.5)"
      fill="#E7AB11"
    />
    <ellipse
      cx={22.693}
      cy={24.134}
      rx={10.5}
      ry={7.5}
      transform="rotate(9.527 22.693 24.134)"
      fill="#12B1B1"
    />
    <circle cx={23.097} cy={11} r={11} fill="#EE6363" />
  </svg>
)

export default SvgLogo
