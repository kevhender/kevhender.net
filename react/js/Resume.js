/**
 * Components for the Resume tab
 */
KH.ResumeOverview = React.createClass({
    render: function() {
        return (
            <ul>
                {this.props.overview.map(function(bullet, index) {
                    return (
                        <li key={index}>{bullet}</li>
                    );
                }.bind(this))}
            </ul>
        );
    }
});

KH.ResumeSkills = React.createClass({
    render: function() {
        return (
            <table>
                <tbody>
                    {this.props.skills.map(function(skill, index) {
                        return (
                            <tr key={index}>
                                <td><h4>{skill.category}</h4></td>
                                <td>
                                    {skill.values.map(function(value, index) {
                                        return (
                                            <span key={index}>
                                                {value + (index === (skill.values.length - 1) ? '' : ', ')}
                                            </span>
                                        );
                                    }.bind(this))}
                                </td>
                            </tr>
                        );
                    }.bind(this))}
                </tbody>
            </table>
        );
    }
});

KH.ResumeExperience = React.createClass({
    render: function() {
        return (
            <div>
                {this.props.experience.map(function(job, index) {
                    return (
                        <table key={index} className="kh-resume-table">
                            <tbody>
                                <tr>
                                    <td><b>{job.company}</b> ({job.location})<br/><i>{job.position}</i></td>
                                    <td className="kh-resume-job-info">{job.from} - {job.to}<br/><i>{job.phone}</i></td>
                                </tr>
                                <tr>
                                    <td colSpan="2">
                                        <p>{job.overview}</p>
                                        <ul>
                                            {job.details ? job.details.map(function(detail, index) {
                                                return (
                                                    <li key={index}>{detail}</li>
                                                );
                                            }.bind(this)) : null}
                                        </ul>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    );
                }.bind(this))}
            </div>
        );
    }
});

KH.ResumeEducation = React.createClass({
    render: function() {
        return (
            <div>
                {this.props.education.map(function(school, index) {
                    return (
                        <table key={index} className="kh-resume-table">
                            <tbody>
                                <tr>
                                    <td><b>{school.school}</b><br/><i>{school.location}</i></td>
                                    <td className="kh-resume-school-date">{school.finished}</td>
                                </tr>
                                <tr>
                                    <td colSpan="2">
                                        <p>{school.diploma}</p>
                                        <ul>
                                            <li><i>Major:</i> {school.major}</li>
                                            <li>
                                                <i>Minors: </i>
                                                {school.minors.map(function(minor, index) {
                                                    return (
                                                        <span key={index}>{minor + (index === (school.minors.length - 1) ? '' : ', ')}</span>
                                                    );
                                                }.bind(this))}
                                            </li>
                                        </ul>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    );
                }.bind(this))}
            </div>
        );
    }
});

KH.Resume = React.createClass({

    getInitialState: function () {
        return {
            resume: {
                overview: [],
                skills: [],
                experience: [],
                education: []
            }
        };
    },

    componentDidMount: function() {
        $.get('../resources/data/Resume.json', function(result) {
            if (this.isMounted()) {
                this.setState({
                    resume: $.parseJSON(result)[0]
                });
            }
        }.bind(this));
    },

    render: function() {
        return (
            <div>
                <h3>Overview</h3>
                <KH.ResumeOverview overview={this.state.resume.overview} />

                <h3>Technical Skills</h3>
                <KH.ResumeSkills skills={this.state.resume.skills} />

                <h3>Professional Experience</h3>
                <KH.ResumeExperience experience={this.state.resume.experience} />

                <h3>Education</h3>
                <KH.ResumeEducation education={this.state.resume.education} />
            </div>
        );
    }
});