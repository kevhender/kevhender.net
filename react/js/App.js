/**
 * Main file for overall app
 */
var App = React.createClass({

    getInitialState: function () {
        return {
            currentTab: 'overview'
        };
    },

    changeTab: function(tab){
        this.setState({ currentTab: tab.tab });
    },

    render: function() {
        return (
            <div className="container theme-showcase">
                <div className="jumbotron">
                    <h1>Kevin Henderson</h1>
                    <h2>JavaScript consultant &nbsp;&middot;&nbsp; ExtJS, AngularJS, ReactJS, and more</h2>

                    <KH.Tabs changeTab={this.changeTab} currentTab={this.state.currentTab} />

                </div>

                { this.state.currentTab === 'overview' ? <KH.Overview /> : null}
                { this.state.currentTab === 'resume' ? <KH.Resume /> : null}
                { this.state.currentTab === 'gallery' ? <KH.Gallery /> : null}
                { this.state.currentTab === 'contact' ? <KH.Contact /> : null}

                <KH.Footer />
            </div>
        );
    }
});

ReactDOM.render(
    <App />,
    document.getElementById('app-content')
);