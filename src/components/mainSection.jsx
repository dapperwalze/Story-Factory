import React, { Component } from 'react';
import OtherStoriesSection from './otherStoriesSection';
import TopStoriesSection from './TopStoriesSection';

class MainSection extends Component{
    render() {
        return (
            <div className="main-section">
                <h2><span id="main-section-header">Main</span> news</h2>
                <div className="main-section-content">
                    <main className="top-stories-container">
                        <div>
                        <TopStoriesSection/>
                        </div>
                        
                    </main>
                    <aside className="side-stories-container">
                        <OtherStoriesSection/>
                    </aside>
                    
                </div>
                
            
            </div>
            
        )
    }
}

export default MainSection;