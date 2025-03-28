type Props = {
  completed: boolean
}

const CheckboxIcon = ({ completed }: Props) => {

  const classNames = 'size-6 xs:size-7 md:size-8 text-tertiary'

  return completed
    ? (
      <svg viewBox="0 0 24 24" fill="currentColor" className={classNames}>
        <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
      </svg>
    )
    : (
      <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={classNames}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>

    )
}

export default CheckboxIcon;