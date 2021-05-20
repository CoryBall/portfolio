import React from 'react'

const Skills: React.FC = () => {
  return (
    <section id="skills" className="section space-y-12 sm:space-y-0">
      <span className="section__title">Skills</span>
      <div className="section__content flex flex-wrap md:flex-nowrap">
        <ul className="skill">
          <li className="skill__title">Languages</li>
          {['Typescript', 'C#', 'SQL', 'HTML', 'CSS'].map(
            (language: string) => (
              <li key={language} className="skill_item">
                {language}
              </li>
            )
          )}
        </ul>
        <ul className="skill">
          <li className="skill__title">Frameworks</li>
          {['React', 'Node', 'Next.js', 'Express', 'Apollo Server/Client'].map(
            (framework: string) => (
              <li key={framework} className="skill_item">
                {framework}
              </li>
            )
          )}
        </ul>
        <ul className="skill">
          <li className="skill__title">Tools</li>
          {['Chrome Devtools', 'Git', 'REST', 'GraphQL', 'Postman'].map(
            (tool: string) => (
              <li key={tool} className="skill_item">
                {tool}
              </li>
            )
          )}
        </ul>
        <ul className="skill">
          <li className="skill__title">Other</li>
          {['Docker', 'Traefik', 'Linux', 'SSH', 'Bash'].map(
            (environment: string) => (
              <li key={environment} className="skill_item">
                {environment}
              </li>
            )
          )}
        </ul>
      </div>
    </section>
  )
}

export default Skills
