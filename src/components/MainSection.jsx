import { Component } from "react";
import axios from "axios";
import moment from "moment";
import OtherStoriesSection from "./OtherStoriesSection";
import TopStoriesBlock from "./TopStoriesBlock";
import Skeleton from "react-loading-skeleton";

class MainSection extends Component {
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
        ` https://newsapi.org/v2/top-headlines?sources=cnn&apiKey=5ac19ebba5ab4b77a8bcc990ed0d4b23`
      )
      .then((res) => {
        const stories = res.data.articles;

        this.setState({ stories, isLoading: false });
      })
      .catch(() => console.log());
  }

  render() {
    return (
      <div className="main-section">
        <h2>
          <span id="main-section-header">Main</span> news
        </h2>
        <div className="main-container">
          <main className="main">
            {this.state.isLoading ? (
              <>
                <Skeleton height={"350px"} />
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(2, 1fr)",
                    gridGap: "20px",
                    width: "100%",
                    marginTop: "20px",
                  }}
                >
                  <Skeleton height={"200px"} width="100%" />
                  <Skeleton height={"200px"} width="100%" />
                  <Skeleton height={"200px"} width="100%" />
                  <Skeleton height={"200px"} width="100%" />
                </div>
              </>
            ) : (
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
            )}
          </main>
          <aside className="aside">
            <div className="side-stories-container">
              {this.state.isLoading ? (
                <Skeleton height="200px" width="400px" count="4" />
              ) : (
                <OtherStoriesSection target="_blank" />
              )}
            </div>
          </aside>
        </div>
      </div>
    );
  }
}

export default MainSection;
