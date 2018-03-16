/**
 * ViewController for Contact form
 */
Ext.define('KevHender.view.ContactVC', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.app-contact',

    requires: [
        'Ext.LoadMask'
    ],

    /**
     * Called when the "Send Message" button is clicked on the contact page. Sends email to me!
     * @param {Ext.button.Button} btn The Send Message button
     */
    onSubmit: function(btn) {
        var form = this.getView(),
            values = {},
            fields = form.query('[getValue]'),
            i, len = fields.length;

        for (i = 0; i < len; i++) {
            values[fields[i].name] = fields[i].getValue();
        }

        btn.setDisabled(true);
        form.mask({xtype: 'loadmask', message: 'Loading...'});

        Ext.Ajax.request({
            url: '../sendMail.php',
            params: values,
            success: function(){
                for (i = 0; i < len; i++) {
                    fields[i].setValue();
                }
                form.unmask();
                Ext.Msg.alert('Success!', 'Thank you for your submission, I will get back to you as soon as I can!.', Ext.emptyFn);
            },
            failure: function() {
                form.unmask();
                Ext.Msg.alert('Failure', 'Sorry, there was an error submitting your message.  Please try again later.', Ext.emptyFn);
            }
        });
    }
});