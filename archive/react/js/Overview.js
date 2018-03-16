/**
 * Components for the Overview tab
 */
KH.OverviewServices = React.createClass({
    render: function() {
        return (
            <ul>
                {this.props.services.map(function(service, index) {
                    return (
                        <li key={index} dangerouslySetInnerHTML={{__html: service}}></li>
                    );
                }.bind(this))}
            </ul>
        );
    }
});

KH.OverviewAvailability = React.createClass({
    render: function() {
        return (
            <ul>
                {this.props.availability.map(function(avail, index) {
                    return (
                        <li key={index}>{avail}</li>
                    );
                }.bind(this))}
            </ul>
        );
    }
});

KH.OverviewProfiles = React.createClass({
    render: function() {
        return (
            <ul>
                {this.props.profiles.map(function(profile, index) {
                    return (
                        <li key={index}><b>{profile.site}:</b> <a href={profile.url} target="_blank">{profile.url}</a></li>
                    );
                }.bind(this))}
            </ul>
        );
    }
});

KH.Overview = React.createClass({

    getInitialState: function () {
        return {
            overview: {
                services: [],
                availability: [],
                otherProfiles: []
            }
        };
    },

    componentDidMount: function() {
        $.get('../resources/data/Overview.json', function(result) {
            if (this.isMounted()) {
                this.setState({
                    overview: $.parseJSON(result)[0]
                });
            }
        }.bind(this));
    },

    render: function() {
        return (
            <div className="kh-overview">
                <div>
                    <p>{this.state.overview.intro}</p>
                    <h3 className="kh-overview-header">Services provided:</h3>
                    <KH.OverviewServices services={this.state.overview.services} />

                    <h3 className="kh-overview-header">Availability:</h3>
                    <KH.OverviewAvailability availability={this.state.overview.availability} />

                    <h3 className="kh-overview-header">Also find me on:</h3>
                    <KH.OverviewProfiles profiles={this.state.overview.otherProfiles} />

                    <p>{this.state.overview.summary}</p>
                </div>
                <div className="kh-overview-image">
                    <img src="../resources/images/overview.png" />
                </div>
            </div>

        );
    }
});