const yeoman = require('yeoman-generator');
const fs = require('fs');
const yosay = require('yosay');

module.exports = yeoman.extend({
    prompting: function() {
        console.log(yosay('Welcome to AngularJS module generator'));
        var done = this.async();
        const prompts = [{
                type: 'input',
                name: 'name',
                message: 'Your module name (e.g. Dashboard or Header)',
                //Defaults to the project's folder name if the input is skipped
                default: this.appname
            },
            {
                type: 'input',
                name: 'id',
                message: 'Your module ID',
                //Defaults to the project's folder name if the input is skipped
                default: this.appname
            }
        ]
        this.prompt(prompts).then(function(answers) {
            this.props = answers;
            done();
        }.bind(this));
    },
    writing: {
        app: function() {
            fs.readdirSync(__dirname + '/templates/_ajs').forEach(file => {
                const regex = /_ajs/gi;
                const nameLC = this.props.name.charAt(0).toLowerCase() + this.props.name.slice(1);
                const moduleName = file.replace(regex, nameLC);
                const destination = nameLC;
                this.fs.copyTpl(
                    this.templatePath(`_ajs/${file}`),
                    this.destinationPath(`${destination}/${moduleName}`), {
                        name: this.props.name,
                        nameLC: nameLC,
                        id: this.props.id
                    }
                );
            });
        }
    }
});
