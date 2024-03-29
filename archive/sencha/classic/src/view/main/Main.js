/**
 * This class is the main view for the application.
 */
Ext.define('KevHender.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'KevHender.view.Overview',
        'KevHender.view.Resume',
        'KevHender.view.Gallery',
        'KevHender.view.Contact',

        'KevHender.view.Footer'
    ],

    ui: 'navigation',

    tabBarHeaderPosition: 1,
    titleRotation: 0,
    tabRotation: 0,

    padding: '20 60',

    header: {
        layout: {
            type: 'vbox'
        },
        title: {
            text: '<h1>Kevin Henderson</h1><h2>JavaScript consultant &nbsp;&middot;&nbsp; ExtJS, Sencha Touch, AngularJS, and more</h2>',
            flex: 0
        }
    },

    tabBar: {
        flex: 1,
        layout: {
            align: 'stretch',
            overflowHandler: 'none'
        }
    },

    dockedItems: [
        {
            xtype: 'app-footer',
            dock: 'bottom'
        }
    ],

    responsiveConfig: {
        tall: {
            headerPosition: 'top'
        },
        wide: {
            //headerPosition: 'left'
            headerPosition: 'top'
        }
    },

    defaults: {
        bodyPadding: 20,
        tabConfig: {
            plugins: 'responsive',
            width: 170,
            margin: 15,
            responsiveConfig: {
                wide: {
                    iconAlign: 'left',
                    textAlign: 'center'
                },
                tall: {
                    iconAlign: 'left',
                    textAlign: 'center'
                }
                //TODO: Responsive config
                //tall: {
                //    iconAlign: 'top',
                //    textAlign: 'center',
                //    width: 120
                //}
            }
        }
    },

    items: [
        {
            xtype: 'app-overview',
            title: 'Overview',
            iconCls: 'fa-home'
        },
        {
            xtype: 'app-resume',
            title: 'Résumé',
            iconCls: 'fa-file-text-o'
        },
        {
            xtype: 'app-gallery',
            title: 'Gallery',
            iconCls: 'fa-picture-o'
        },
        {
            xtype: 'app-contact',
            title: 'Contact',
            iconCls: 'fa-pencil-square-o'
        }
    ]
});
