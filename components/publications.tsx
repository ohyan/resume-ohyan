import { IPublication } from "../data/data";

interface PublicationProps {
    data: IPublication[];
}

const Publications = ({ data }: PublicationProps) => {
    return (
        <>
            <h3> 外部発信 </h3>
            <article className="Publication">
                {
                    data.map((entity, index) => (
                        <div key={`entity_${index}`} className="Publication-entity">
                            <div className="Publication-entity-place">
                                <h6 className="Publication-entity-title">{entity.title}</h6>
                            </div>
                            <a href={entity.link}>{entity.link}</a>
                        </div>
                    ))
                }
            </article>
            <style jsx>
                {`
                    .Publication {
                        display: flex;
                        flex-direction: column;
                        border-bottom: 1px solid rgba(200,200,200, .2);
                        padding: 0 1rem;
                        padding-bottom: 3rem;    
                    }

                    .Publication-entity {
                        margin: 1rem 0;
                    }

                    .Publication-entity-title {
                        margin-left: 0rem;
                    }

                `}
            </style>
        </>
    );
}

export default Publications;
