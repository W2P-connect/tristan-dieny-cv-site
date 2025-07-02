import React from 'react'

interface FrenchFlagProps {
  size?: number
}

const UKFlag: React.FC<FrenchFlagProps> = ({ size = 29 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 16 13"
    fill="none"
  >
    <g clipPath="url(#clip0_3_754)">
      <rect x="0" y="0.5" width="16" height="12" fill="#22438B" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.33333 0.43335L-0.467556 0.457616L-0.444445 2.30002L14.6507 12.5928L16.4613 12.5583L16.4276 10.7271L1.33333 0.43335Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.444444 0.43335L-0.444445 1.36668L15.5556 12.5667L16.4444 11.6334L0.444444 0.43335Z"
        fill="#C7152A"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.6667 0.43335H16.4444V2.30002C16.4444 2.30002 6 9.20295 1.34933 12.5928C1.29333 12.6339 -0.426668 12.5956 -0.426668 12.5956L-0.564445 10.8214L14.6667 0.43335Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.5938 0.407227L16.4444 1.36669L0.444444 12.5667L-0.444445 11.6334L15.5938 0.407227Z"
        fill="#C7152A"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.77778 0.43335H10.2222V4.16668H16.4444V8.83335H10.2222V12.5667H5.77778V8.83335H-0.444445V4.16668H5.77778V0.43335Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.73684 0H9.26316V5H16V8H9.26316V13H6.73684V8H0V5H6.73684V0Z"
        fill="#C7152A"
      />
    </g>
    <defs>
      <clipPath id="clip0_3_754">
        <rect width="18" height="13" fill="white" transform="translate(-1)" />
      </clipPath>
    </defs>
  </svg>
)

export default UKFlag
