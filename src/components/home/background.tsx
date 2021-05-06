import React from 'react';
import Link from 'next/link'

const Background: React.FC = () => {
  return (
    <section id="background" className="section space-y-12 sm:space-y-3">
      <div className="w-full md:w-1/4 text-center md:text-left">
          <span className="md:self-start text-xl md:text-2xl lg:text-3xl font-bold font-serif text-dark">
            Background
          </span>
      </div>
      <div className="w-full md:w-2/3 text-center md:text-right self-end space-y-6 mt-5 sm:mt-2">
        <span className="block text-md font-light text-dark">
          I'm currently a Full Stack Developer at AltiView Tech Group LLC
          that works closely with clients to deliver tailor-made solutions.
          Being part of a smaller team has improved credibility and
          problem-solving skills, while keeping teamwork and communication skills sharp when needed.
        </span>
        <span className="block text-md font-light text-dark">
          When I'm not working, I have many side-projects living in my head or in a github repo.
          Besides coding, I like to fill my time with guitar, games, friends, and family.
        </span>
      </div>
      <div>
        <button className="button">
          <Link href={"#skills"}>
            Skills
          </Link>
        </button>
      </div>
    </section>
  )
}

export default Background;
