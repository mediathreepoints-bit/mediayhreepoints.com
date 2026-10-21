export default function ThreePoints() {
  return (
    <div className="points" role="img" aria-label="Trois points reliés : stratégie, création, diffusion">
      <svg viewBox="0 0 400 400" aria-hidden="true">
        <defs>
          <radialGradient id="nodeGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#c4b5fd" />
            <stop offset="100%" stopColor="#7c5cff" />
          </radialGradient>
          <radialGradient id="nodeGradientWarm" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffb199" />
            <stop offset="100%" stopColor="#ff6b4a" />
          </radialGradient>
        </defs>

        <path className="points__line" d="M110 120 L295 185 L160 305 Z" />
        <path className="points__line" d="M110 120 L160 305" />

        <circle className="points__node" cx="110" cy="120" r="9" fill="url(#nodeGradient)" />
        <circle className="points__node" cx="295" cy="185" r="9" fill="url(#nodeGradient)" />
        <circle
          className="points__node"
          cx="160"
          cy="305"
          r="9"
          fill="url(#nodeGradientWarm)"
        />

        <circle cx="110" cy="120" r="26" fill="rgba(124,92,255,0.12)" />
        <circle cx="295" cy="185" r="26" fill="rgba(124,92,255,0.12)" />
        <circle cx="160" cy="305" r="26" fill="rgba(255,107,74,0.12)" />
      </svg>

      <span className="points__label points__label--1">01 · Stratégie</span>
      <span className="points__label points__label--2">02 · Création</span>
      <span className="points__label points__label--3">03 · Diffusion</span>
      <span className="points__caption">La méthode M3P</span>
    </div>
  );
}
