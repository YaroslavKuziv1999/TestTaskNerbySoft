import React, {Component} from 'react';


class AnnouncementFoundItems extends Component {
    render() {
        const {announcement} = this.props;
        return (
            <div>
                <h2>
                    {announcement.title}
                </h2>
                <section>{announcement.description}</section>
            </div>
        )
        
    }
}

export default AnnouncementFoundItems;