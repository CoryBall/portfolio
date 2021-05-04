import React from 'react';
import Link from 'next/link'

const Skills: React.FC = () => {
  return (
    <section id="skills" className="section space-y-12 sm:space-y-0">
      <div className="w-full md:w-1/4 text-center md:text-left">
          <span className="md:self-start text-xl md:text-2xl lg:text-3xl font-bold font-serif text-dark">
            Skills
          </span>
      </div>
      <div className="flex w-full md:w-2/3 text-center md:text-right self-end justify-between">
        <div className="w-1/3">
          Languages
        </div>
        <div className="w-1/3">
          Frameworks
        </div>
        <div className="w-1/3">
          Tools
        </div>
      </div>
      <button className="button mt-6">
        <Link href={"#experience"}>
          Experience
        </Link>
      </button>
    </section>
  )
}
//
// const HeaderText: React.FC<{label: string}> = ({label}) => {
//   return (
//     <div>
//
//     </div>
//   )
// }

export default Skills;
