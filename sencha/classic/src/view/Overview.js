Ext.define('KevHender.view.Overview', {
    extend: 'Ext.container.Container',
    requires:[
        'Ext.view.View',
        'Ext.layout.container.HBox'
    ],

    xtype: 'app-overview',
    overflowY: 'auto',

    layout: {
        type: 'hbox',
        align: 'stretch'
    },

    items: [
        {
            xtype: 'dataview',
            store: 'Overview',
            flex: 1,
            itemSelector: 'dummy',
            tpl: new Ext.XTemplate(
                '<tpl for=".">',
                    '<p>{intro}</p>',
                    '<h3 style="text-align: left">Services provided:</h3>',
                    '<ul>',
                        '<tpl for="services">',
                            '<li>{.}</li>',
                        '</tpl>',
                    '</ul>',
                    '<h3 style="text-align: left">Availability:</h3>',
                    '<ul>',
                        '<tpl for="availability">',
                            '<li>{.}</li>',
                        '</tpl>',
                    '</ul>',
                    '<p>{summary}</p>',
                '</tpl>'
            )
        },
        {
            xtype: 'component',
            width: 500,
            height: 700,
            padding: 20,
            margin: 15,
            border: 0,
            html: '<img src="../resources/images/overview.png" />'
        }
    ]
});