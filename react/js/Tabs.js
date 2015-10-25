/**
 * Component for the tab navigation
 */
KH.Tab = React.createClass({

    handleClick: function(e){
        e.preventDefault();
        this.props.handleClick();
    },

    render: function() {
        return (
            <li className={this.props.isCurrent ? 'active' : null}>
                <a onClick={this.handleClick} href={this.props.tab}>
                    <span className={'glyphicon glyphicon-' + this.props.icon}></span> {this.props.text}
                </a>
            </li>
        );
    }
});

KH.Tabs = React.createClass({

    tabList: [
        { tab: 'overview', icon: 'home', text: 'Overview' },
        { tab: 'resume', icon: 'file', text: 'Résumé' },
        { tab: 'gallery', icon: 'picture', text: 'Gallery' },
        { tab: 'contact', icon: 'edit', text: 'Contact' }
    ],

    handleClick: function(tab){
        this.props.changeTab(tab);
    },

    render: function() {
        return (
            <ul className="nav nav-pills">
                {this.tabList.map(function(tab) {
                    return (
                        <KH.Tab
                            key={tab.tab}
                            tab={tab.tab}
                            icon={tab.icon}
                            text={tab.text}
                            isCurrent={this.props.currentTab === tab.tab}
                            handleClick={this.handleClick.bind(this, tab)}
                        />
                    );
                }.bind(this))}
            </ul>
        );
    }
});