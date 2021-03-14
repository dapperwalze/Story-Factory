import { Component } from "react";
import axios from "axios";
import moment from "moment";

class OtherStoriesSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stories: [],
    };
  }

  componentDidMount() {
    axios
      .get(
        ` https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=5ac19ebba5ab4b77a8bcc990ed0d4b23`
      )
      .then((res) => {
        const stories = res.data.articles;

        this.setState({ stories });
      });
  }

  render() {
    return this.state.stories.map((story, index) => (
      <div
        key={index}
        className="side-stories"
        style={{ backgroundImage: `url(${story.urlToImage})` }}
      >
        <div className="side-stories-details">
          <h2 className="side-stories-title">
            <a
              target={this.props.target}
              className="side-stories-title-link"
              href={story.url}
            >
              {story.title}
            </a>
            <span className="side-stories-author"> - {story.author}</span>
          </h2>
          <p className="side-stories-time">
            {moment(story.publishedAt).startOf("hour").fromNow()}
          </p>
        </div>
      </div>
    ));
  }
}

export default OtherStoriesSection;
