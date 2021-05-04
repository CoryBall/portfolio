import React from 'react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="section space-y-12 sm:space-y-0">
      <div className="w-full md:w-1/4 text-center md:text-left">
        <span className="md:self-start text-xl md:text-2xl lg:text-3xl font-bold font-serif text-dark">
          Experience
        </span>
      </div>
      <div className="w-full md:w-2/3 text-center md:text-right self-end">
        <span className="text-md font-light text-dark">
          In Progress
        </span>
      </div>
      <a className="bg-info text-white font-semibold text-xl py-2 px-4 rounded-md self-center text-center" href="mailto:coryball97@gmail.com" target="_blank" title="email">
        Email
      </a>
    </section>
  )
}

export default Experience;
