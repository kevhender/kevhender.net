Ext.define('KevHender.store.Resume', {
    extend: 'Ext.data.Store',

    fields: [
        { name: 'overview', type: 'auto' },
        { name: 'experience', type: 'auto' },
        { name: 'skills', type: 'auto' },
        { name: 'education', type: 'auto' }
    ],
    autoLoad: true,

    proxy: {
        type: 'ajax',
        url: '../resources/data/Resume.json',
        reader: {
            type: 'json'
        }
    }
});