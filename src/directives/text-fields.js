angular.module('ui.bootstrap.forms')
  .directive('emailField', function () {
    return {
      restrict: 'E',
      scope: {
        inputLabel: '@inputLabel',
        inputId: '@inputId',
        model: '=model'
      },
      template: "<div class='form-group'>" +
        "<label class='control-label'>{{inputLabel}}</label>" +
        "<input id='{{inputId}}' class='form-control' type='email' ng-model='model'/>" +
        "</div>"
    };
  })
  .directive('passwordField', function () {
    return {
      restrict: 'E',
      scope: {
        inputLabel: '@inputLabel',
        inputId: '@inputId',
        model: '=model'
      },
      template: "<div class='form-group'>" +
        "<label class='control-label'>{{inputLabel}}</label>" +
        "<input id='{{inputId}}' class='form-control' type='password' ng-model='model'/>" +
        "</div>"
    };
  })
  .directive('telField', function () {
    return {
      restrict: 'E',
      scope: {
        inputLabel: '@inputLabel',
        inputId: '@inputId',
        model: '=model'
      },
      template: "<div class='form-group'>" +
        "<label class='control-label'>{{inputLabel}}</label>" +
        "<input id='{{inputId}}' class='form-control' type='tel' ng-model='model'/>" +
        "</div>"
    };
  })
  .directive('textField', function () {
    return {
      restrict: 'E',
      scope: {
        inputLabel: '@inputLabel',
        inputId: '@inputId',
        model: '=model'
      },
      template: "<div class='form-group'>" +
        "<label class='control-label'>{{inputLabel}}</label>" +
        "<input id='{{inputId}}' class='form-control' type='text' ng-model='model'/>" +
        "</div>"
    };
  });
