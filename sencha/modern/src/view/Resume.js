Ext.define('KevHender.view.Resume', {
    extend: 'Ext.dataview.DataView',
    xtype: 'resume',
    requires: [

    ],
    config: {
        title: 'Résumé',
        store: 'Resume',

        scrollable: 'vertical',

        styleHtmlContent: true,

        itemTpl: new Ext.XTemplate(
            '<tpl for=".">',
                '<h3>Overview</h3>',
                '<ul>',
                    '<tpl for="overview">',
                        '<li>{.}</li>',
                    '</tpl>',
                '</ul>',
                '<h3>Technical Skills</h3>',
                '<tpl for="skills">',
                    '<h4>{category}</h4>',
                    '<tpl for="values">',
                        '{[xindex != 1 ? ", " : ""]}{.}',
                    '</tpl><br/><br/>',
                '</tpl>',
                '<h3>Professional Experience</h3>',
                '<tpl for="experience">',
                    '{[xindex != 1 ? "<br/>" : ""]}',
                    '<b>{company}</b> ({location})<br/>',
                    '<i>{position}</i><br/>',
                    '{from} - {to}<br/>',
                    '{phone}<br/><br/>',
                    '<p>{overview}</p>',
                    '<ul>',
                        '<tpl for="details">',
                            '<li>{.}</li>',
                        '</tpl>',
                    '</ul>',
                '</tpl>',
                '<h3>Education</h3>',
                '<tpl for="education">',
                    '<b>{school}</b><br/>',
                    '<i>{location}</i><br/>',
                    '{finished}<br/>',
                    '<p>{diploma}</p>',
                    '<ul>',
                        '<li><i>Major:</i> {major}</li>',
                        '<li><i>Minors:</i> <tpl for="minors">{[xindex != 1 ? ", " : ""]}{.}</tpl></li>',
                    '</ul>',
                '</tpl>',
            '</tpl>'
        )
    }
});
