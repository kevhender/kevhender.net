/**
 * This class is the main view for the application for Modern toolkit.
 */
Ext.define('KevHender.view.main.Main', {
    extend: 'Ext.Container',
    xtype: 'app-main',

    layout: 'vbox',

    requires: [
        'KevHender.view.Overview',
        'KevHender.view.Resume',
        'KevHender.view.Gallery',
        'KevHender.view.Contact'
    ],

    items: [
        {
            xtype: 'titlebar',
            dock: 'top',
            title: 'Kevin Henderson'
        },
        {
            xtype: 'tabpanel',
            flex: 1,

            defaults: {
                tab: {
                    iconAlign: 'top'
                },
                styleHtmlContent: true
            },

            tabBarPosition: 'bottom',

            items: [
                {
                    xtype: 'overview',
                    title: 'Overview',
                    iconCls: 'x-fa fa-home'
                },
                {
                    xtype: 'resume',
                    title: 'Résumé',
                    iconCls: 'x-fa fa-file-text-o'
                },
                {
                    xtype: 'gallery',
                    title: 'Gallery',
                    iconCls: 'x-fa fa-picture-o'
                },
                {
                    xtype: 'contact',
                    title: 'Contact',
                    iconCls: 'x-fa fa-pencil-square-o'
                }
            ]
        }
    ]
});
