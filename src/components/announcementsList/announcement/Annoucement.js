import React, {Component} from 'react';

class Announcement extends Component { 
    render() {
        const {announcement} = this.props;
        return (
            <div className="card">
                <h2 className="card-header">
                    {announcement.title}
                </h2>
            </div>
        )
    }
}

export default Announcement;