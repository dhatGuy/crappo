function Icon({ ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="160"
      height="216"
      fill="none"
      viewBox="0 0 160 216"
      {...props}
    >
      <path
        fill="url(#paint0_linear_1_453)"
        d="M79.41 155.686L0 108.823l79.361 111.875 79.451-111.875-79.45 46.863h.048zM80.59-38L1.213 93.746 80.59 140.69 160 93.795 80.59-38z"
      ></path>
      <defs>
        <linearGradient
          id="paint0_linear_1_453"
          x1="80"
          x2="80"
          y1="-38"
          y2="186.414"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" stopOpacity="0.16"></stop>
          <stop offset="1" stopColor="#fff" stopOpacity="0"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
}

export default Icon;
