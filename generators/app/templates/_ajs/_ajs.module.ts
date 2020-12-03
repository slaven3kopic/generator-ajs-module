import <%= name %>Ctrl from './<%= name %>.controller';
import <%= name %> from './<%= name %>.directive';
import <%= name %>Service from './<%= name %>.service';

const <%= name %>Module = angular
    .module('<%= id %>', [])
    .controller(<%= name %>Ctrl.CTRL_NAME, <%= name %>Ctrl)
    .directive('<%= nameLC %>', <%= name %>)
    .service('<%= nameLC %>Service', <%= name %>Service)
    .name;

export default <%= name %>Module;

