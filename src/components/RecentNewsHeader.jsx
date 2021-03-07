const RecentNewsHeader = (props) => {
  const { recentNewsHeader } = props;
  return (
    <div className="recent-news-header">
      <h2>{recentNewsHeader}</h2>
    </div>
  );
};

export default RecentNewsHeader;
