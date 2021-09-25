import React from 'react'
import { JobDropDown } from '../common'

const Experience: React.FC = () => {
  return (
    <section id="experience" className="section space-y-12 sm:space-y-0">
      <span className="section__title">Experience</span>
      <ul className="section__content text-center md:text-right">
        <JobDropDown
          employer="Teslar Software"
          position="Software Engineer"
          startDate={new Date(2021, 6)}
        >
          <p>
            Enterprise level software development in a SCRUM-based environment.
          </p>
          <br />
          <p>
            Organized SCRUM sprints working on both large team projects and
            individual bug fixing and smaller projects
          </p>
        </JobDropDown>
        <JobDropDown
          employer="AltiView Tech Group"
          position="Full Stack Engineer"
          startDate={new Date(2019, 7)}
          endDate={new Date(2021, 4)}
        >
          <p className="text-md">Developed custom software including:</p>
          <ul className="list-disc ml-4 text-left">
            <li>Multi-tenanted Web Apps</li>
            <li>Cross Platform Mobile Apps with React-Native and Xamarin</li>
            <li>Domain-Driven-Design organized backend services</li>
            <li>
              Production experience with both REST and GraphQL APIs (server and
              client sides)
            </li>
            <li>
              Integrations with popular third-party tools such as Stripe, OAuth,
              and S3 Storage
            </li>
            <li>State management using both Flux and React Context</li>
          </ul>
        </JobDropDown>
        <JobDropDown
          employer="Best Buy"
          position="Verizon Solutions Expert"
          startDate={new Date(2016, 10)}
          endDate={new Date(2019, 0)}
        >
          <p>
            Starting as a seasonal computer sales consultant, I was quickly
            promoted to full-time, then to a leadership role as the Verizon
            Solutions Expert
          </p>
          <p>
            Multiple Black Fridays and mentoring both new and experienced
            employees developed consistency and communication skills
          </p>
        </JobDropDown>
        <JobDropDown
          employer="Northwest Arkansas Community College"
          position="Computer Science"
          startDate={new Date(2015, 7)}
          endDate={new Date(2017, 4)}
        >
          <ul className="list-disc ml-4 text-left">
            <li>
              Introductory programming courses involving SQL, common data
              structures, and algorithms
            </li>
            <li>
              Intermediate mathematics such as Calculus I & II, Discrete Math,
              and Linear Algebra
            </li>
            <li>
              After financial aid issues, I withdrew and pursued self-taught
              methods
            </li>
          </ul>
        </JobDropDown>
      </ul>
    </section>
  )
}

export default Experience
