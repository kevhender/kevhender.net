/**
 * Container for the overview page
 */
Ext.define('KevHender.view.Overview', {
    extend: 'Ext.container.Container',
    requires:[
        'Ext.view.View',
        'Ext.layout.container.HBox'
    ],

    xtype: 'app-overview',
    overflowY: 'auto',

    items: [
        {
            xtype: 'dataview',
            store: 'Overview',
            flex: 1,
            itemSelector: 'dummy',
            tpl: new Ext.XTemplate(
                '<tpl for=".">',
                    '<div style="display: flex; flex-direction: row">',
                        '<div>',
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
                        '<div style="flex: 450px">',
                            '<img src="../resources/images/overview.png" />',
                        '</div>',
                    '</div>',
                '</tpl>'
            )
        }
    ]
});