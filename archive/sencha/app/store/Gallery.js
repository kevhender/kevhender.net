/**
 * Store for the Gallery info
 */
Ext.define('KevHender.store.Gallery', {
    extend: 'Ext.data.Store',

    fields: [
        { name: 'name', type: 'string' },
        { name: 'features', type: 'auto' },
        { name: 'summary', type: 'auto' },
        { name: 'image', type: 'string' }
    ],
    autoLoad: true,

    proxy: {
        type: 'ajax',
        url: '../resources/data/Gallery.json',
        reader: {
            type: 'json'
        }
    }
});