Ext.define('KevHender.view.Contact', {
    extend: 'Ext.form.Panel',
    xtype: 'contact',
    requires: [

    ],
    config: {
        title: 'Contact',

        defaults: {
            xtype: 'textfield',
            labelAlign: 'top'
        },

        items: [
            {
                label: 'Your Name',
                name: 'fromName'
            },
            {
                label: 'Your Email',
                name: 'fromEmail'
            },
            {
                label: 'Subject',
                name: 'subject'
            },
            {
                xtype: 'textareafield',
                label: 'Message',
                name: 'message'
            },
            {
                xtype: 'button',
                ui: 'kevhender',
                width: 200,
                scale: 'medium',
                text: 'Send Message',
                margin: '10 0 0 0'
            }
        ]
    }
});
