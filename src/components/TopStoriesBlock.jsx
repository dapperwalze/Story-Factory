const TopStoriesBlock = (props) => {
  const { url, imageUrl, title, author, timeStamp, target } = props;
  return (
    <div className="top-story" style={{ backgroundImage: `url(${imageUrl})` }}>
      <div className="top-story-details">
        <h2 className="top-story-title">
          <a className="top-story-title-link" target={target} href={url}>
            {title}
          </a>

          <span className="top-story-author"> - {author}</span>
        </h2>
        <p className="top-story-time">{timeStamp}</p>
      </div>
    </div>
  );
};

export default TopStoriesBlock;
