(function () {
  'use strict';

  angular
    .module('app.util', ['datatables'])
    .service('UtilService', UtilService);

  /** @ngInject */
  function UtilService(DTOptionsBuilder) {
    this.getCommonTableConfig = function () {
        return DTOptionsBuilder.newOptions()
                 .withDOM('<"top"f>rt<"bottom"<"left"<"length"l>><"right"<"info"i><"pagination"p>>>')
                 .withPaginationType('full_numbers')
                 .withLanguage({
                   "sEmptyTable": "No hay Registros",
                   "sInfo": /*"Mostrando _START_ a _END_ de _TOTAL_ registros"*/ "",
                   "sInfoEmpty": /*"No hay Registros"*/ "",
                   "sInfoFiltered": /*"(filtered from _MAX_ total entries)"*/ "",
                   "sInfoPostFix": "",
                   "sInfoThousands": ",",
                   "sLengthMenu": "Mostrar _MENU_ registros",
                   "sLoadingRecords": "Cargando...",
                   "sProcessing": "Procesando...",
                   "sSearch": "Buscar:",
                   "sZeroRecords": "No hay Registros",
                   "oPaginate": {
                     "sFirst": "Primero",
                     "sLast": "&Uacute;ltimo",
                     "sNext": "Siguiente",
                     "sPrevious": "Atr&aacute;s"
                   },
                   "oAria": {
                     "sSortAscending": ": activate to sort column ascending",
                     "sSortDescending": ": activate to sort column descending"
                   }
                 });
    };
  }
})();