Ext.define('KevHender.view.Footer', {
    extend: 'Ext.toolbar.Toolbar',
    requires:[
        'Ext.toolbar.TextItem'
    ],

    xtype: 'app-footer',
    ui: 'app-footer',

    items: [
        {
            xtype: 'tbtext',
            text: '<a style="color: white" href="index.html?modern">Mobile site</a>'
        },
        '->',
        {
            xtype: 'tbtext',
            style: 'color: white',
            text: '&copy; ' + (1900 + new Date().getYear()) + ' Kevin Henderson'
        }
    ]
});