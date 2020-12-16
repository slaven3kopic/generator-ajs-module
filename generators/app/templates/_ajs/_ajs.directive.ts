import { IDirective } from 'angular';

import <%= name %>Ctrl from './<%= name %>.controller';

export default function <%= name %>(): IDirective {
    return {
        restrict: 'A',
        controller: <%= name %>Ctrl,
        controllerAs: '<%= nameLC %>Ctrl',
        templateUrl: './<%= name %>.html'
    };
}
