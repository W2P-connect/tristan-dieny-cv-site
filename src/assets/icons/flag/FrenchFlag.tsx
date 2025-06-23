import React from 'react';

interface FrenchFlagProps {
    size?: number;
}

const FrenchFlag: React.FC<FrenchFlagProps> = ({ size = 29 }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 16 13" fill="none">
        <g clipPath="url(#clip0_3_728)">
            <mask
                id="mask0_3_728"
                style={{ maskType: 'alpha' }}
                maskUnits="userSpaceOnUse"
                x={0}
                y={0}
                width={16}
                height={13}
            >
                <path
                    d="M14.4762 0.5H1.52381C0.682233 0.5 0 1.21634 0 2.1V10.9C0 11.7837 0.682233 12.5 1.52381 12.5H14.4762C15.3178 12.5 16 11.7837 16 10.9V2.1C16 1.21634 15.3178 0.5 14.4762 0.5Z"
                    fill="white"
                />
            </mask>
            <g mask="url(#mask0_3_728)">
                <path
                    d="M14.4762 0.5H1.52381C0.682233 0.5 0 1.21634 0 2.1V10.9C0 11.7837 0.682233 12.5 1.52381 12.5H14.4762C15.3178 12.5 16 11.7837 16 10.9V2.1C16 1.21634 15.3178 0.5 14.4762 0.5Z"
                    fill="white"
                />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0 0.5H5.33333V12.5H0V0.5Z"
                    fill="#0055A4"
                />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.6667 0.5H16V12.5H10.6667V0.5Z"
                    fill="#EF4135"
                />
            </g>
        </g>
        <defs>
            <clipPath id="clip0_3_728">
                <rect width="16" height="12" fill="white" transform="translate(0 0.5)" />
            </clipPath>
        </defs>
    </svg>
);

export default FrenchFlag;
