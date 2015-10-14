Ext.define('KevHender.view.Gallery', {
    extend: 'Ext.dataview.DataView',
    xtype: 'gallery',
    requires: [

    ],
    config: {
        title: 'Gallery',
        store: 'Gallery',

        scrollable: 'vertical',

        styleHtmlContent: true,

        listeners: {
            initialize: function(p) {
                var images = p.element.query('img'),
                    i,
                    length = images.length,
                    width = Ext.getBody().getWidth() - 40;
                for (i=0; i<length; i++)
                {
                    Ext.fly(images[i]).setWidth(width)
                }
            }
        },

        itemTpl: new Ext.XTemplate(
            '<tpl for=".">',
                '<div style="max-width: {[Ext.getBody().getWidth() - 40]}px">',
                '<h3>{name}</h3>',
                '<p>{overview}</p>',
                '<ul>',
                    '<tpl for="features">',
                        '<li>{.}</li>',
                    '</tpl>',
                '</ul>',
                '<p>{summary}</p>',
                '<img src="../resources/images/{image}.png" style="padding-top: 1em; max-width: {[Ext.getBody().getWidth() - 40]}px"/>',
                '<br/><br/><br/>',
                '</div>',
            '</tpl>'
        )
    }
});
