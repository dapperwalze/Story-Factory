import React, { Component } from 'react';

class OtherStoriesSection extends Component{
    render() {
        return (
            <div className="side-stories">
                <div className="side-stories-details">
                    <h2 className="side-stories-title"><a className="side-stories-title-link" href="#"> Lorem ipsum blah blah blah </a><span className="side-stories-author"> - John Doe</span></h2>
                    <p className="side-stories-time">1 hour Ago</p>

                </div>

            </div>
        )
    }
}

export default OtherStoriesSection;