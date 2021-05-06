import React from 'react';
import Link from 'next/link'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'

const Skills: React.FC = () => {
  return (
    <section id="skills" className="section space-y-12 sm:space-y-0 h-1/2">
      <div className="h-1/3 w-full md:w-1/4 text-center md:text-left">
          <span className="md:self-start text-xl md:text-2xl lg:text-3xl font-bold font-serif text-dark">
            Skills
          </span>
      </div>
      <Tabs>
        <TabList className="w-full self-end text-right text-info">
          <Tab>Languages</Tab>
          <Tab>Frameworks</Tab>
          <Tab>Tools</Tab>
          <Tab>Environment</Tab>
        </TabList>
        <TabPanel>
          <ul className="text-right text-dark">
            {['Typescript', 'C#', 'SQL', 'HTML', 'CSS'].map((language: string) => (
              <li>{language}</li>
            ))}
          </ul>
        </TabPanel>
        <TabPanel>
          <ul className="text-center text-dark">
            {['React', 'Node', 'Next.js', 'Express', 'Apollo Server/Client'].map((framework: string) => (
              <li>{framework}</li>
            ))}
          </ul>
        </TabPanel>
        <TabPanel>
          <ul className="text-center text-dark">
            {['Chrome Devtools', 'Git', 'REST', 'GraphQL', 'Postman'].map((tool: string) => (
              <li>{tool}</li>
            ))}
          </ul>
        </TabPanel>
        <TabPanel>
          <ul className="text-center text-dark">
            {['Docker', 'Traefik', 'Linux', 'SSH', 'Bash'].map((environment: string) => (
              <li>{environment}</li>
            ))}
          </ul>
        </TabPanel>
      </Tabs>
      <div>
        <button className="button mt-6">
          <Link href={"#experience"}>
            Experience
          </Link>
        </button>
      </div>
    </section>
  )
}

export default Skills;
