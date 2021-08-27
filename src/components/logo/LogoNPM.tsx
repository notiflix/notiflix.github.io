interface ILogoNPM {
  className?: string;
  width?: number;
  height?: number;
  color?: string;
}

function LogoNPM({ className, width, height, color }: ILogoNPM): JSX.Element {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width={width || 110} height={height || 45} viewBox="0 0 110 45">
      <g>
        <polygon fill={color || '#CB3837'} points="5,6.1 105,6.1 105,39.4 55.01,39.4 55.01,45 32.74,45 32.74,39.4 5,39.4 " />
        <path fill="#fff" d="M21.69 33.85l0 -16.61 5.48 0 0 16.61 5.66 0 0 -22.27 -22.27 0 0 22.27 11.13 0zm16.63 -22.27l0 27.82 11.14 0 0 -5.55 11.13 0 0 -22.27 -22.27 0zm11.14 16.61l0 -10.95 5.48 0 0 10.95 -5.48 0zm16.63 -16.61l0 22.27 11.14 0 0 -16.61 5.47 0 0 16.61 5.66 0 0 -16.61 5.48 0 0 16.61 5.66 0 0 -22.27 -33.41 0z" />
      </g>
    </svg>
  );
}

export default LogoNPM;
