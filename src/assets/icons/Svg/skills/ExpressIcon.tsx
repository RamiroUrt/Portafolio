const ExpressIcon = () => {
  return (
    <svg
      width="128"
      height="90"
      viewBox="15 11 34 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      aria-label="Express"
      role="img"
      className="block shrink-0 mx-auto text-black dark:text-white"
    >
           {/* Marco */}
      <path
        d="M16.5 12.5H37L47 34H16.5V12.5Z"
        className="dark:stroke-black :stroke-white"
        strokeWidth="1.2"
        strokeLinejoin="miter"
      />

      {/* Letra E */}
      <path
        d="M31 22H21
           C21 18 23.2 16 26 16
           C29 16 31 18.5 31 22Z
           M21 22
           C21 25.5 23 28 27 28
           C29 28 30.5 27.2 31.5 26"
        className="dark:stroke-black :stroke-white"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Letra X */}
      <path
        d="M32 16.5L42 28.5 M42 16.5L32 28.5"
        className="dark:stroke-black :stroke-white"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default ExpressIcon;