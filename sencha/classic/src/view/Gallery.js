Ext.define('KevHender.view.Gallery', {
    extend: 'Ext.container.Container',
    requires:[
        'Ext.view.View'
    ],

    xtype: 'app-gallery',
    overflowY: 'auto',

    items: [
        {
            xtype: 'dataview',
            flex: 1,
            store: 'Gallery',
            itemSelector: 'dummy',
            tpl: new Ext.XTemplate(
                '<tpl for=".">',
                    '<table style="width: 100%">',
                        '<tr>',
                            '{[xindex % 2 ? "<td style=\'width: 500px\'><img src=\'../resources/images/" + values.image + ".png\' /></td>" : ""]}',
                            '<td style="vertical-align: top; margin: 10px 50%; padding: 0 10px">',
                                '<h3>{name}</h3>',
                                '<p>{overview}</p>',
                                '<ul>',
                                    '<tpl for="features">',
                                        '<li>{.}</li>',
                                    '</tpl>',
                                '</ul>',
                                '<p>{summary}</p>',
                            '</td>',
                            '{[!(xindex % 2) ? "<td style=\'width: 500px\'><img src=\'../resources/images/" + values.image + ".png\' /></td>" : ""]}',
                        '</tr>',
                        '<tr>',
                            '<td colspan="2">',
                                '{[xindex != xcount ? "<div class=\'divider\' />" : ""]}',
                            '</td>',
                        '</tr>',
                    '</table>',
                '</tpl>'
            )
        }
    ]
});