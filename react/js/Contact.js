/**
 * Components for the Contact tab
 */
KH.Contact = React.createClass({

    submitForm: function(e) {
        console.log('here')
    },

    render: function() {
        return (
            <button onClick={this.submitForm} className="btn btn-default">Send Message</button>
        );
    }
});