/**
 * Components for the Contact tab
 */
KH.Contact = React.createClass({

    getInitialState: function () {
        return {};
    },

    submitForm: function(e) {
        var values = {
            fromName: this.refs.fromName.value,
            fromEmail: this.refs.fromEmail.value,
            subject: this.refs.subject.value,
            message: this.refs.message.value
        };

        e.preventDefault();
        document.getElementById('sendMessageButton').disabled = true;
        $.ajax({
            url: '../sendMail.php',
            type: 'POST',
            data: values,
            success: function() {
                this.setState({});
                alert('Thank you for your submission, I will get back to you as soon as I can!.');
            }.bind(this),
            error: function() {
                alert('Sorry, there was an error submitting your message.  Please try again later.');
            }.bind(this)
        });
    },

    render: function() {
        return (
            <form onSubmit={this.submitForm}>
                <div className="form-group">

                    <label htmlFor="fromName">Your Name</label>
                    <input type="text" ref="fromName" id="fromName" className="form-control" placeholder="Your Name" value={this.state.fromName} />

                    <label htmlFor="fromEmail">Your Email</label>
                    <input type="text" ref="fromEmail" id="fromEmail" className="form-control" placeholder="Your Email" value={this.state.fromEmail} />

                    <label htmlFor="subject">Subject</label>
                    <input type="text" ref="subject" id="subject" className="form-control" placeholder="Subject" value={this.state.subject} />

                    <label htmlFor="message">Message</label>
                    <textarea ref="message" id="message" className="form-control" placeholder="Your Message" value={this.state.message}></textarea>

                    <button type="submit" className="btn btn-default" id="sendMessageButton">Send Message</button>

                </div>
            </form>
        );
    }
});