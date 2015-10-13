Ext.define('KevHender.view.Contact', {
    extend: 'Ext.form.Panel',
    requires:[
        'Ext.form.field.Text',
        'Ext.form.field.TextArea',
        'Ext.form.FieldContainer'
    ],

    xtype: 'app-contact',
    overflowY: 'auto',

    border: 0,
    bodyBorder: 0,
    bodyPadding: 15,

    defaults: {
        xtype: 'textfield',
        labelAlign: 'top'
    },

    items: [
        {
            fieldLabel: 'Your Name',
            name: 'fromName',
            width: 250
        },
        {
            fieldLabel: 'Your Email',
            name: 'fromEmail',
            width: 250
        },
        {
            fieldLabel: 'Subject',
            name: 'subject',
            width: 600
        },
        {
            xtype: 'textarea',
            name: 'message',
            fieldLabel: 'Message',
            width: 600,
            height: 200
        },
        {
            xtype: 'button',
            width: 200,
            scale: 'medium',
            text: 'Send Message'
        }
    ]
});