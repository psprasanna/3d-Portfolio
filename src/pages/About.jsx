import React from "react";
import { skills } from "../constants";

const About = () => {
    console.log(skills)
    return (
        <section className="max-container">
            <h1 className="head-text">
                Hello, I'm <span className="blue-gradient_text font-semibold drop-shadow">Prasanna</span>
            </h1>

            <div className="mt-5 flex flex-col gap-3 text-slate-500">
                <p>specializing in Full Stack Development with hands-on experience in building dynamic and scalable web applications. I work across both front-end and back-end development, focusing on creating efficient, scalable, and high-performing applications. Always eager to learn new technologies, I strive to stay up-to-date with industry trends and continuously improve my skill set.</p>
            </div>

            <div className="py-10 flex flex-col">
                <h3 className="subhead-text">My Skills</h3>

                <div className="mt-16 flex flex-wrap gap-12">
                    {skills.map((skill) => (
                        <div className="block-container w-20 h-20"> 
                            <div className="btn-back rounded-xl" />
                            <div className="btn-front rounded-xl flex justify-center items-center">
                                <img 
                                    src={skill.imageUrl} 
                                    alt={skill.name}
                                    className="w-1/2 h-1/2 object-contain"
                                />   
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default About;