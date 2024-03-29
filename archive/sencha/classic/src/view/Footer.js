/**
 * The toolbar for the page footer
 */
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
            text: '<a href="index.html?toolkit=modern">Mobile site</a>'
        },
        '->',
        {
            xtype: 'tbtext',
            style: 'color: white',
            text: '&copy; ' + (1900 + new Date().getYear()) + ' Kevin Henderson'
        }
    ]
});