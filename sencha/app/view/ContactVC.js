/**
 * ViewController for Contact form
 */
Ext.define('KevHender.view.ContactVC', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.app-contact',

    onSubmit: function(btn) {
        var form = this.getView(),
            values = {},
            fields = form.query('[getValue]'),
            i, len = fields.length;

        for (i = 0; i < len; i++) {
            values[fields[i].name] = fields[i].getValue();
        }

        btn.setDisabled(true);
        form.setLoading(true);

        Ext.Ajax.request({
            url: '../sendMail.php',
            params: values,
            success: function(){
                form.getForm().reset();
                form.setLoading(false);
                Ext.Msg.alert('Success!', 'Thank you for your submission, I will get back to you as soon as I can!.', Ext.emptyFn);
            },
            failure: function() {
                form.setLoading(false);
                Ext.Msg.alert('Failure', 'Sorry, there was an error submitting your message.  Please try again later.', Ext.emptyFn);
            }
        });
    }
});