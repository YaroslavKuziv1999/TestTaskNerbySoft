import React, {Component} from 'react';

class Announcement extends Component { 
    render() {
        const {announcement} = this.props;
        return (
            <div>
                <h2>
                    {announcement.title}
                </h2>
            </div>
        )
    }
}

export default Announcement;