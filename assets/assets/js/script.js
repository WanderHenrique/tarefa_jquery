$(document).ready(function() {
  // Evento de clique no botão "Adicionar"
  $("#adicionar-tarefa").click(function() {
    // Adiciona a nova tarefa à lista
    const tarefa = $("#nova-tarefa").val();
    $("#tarefas").append(`<li class="list-group-item">${tarefa}</li>`);
    // Limpa o campo de entrada
    $("#nova-tarefa").val("");
  });

  // Evento de clique em uma tarefa
  $("#tarefas li").click(function() {
    // Marca a tarefa como concluída
    $(this).toggleClass("concluido");
  });
});

$(document).ready(function() {
  $('body').css('background-image', [
    'linear-gradient(to bottom, #fff, #f0f0f0)',
    'linear-gradient(to right, #fff, #f0f0f0)',
  ]);
  $('body').css('background-position', [
    'center center',
    'right center',
  ]);
});
