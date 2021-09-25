import React from 'react'

const Skills: React.FC = () => {
  return (
    <section id="skills" className="section space-y-12 sm:space-y-0">
      <span className="section__title">Skills</span>
      <div className="section__content flex flex-wrap justify-around gap-y-8">
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
          <li className="skill__title">Frontend</li>
          {[
            'React',
            'Next.js',
            'Blazor',
            'ASP.NET WebForms',
            'Tailwind CSS',
          ].map((front: string) => (
            <li key={front} className="skill_item">
              {front}
            </li>
          ))}
        </ul>
        <ul className="skill">
          <li className="skill__title">Backend</li>
          {['Node.js', 'Express.js', 'ASP.NET Core', 'REST', 'GraphQL'].map(
            (back: string) => (
              <li key={back} className="skill_item">
                {back}
              </li>
            )
          )}
        </ul>
        <ul className="skill">
          <li className="skill__title">Other</li>
          {['Docker', 'Traefik', 'Linux', 'SSH', 'Postman'].map(
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
