/* DynamicBg/index.jsx */

export default function DynamicBg({ alt, className, darkVersion, lazy, lightVersion }) {
  // Smoothly switches the background image between its
  // light and dark versions when the theme is toggled

  return (
    <>
      <img
        alt={alt}
        className={`${className} opacity-100 dark:opacity-0 transition-opacity duration-300 select-none`}
        loading={lazy ? 'lazy' : 'eager'}
        src={lightVersion}
      />
      <img
        alt={alt}
        className={`${className} opacity-0 dark:opacity-100 transition-opacity duration-300 select-none`}
        loading={lazy ? 'lazy' : 'eager'}
        src={darkVersion}
      />
    </>
  )
}
