/**
 * Store for the Overview info
 */
Ext.define('KevHender.store.Overview', {
    extend: 'Ext.data.Store',

    fields: [
        { name: 'intro', type: 'string' },
        { name: 'services', type: 'auto' },
        { name: 'availability', type: 'auto' },
        { name: 'summary', type: 'string' }
    ],
    autoLoad: true,

    proxy: {
        type: 'ajax',
        url: '../resources/data/Overview.json',
        reader: {
            type: 'json'
        }
    }
});