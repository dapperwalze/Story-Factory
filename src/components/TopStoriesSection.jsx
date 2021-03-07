import React, { Component } from 'react';

class TopStories extends Component{
    render() {
        return (
            <div className="top-stories">
                <div className="top-stories-details">
                    <h2 className="top-story-title"><a className="top-story-title-link" href="#"> Lorem ipsum blah blah blah</a><span className="top-story-author"> - John Doe</span></h2>
                    <p className="top-story-time">3 hours Ago</p>

                </div>

            </div>
        )
    }
}

export default TopStories;