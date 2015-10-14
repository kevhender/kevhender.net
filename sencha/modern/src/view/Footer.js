Ext.define('KevHender.view.Footer', {
    extend: 'Ext.Toolbar',
    xtype: 'footer',

    ui: 'footer',

    items: [
        {
            xtype: 'title',
            title: '<a href="index.html?toolkit=classic">Desktop site</a>'
        },
        '->',
        {
            xtype: 'title',
            title: '&copy; ' + (1900 + new Date().getYear()) + ' Kevin Henderson'
        }
    ]
});