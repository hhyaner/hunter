import React, { Component } from 'react';
import ViewModeUtil from '../../utils/ViewModeUtil';

class ViewMode extends Component {
    constructor(props) {
        super(props);

        this.toggleMode = this.toggleMode.bind(this);

        this.state = {
            mode: props.mode || ViewModeUtil.mode
        };
    }

    toggleMode() {
       const mode = ViewModeUtil.toggleMode();

       this.setState({
           mode
       });

       const { onChange } = this.props;
       onChange && onChange(mode);
    }

    render() {
        return (
            <div className="view-type" onClick={this.toggleMode}>
                <div>{this.state.mode}</div>
            </div>
        )
    }
}

export default ViewMode;