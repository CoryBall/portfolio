import React from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'

const Skills: React.FC = () => {
  return (
    <section id="skills" className="section space-y-12 sm:space-y-0">
      <span className="section__title">
        Skills
      </span>
      <div className="section__content flex flex-wrap md:flex-nowrap">
        <ul className="skill">
          <li className="skill__title">Languages</li>
          {['Typescript', 'C#', 'SQL', 'HTML', 'CSS'].map((language: string) => (
            <li key={language} className="skill_item">{language}</li>
          ))}
        </ul>
        <ul className="skill">
          <li className="skill__title">Frameworks</li>
          {['React', 'Node', 'Next.js', 'Express', 'Apollo Server/Client'].map((framework: string) => (
            <li key={framework} className="skill_item">{framework}</li>
          ))}
        </ul>
        <ul className="skill">
          <li className="skill__title">Tools</li>
          {['Chrome Devtools', 'Git', 'REST', 'GraphQL', 'Postman'].map((tool: string) => (
            <li key={tool} className="skill_item">{tool}</li>
          ))}
        </ul>
        <ul className="skill">
          <li className="skill__title">Other</li>
          {['Docker', 'Traefik', 'Linux', 'SSH', 'Bash'].map((environment: string) => (
            <li key={environment} className="skill_item">{environment}</li>
          ))}
        </ul>
      </div>

      <Tabs className="hidden">
        <TabList className="w-full self-center md:self-end text-right text-info">
          <Tab>Languages</Tab>
          <Tab>Frameworks</Tab>
          <Tab>Tools</Tab>
          <Tab>Environment</Tab>
        </TabList>
        <TabPanel>
          <ul className="text-center md:text-right text-dark">
            {['Typescript', 'C#', 'SQL', 'HTML', 'CSS'].map((language: string) => (
              <li>{language}</li>
            ))}
          </ul>
        </TabPanel>
        <TabPanel>
          <ul className="text-center md:text-right text-dark">
            {['React', 'Node', 'Next.js', 'Express', 'Apollo Server/Client'].map((framework: string) => (
              <li>{framework}</li>
            ))}
          </ul>
        </TabPanel>
        <TabPanel>
          <ul className="text-center md:text-right text-dark">
            {['Chrome Devtools', 'Git', 'REST', 'GraphQL', 'Postman'].map((tool: string) => (
              <li>{tool}</li>
            ))}
          </ul>
        </TabPanel>
        <TabPanel>
          <ul className="text-center md:text-right text-dark">
            {['Docker', 'Traefik', 'Linux', 'SSH', 'Bash'].map((environment: string) => (
              <li>{environment}</li>
            ))}
          </ul>
        </TabPanel>
      </Tabs>
    </section>
  )
}

export default Skills;
