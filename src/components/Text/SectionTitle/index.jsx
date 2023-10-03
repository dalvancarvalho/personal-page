/* SectionTitle/index.jsx */

import useSectionTitleAnimation from '../animations/useSectionTitleAnimation'

function SectionTitle(props) {
  // Displays the title of the section (H2)

  const {
    animation = true,
    children,
    watermark = undefined,
    watermarkColor = 'text-slate-150 dark:text-dark-2',
  } = props
  const { headingRef, watermarkRef } = useSectionTitleAnimation(animation, watermark)

  return (
    <div
      className="relative isolate mb-10 md:mb-24 2xl:mb-28 w-full flex
      justify-start md:justify-center title-font text-3xl md:text-[2.5rem]
      2xl:text-[2.75rem]"
    >
      <h2 className="whitespace-nowrap" ref={headingRef}>
        {children}
      </h2>
      {watermark && (
        <span
          className={`hidden -z-10 absolute translate-x-[0.125em] md:block
          lg:translate-x-[0.2em] text-[2.5em] uppercase ${watermarkColor}
          tracking-[0.25em] lg:tracking-[0.4em] select-none color-transition`}
          ref={watermarkRef}
        >
          {watermark}
        </span>
      )}
    </div>
  )
}

export default SectionTitle
