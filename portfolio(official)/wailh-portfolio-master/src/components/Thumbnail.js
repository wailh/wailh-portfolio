import { Link } from 'react-router-dom';
import '.././css-files/components/_thumbnail.css'

const Thumbnail = ({
  id,
  title,
  briefDescription,
  tags,
  thumbnailImgUrl,
  livesite,
  github,
  redux
}) => {
  return (
    <div className={`project-thumbnail project-thumbnail-${id}`}>
      <div className="thumbnail-wrapper" data-aos="fade-left">
        <div className="project-thumbnail-image">
          <a href={livesite} target="_blank" rel="noreferrer">
            <img
              src={thumbnailImgUrl}
              alt={`${title} Thumbnail`}
              loading="lazy"
            />
          </a>
        </div>
        <div className="thumbnail-text">
          <h2 className="project-thumbnail-title">{title}</h2>
          <ul className="tools-list">
            {tags && tags.map((tag, index) => <li key={index}>{tag}</li>)}
          </ul>
          <p className="project-thumbnail-overview">{briefDescription}</p>
          <div className="action-buttons">
            {livesite && (
              <a href={livesite} target="_blank" rel="noreferrer">
                Live Site
              </a>
            )}
            {github && (
              <a href={github} target="_blank" rel="noreferrer">
                GitHub
              </a>
            )}
            {redux && (
              <a href={redux} target="_blank" rel="noreferrer">
                with redux
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Thumbnail;
