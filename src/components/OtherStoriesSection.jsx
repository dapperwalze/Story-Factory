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
        ` https://gnews.io/api/v4/top-headlines?&lang=en&topic=science&token=712316a9fcad1ad4f5cea3a70c5d1d37`
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
        style={{ backgroundImage: `url(${story.image})` }}
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
            <span className="side-stories-author"> - {story.source.name}</span>
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
