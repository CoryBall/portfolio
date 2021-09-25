import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

type JobDropDownProps = {
  employer: string
  position: string
  startDate: Date
  endDate?: Date
  children: React.ReactNode
}

const JobDropDown: React.FC<JobDropDownProps> = (props: JobDropDownProps) => {
  const { employer, position, startDate, endDate, children } = props

  const [expanded, setExpanded] = React.useState<boolean>(false)
  function toggleExpanded(): void {
    setExpanded(!expanded)
  }

  const months: string[] = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ]

  function displayDate(date: Date): string {
    const month = months[date.getMonth()]
    const year = date.getFullYear()
    return `${month} ${year}`
  }

  return (
    <div>
      <div
        tabIndex={0}
        onClick={toggleExpanded}
        onKeyPress={null}
        className="job__header"
        aria-label="expand dropdown"
        role="listbox"
      >
        <div className="job__title">
          <div>
            <p className="job__name">{employer}</p>
            <p className="job__position">{position}</p>
          </div>
          <p className="job__date">{`${displayDate(startDate)} - ${
            endDate ? displayDate(endDate) : 'Current'
          }`}</p>
        </div>
        <FontAwesomeIcon
          className="job__arrow"
          icon={expanded ? faChevronUp : faChevronDown}
        />
      </div>
      <div className={`${expanded ? 'block' : 'hidden'} job__description`}>
        {children}
      </div>
    </div>
  )
}

export default JobDropDown
