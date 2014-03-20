angular.module('ui.bootstrap.forms')
  .directive('checkboxField', function () {
    return {
      restrict: 'E',
      scope: {
        inputLabel: '@inputLabel',
        inputId: '@inputId',
        model: '=model'
      },
      template: "<div class='checkbox'>" +
        "<label>" +
        "<input type='checkbox' ng-model='model' id='{{inputId}}'/> {{inputLabel}}" +
        "</label>" +
        "</div>"
    }
  });
