import React from 'react'
import { JobDropDown } from '../common'

const Experience: React.FC = () => {
  return (
    <section id="experience" className="section space-y-12 sm:space-y-0">
      <span className="section__title">Experience</span>
      <ul className="section__content text-center md:text-right">
        <JobDropDown
          employer="NephoCode"
          position="Founder & CEO"
          startDate={new Date(2021, 6)}
        >
          <p className="font-semibold">
            Freelance software agent specialized in custom solutions to fit
            business needs of varying industries
          </p>
          <br />
          <ul className="list-disc ml-4 text-left">
            <li>
              Working closely with clients, separating technical jargon from
              user needs
            </li>
            <li>
              Utilized Docker, Linux VPS, Google Play, and Apple App Store to
              get solutions to the end user
            </li>
            <li>
              Implemented many complex technologies, such as multi-tenanted
              websites and cross-platform mobile apps
            </li>
            <li>
              Some clients required complex infrastructure involving
              microservices, reverse proxies, load-balancers, and private
              networks
            </li>
          </ul>
        </JobDropDown>
        <JobDropDown
          employer="Netchex"
          position="Software Engineer II"
          startDate={new Date(2021, 11)}
        >
          <p className="font-semibold">
            Company-wide impact working on critical features as well as
            production issues
          </p>
          <br />
          <ul className="list-disc ml-4 text-left">
            <li>Led and motivated participation in Lunch and Learn program</li>
            <li>
              Researched and created new services and technologies alongside
              Architecture and DevOps
            </li>
            <li>
              Created and maintained services in a micro-service architecture
            </li>
            <li>
              Utilized much of what Azure has to offer, often working closely
              with DevOps
            </li>
            <li>Shadowed regression workflow multiple times</li>
          </ul>
          <br />
          <p className="font-semibold">Feats</p>
          <br />
          <ul className="list-disc ml-4 text-left">
            <li>
              Reduced internal HTTP connections to high-traffick core services
              by up to 50%
            </li>
            <li>
              Implemented custom cache invalidation which prevented the company
              from deploying UI services
            </li>
            <li>
              Containerized majority of company services, allowing for easier
              local development.
              <ul className="list-disc ml-4 text-left">
                <li>
                  Pending production use, which will increase build and deploy
                  speeds while reducing infrastructure cost
                </li>
              </ul>
            </li>
          </ul>
        </JobDropDown>
        <JobDropDown
          employer="Teslar Software"
          position="Software Engineer (Mid Level)"
          startDate={new Date(2021, 6)}
          endDate={new Date(2021, 11)}
        >
          <p>Enterprise level software development in a AGILE environment.</p>
          <br />
          <p>
            Organized sprints working on both large team projects, bug
            burndowns, and one-off projects
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
        {/* <JobDropDown
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
        </JobDropDown> */}
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
