/**
 * Components for the Gallery tab
 */

KH.ProjectDescription = React.createClass({
    render: function() {
        return (
            <div className="kh-gallery-description">
                <h3>{this.props.project.name}</h3>
                <p>{this.props.project.overview}</p>
                <ul>
                    {this.props.project.features.map(function(feature, index) {
                        return (
                            <li key={index}>{feature}</li>
                        );
                    }.bind(this))}
                </ul>
                <p dangerouslySetInnerHTML={{__html: this.props.project.summary}}></p>
            </div>
        );
    }
});

KH.Project = React.createClass({
    render: function() {
        return (
            <div className={'kh-project ' + (this.props.isLast ? '' : 'kh-tr-divider')}>
                {
                    this.props.isEven ? null :
                        <div className="kh-gallery-image">
                            <img src={'../resources/images/' + this.props.project.image + '.png'} />
                        </div>
                }
                <KH.ProjectDescription project={this.props.project} />
                {
                    !this.props.isEven ? null :
                        <div className="kh-gallery-image">
                            <img src={'../resources/images/' + this.props.project.image + '.png'} />
                        </div>
                }
            </div>
        );
    }
});

KH.Gallery = React.createClass({

    getInitialState: function () {
        return {
            projects: []
        };
    },

    componentDidMount: function() {
        $.get('../resources/data/Gallery.json', function(result) {
            if (this.isMounted()) {
                this.setState({
                    projects: $.parseJSON(result)
                });
            }
        }.bind(this));
    },

    render: function() {
        return (
            <div>
                {this.state.projects.map(function(project, index) {
                    return (
                        <KH.Project
                            key={project.image}
                            project={project}
                            isEven={index % 2}
                            isLast={index === this.state.projects.length - 1}
                        />
                    );
                }.bind(this))}
            </div>
        );
    }
});