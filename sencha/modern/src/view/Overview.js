/**
 * Container for the overview page
 */
Ext.define('KevHender.view.Overview', {
    extend: 'Ext.dataview.DataView',
    xtype: 'overview',
    requires: [

    ],
    config: {
        title: 'Overview',
        store: 'Overview',

        scrollable: 'vertical',

        styleHtmlContent: true,

        itemTpl: new Ext.XTemplate(
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
    }
});
