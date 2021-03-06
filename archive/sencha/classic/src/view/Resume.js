/**
 * Container for the resume page
 */
Ext.define('KevHender.view.Resume', {
    extend: 'Ext.container.Container',
    requires:[
        'Ext.view.View'
    ],

    xtype: 'app-resume',
    cls: 'app-resume',
    overflowY: 'auto',

    items: [
        {
            xtype: 'dataview',
            store: 'Resume',
            itemSelector: 'dummy',
            tpl: new Ext.XTemplate(
                '<tpl for=".">',
                    '<h3>Overview</h3>',
                    '<ul>',
                        '<tpl for="overview">',
                            '<li>{.}</li>',
                        '</tpl>',
                    '</ul>',
                    '<h3>Technical Skills</h3>',
                    '<table>',
                        '<tpl for="skills">',
                            '<tr>',
                                '<td><h4>{category}</h4></td>',
                                '<td>',
                                    '<tpl for="values">',
                                        '{[xindex != 1 ? ", " : ""]}{.}',
                                    '</tpl>',
                                '</td>',
                            '</tr>',
                        '</tpl>',
                    '</table>',
                    '<h3>Professional Experience</h3>',
                    '<tpl for="experience">',
                        '<table style="width: 100%; margin-bottom: 20px">',
                            '<tr>',
                                '<td><b>{company}</b> ({location})<br/><i>{position}</i></td>',
                                '<td style="text-align: right">{from} - {to}<br/><i>{phone}</i></td>',
                            '</tr>',
                            '<tr>',
                                '<td colspan="2">',
                                    '<p>{overview}</p>',
                                    '<ul>',
                                        '<tpl for="details">',
                                            '<li>{.}</li>',
                                        '</tpl>',
                                    '</ul>',
                                '</td>',
                            '</tr>',
                        '</table>',
                    '</tpl>',
                    '<h3>Education</h3>',
                    '<tpl for="education">',
                        '<table style="width: 100%; margin-bottom: 20px">',
                            '<tr>',
                                '<td><b>{school}</b><br/><i>{location}</i></td>',
                                '<td style="text-align: right; vertical-align: top">{finished}</td>',
                            '</tr>',
                            '<tr>',
                                '<td colspan="2">',
                                    '<p>{diploma}</p>',
                                    '<ul>',
                                        '<li><i>Major:</i> {major}</li>',
                                        '<li><i>Minors:</i> <tpl for="minors">{[xindex != 1 ? ", " : ""]}{.}</tpl></li>',
                                    '</ul>',
                                '</td>',
                            '</tr>',
                        '</table>',
                    '</tpl>',
                '</tpl>'
            )
        }
    ]
});