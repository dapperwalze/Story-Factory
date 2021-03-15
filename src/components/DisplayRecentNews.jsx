import { Component } from "react";
import axios from "axios";
import moment from "moment";
import Skeleton from "react-loading-skeleton";

class DisplayRecentNews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stories: [],
      isLoading: true,
    };
  }

  componentDidMount() {
    axios
      .get(
        ` https://newsapi.org/v2/top-headlines?country=us&pageSize=11&apiKey=5ac19ebba5ab4b77a8bcc990ed0d4b23`
      )
      .then((res) => {
        const stories = res.data.articles;

        this.setState({ stories, isLoading: false });
      })
      .catch(() => console.log());
  }
  render() {
    return this.state.isLoading ? (
      <Skeleton height="200px" width="400px" count="5" />
    ) : (
      this.state.stories.map((story, index) => (
        <div key={index} className="recent-news-container">
          <div className="recent-news-details">
            <p className="recent-news-time">
              {moment(story.publishedAt).startOf("hour").fromNow()}
            </p>
            <h2 className="recent-news-title">
              <a
                target={"_blank"}
                rel={"noreferrer"}
                className="recent-news-title-link"
                href={story.url}
              >
                {story.description}
              </a>
            </h2>
          </div>
        </div>
      ))
    );
  }
}

export default DisplayRecentNews;
