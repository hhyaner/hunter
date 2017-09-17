import React, { Component } from 'react';
import Crumb from '../../components/crumb';
import ViewModeUtil from '../../utils/ViewModeUtil';
import ViewMode from '../../components/view-mode';

class Home extends Component {
    constructor(props) {
        super(props);

        this.handleViewModeChange = this.handleViewModeChange.bind(this);

        this.state = {
            mode: ViewModeUtil.mode
        };
    }

    handleViewModeChange(mode) {
        this.setState({
            mode
        });
    }

    render() {
        const { match } = this.props;
        const { mode } = this.state;
        
        return (
            <div className="home">
                <div className="head">
                    <Crumb />
                    <div className="search"></div>
                    <ViewMode onChange={this.handleViewModeChange} />
                </div>
                <div className="file-list-box">
                    <h2>Home {match.params.id} VIEWMODE  {mode}</h2>
                </div>
            </div>
        )
    }
}

// search
// viewType

export default Home;
