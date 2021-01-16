import React, {Component} from 'react';


class AnnouncementFoundItems extends Component {
    render() {
        const {announcement} = this.props;
        return (
            <div className="card">
                <h2 className="card-header">
                    {announcement.title}
                </h2>
                <div className="card-body">
                    <section className="card-text">{announcement.description}</section>
                </div>
            </div>
        )
        
    }
}

export default AnnouncementFoundItems;