import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Experience: React.FC = () => {
  const [jobIndex, setJobIndex] = React.useState<number>(0);
  function toggleJob(index: number): void {
    setJobIndex(jobIndex === index ? 0 : index);
  }
  return (
    <section id="experience" className="section space-y-12 sm:space-y-0">
      <span className="section__title">
        Experience
      </span>
      <ul className="section__content text-center md:text-right">
        <li onClick={() => toggleJob(1)} className="job__header">
          <div className="job__title">
            <div>
              <p className="job__name">AltiView Tech Group</p>
              <p className="job__position">Full Stack Engineer</p>
            </div>
            <p className="job__date">Aug 2019 - May 2021</p>
          </div>
          <FontAwesomeIcon className="job__arrow" icon={jobIndex === 1 ? faChevronUp : faChevronDown}/>
        </li>
        <li className={`${jobIndex === 1 ? 'block' : 'hidden'} job__description`}>
          <p className="text-md">Developed custom software including:</p>
          <ul className="list-disc ml-4 text-left">
            <li>Multi-tenanted Web Apps</li>
            <li>Cross Platform Mobile Apps with React-Native and Xamarin</li>
            <li>Domain-Driven-Design organized backend services</li>
            <li>Production experience with both REST and GraphQL APIs (server and client sides)</li>
            <li>Integrations with popular third-party tools such as Stripe, OAuth, and S3 Storage</li>
            <li>State management using both Flux and React Context</li>
          </ul>
        </li>
        <li onClick={() => toggleJob(2)} className="job__header">
          <div className="job__title">
            <div>
              <p className="job__name">Best Buy</p>
              <p className="job__position">Verizon Solutions Expert</p>
            </div>
            <p className="job__date">Nov 2016 - Jan 2019</p>
          </div>
          <FontAwesomeIcon className="job__arrow" icon={jobIndex === 2 ? faChevronUp : faChevronDown}/>
        </li>
        <li className={`${jobIndex === 2 ? 'block' : 'hidden'} job__description space-y-4`}>
          <p>Starting as a seasonal computer sales consultant, I was quickly promoted to full-time, then to a leadership role as the Verizon Solutions Expert</p>
          <p>Multiple Black Fridays and mentoring both new and experienced employees developed consistency and communication skills</p>
        </li>
        <li onClick={() => toggleJob(3)} className="job__header">
          <div className="job__title">
            <div className="md:w-1/2">
              <p className="job__name">Northwest Arkansas Community College</p>
              <p className="job__position">Computer Science</p>
            </div>
            <p className="job__date">Aug 2015 - May 2017</p>
          </div>
          <FontAwesomeIcon className="job__arrow" icon={jobIndex === 2 ? faChevronUp : faChevronDown}/>
        </li>
        <li className={`${jobIndex === 3 ? 'block' : 'hidden'} job__description space-y-4`}>
          <ul className="list-disc ml-4 text-left">
            <li>Introductory programming courses involving SQL, common data structures, and algorithms</li>
            <li>Intermediate mathematics such as Calculus I & II, Discrete Math, and Linear Algebra</li>
            <li>After financial aid issues, I withdrew and pursued self-taught methods</li>
          </ul>
        </li>
      </ul>
    </section>
  )
}

export default Experience;
