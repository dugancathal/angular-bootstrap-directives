['text', 'email', 'tel', 'password'].forEach(function (type) {
angular.module('ui.bootstrap.forms')
  .directive(type + 'Field', function () {
    return {
      restrict: 'E',
      scope: {
        inputLabel: '@inputLabel',
        inputId: '@inputId',
        required: '@required',
        model: '=model'
      },
      template: "<div class='form-group'>" +
        "<label class='control-label'>" +
        "<abbr title='required' ng-show='required'>*</abbr>" +
        "{{inputLabel}}</label>" +
        "<input id='{{inputId}}' class='form-control' type='" + type + "' ng-model='model'/>" +
        "</div>"
    };
  });
});
