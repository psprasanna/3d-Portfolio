
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { skills, experiences } from "../constants";

const About = () => {
    console.log(skills)
    return (
        <section className="max-container">
            <h1 className="head-text">
                Hello, I'm <span className="blue-gradient_text font-semibold drop-shadow">Prasanna</span>
            </h1>

            <div className="mt-5 flex flex-col gap-3 text-slate-500">
                <p>Software Engineer based in India, specializing in Full Stack Development with hands-on experience in building dynamic and scalable web applications. I work across both front-end and back-end development, focusing on creating efficient, scalable, and high-performing applications. Always eager to learn new technologies, I strive to stay up-to-date with industry trends and continuously improve my skill set.</p>
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

            <div className="py-16">
                <h3 className="subhead-text">Work Experience</h3>
                <div className="mt-5 flex flex-col gap-3 text-slate-500">
                    <p>I've worked with companies, leveling up my skills and teaming up with smart people. Here's the rundown:</p>
                </div>

                <div className="mt-12 flex">
                    {/* <VerticalTimeline>
                        {experiences.map((experience) => (
                            <VerticalTimelineElement 
                                key={experience.company_name}
                                date={experience.date}
                                icon={<div>
                                    <img 
                                        src={experience.icon} 
                                        alt= {experience.company_name} 
                                        className='w-[60%] h-[60%] object-contain'
                                    />
                                </div>}
                                iconStyle={{ background: experience.iconBg}}
                                contentStyle={{
                                    borderBottom: '8px',
                                    borderStyle: 'solid',
                                    borderBottomColor: experience.iconBg,
                                    boxShadow: 'none',
                                }}
                            >
                                <div>
                                    <h3 className="text-black text-xl font-poppins">
                                        {experience.title}
                                    </h3>
                                    <p className='text-black-500 font-medium font-base' style={{ margin:0}}>
                                        {experience.company_name}
                                    </p>
                                </div>

                                <ul className='my-5 list-disc ml-5 space-y-2'>
                                    {experience.points.map((point, index) => (
                                        <li key={`experience-point-${index}`}className="text-black-500/50 font-normal pl-1 text-sm">

                                        </li>
                                    ))}
                                </ul>
                            </VerticalTimelineElement>
                        ))}
                    </VerticalTimeline> */}
                    <div className="relative border-l-2 border-gray-300 ml-4">
                        {experiences.map((exp, index) => (
                            <div key={index} className="mb-8 ml-6">
                            <div
                                className="absolute w-4 h-4 bg-blue-500 rounded-full -left-2 border border-white"
                                style={{ backgroundColor: exp.iconBg }}
                            />
                            <h3 className="text-xl font-semibold">{exp.title}</h3>
                            <p className="text-gray-500">{exp.company_name}</p>
                            <p className="text-sm text-gray-400 mb-2">{exp.date}</p>
                            <ul className="list-disc ml-4 text-gray-600">
                                {exp.points.map((point, i) => (
                                <li key={i}>{point}</li>
                                ))}
                            </ul>
                            </div>
                        ))}
                    </div>

                </div>
            </div>

            <hr className='border-slate-200'/>
        </section>
    )
}

export default About;