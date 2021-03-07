import { Component } from "react";
import axios from "axios";
import moment from "moment";
import OtherStoriesSection from "./OtherStoriesSection";
import TopStoriesBlock from "./TopStoriesBlock";

class MainSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stories: [],
    };
  }

  componentDidMount() {
    axios
      .get(
        ` https://newsapi.org/v2/top-headlines?sources=cnn&apiKey=5ac19ebba5ab4b77a8bcc990ed0d4b23`
      )
      .then((res) => {
        const stories = res.data.articles;

        this.setState({ stories });
      });
  }

  render() {
    return (
      <div className="main-section">
        <h2>
          <span id="main-section-header">Main</span> news
        </h2>
        <div className="main-container">
          <main className="main">
            <div className="top-stories-container">
              {this.state.stories.map((story, index) => (
                <TopStoriesBlock
                  key={index}
                  title={story.title}
                  author={story.author}
                  url={story.url}
                  imageUrl={story.urlToImage}
                  timeStamp={moment(story.publishedAt)
                    .startOf("hour")
                    .fromNow()}
                  target="_blank"
                />
              ))}
            </div>
          </main>
          <aside className="aside">
            <div className="side-stories-container">
              <OtherStoriesSection target="_blank" />
            </div>
          </aside>
        </div>
      </div>
    );
  }
}

export default MainSection;
