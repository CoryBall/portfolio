import React from 'react';

const Background: React.FC = () => {
  return (
    <section id="background" className="section space-y-12 sm:space-y-0">
      <span className="section__title">
        Background
      </span>
      <div className="section__content text-md text-center md:text-left font-semibold text-dark space-y-4">
        <p>
          I'm currently a Full Stack Developer at AltiView Tech Group LLC
          that works closely with clients to deliver tailor-made solutions.
          Being part of a smaller team has improved credibility and
          problem-solving skills, while keeping teamwork and communication skills sharp when needed.
        </p>
        <p>
          When I'm not working, I have many side-projects living either in my head or in a github repo.
          Besides coding, I like to fill my time with guitar, games, friends, and family.
        </p>
      </div>
    </section>
  )
}

export default Background;
