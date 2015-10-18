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
                '<div style="max-width: {[Ext.getBody().getWidth() - 40]}px">',
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
                    '<h3 style="text-align: left">Also find me on:</h3>',
                    '<ul>',
                        '<tpl for="otherProfiles">',
                            '<li><b>{site}:</b> <a href="{url}" target="_blank">{url}</a></li>',
                        '</tpl>',
                    '</ul>',
                    '<p>{summary}</p>',
                '</div>',
            '</tpl>'
        )
    }
});
