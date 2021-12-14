import { IWork } from "../data/data";

interface ExperienceProps {
    data: IWork[];
}

const Experience = ({ data }: ExperienceProps) => {
    return (
        <>
            <h3>職歴</h3>
            <article className="Experience">
                {
                    data.map((work, index) => (
                        <div key={`work_${index}`} className="Experience-work">
                            <div className="Experience-work-title">
                                <h5 className="Experience-work-position">{work.title}</h5>
                                <span className="Experience-work-duration">{work.duration}</span>
                            </div>
                            <div className="Experience-work-place">
                            <h6 className="Experience-work-company">{work.company}</h6>
                            </div>
                            {<div className="Experience-work-description">{work.description}
                            </div>}
                            {/* <div className="Experience-work-stack">
                                {work.stack.map((tool, index) => (
                                    <div className="Experience-work-tool" key={`tool_${index}`} >
                                        <img src={tool.icon} />
                                        <span>{tool.name}</span>
                                    </div>
                                ))}
                            </div> */}
                        </div>
                    ))
                }
            </article>
            <style jsx>
                {`
                    .Experience {
                        display: flex;
                        flex-direction: column;    
                        padding: 0 1rem;
                    }
                    .Experience-work {
                        display: flex;
                        flex-direction: column;
                        padding: 1.5rem 0;
                        border-bottom: 1px solid rgba(200,200,200, .2);
                    }
                    .Experience-work:first-child{
                        padding-top: 0;
                    }
                    .Experience-work-title {
                        display: flex;
                        align-items: baseline;
                    }

                    .Experience-work-duration {
                        font-size: 1rem;
                        margin: 0 1rem
                        opacity: .5;
                        margin-left: 1rem;
                    }

                    .Experience-work-place {
                        display: flex;
                        align-items: center;
                        margin: .5rem 0;
                    }

                    .Experience-work-place img {
                        max-height: 45px;
                        max-width: 100px;
                        justify-self: center
                    }

                    .Experience-work-place div {
                        display: flex;
                        flex-direction: column;
                        margin-left: 1rem;
                    }

                    .Experience-work-stack{
                        display: flex;
                        flex-wrap: wrap;
                        margin-top: 0.qrem;
                    }

                    .Experience-work-tool{
                        display: flex;
                        align-items: center;
                        margin: .5rem 1rem;
                    }

                    .Experience-work-tool img{
                        width: 20px;
                        margin-right: 0.5rem;
                    }
                `}
            </style>
        </>
    );
}

export default Experience;