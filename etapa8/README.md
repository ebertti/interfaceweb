# Etapa 08 - JavaScript 3

Exemplo para aula:

* https://ebertti.github.io/interfaceweb/etapa8
* https://ebertti.github.io/interfaceweb/etapa8/exercicio.html

## Exercício

Utilizar o arquivo `exercicio.html` como base e escrever as modificações no arquivo `exercicio.js`

> Não esqueça de deixar o console do chrome aberto, ele é seu melhor amigo.

1. Baixe os arquivos abaixo para uma pasta local em seu computador.

  * etapa8/exercicio.html
  * etapa8/exercicio.js

2. Adicione a referência para o `jquery` e o nosso script `exercicio.js` no html

  ```html
  <script src="exercicio.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
  ```

3. Prepare o script para ser executado apenas depois da página ser carregada.

  ```javascript
  $(function(){ /*...*/ });
  ```

4. Exiba o input depois de 100ms que a página foi carregada.

  ```javascript
  setTimeout(callback, tempo);
  ```

5. Crie uma função que recebera uma `texto` e criará um elemento na lista de `tarefas`.

6. Quando se digitar uma tarefa na caixa de texto `tarefa`, e for apertada a tecla enter, deverá chamar a função do item anterior.

  > https://css-tricks.com/snippets/javascript/javascript-keycodes/

  ```javascript
  $("seletor").keypress(function(e) {
    var tecla = e.which;
  })
  ```

7. Quando clicar com o botão da esquerda do mouse em um item da lista, o mesmo deve ter seu fundo destacado.

  ```javascript
    $(this).css({background: 'lightgrey'});
  ```

8. Quando clicar com o botao do meio, o item deve ser removido da lista.

  ```javascript
    e.which == 2 // botao da direita
  ```

9. Se existirem mais do que 5 tarefas, deve ser exibido um aviso, após o `h1`: **Você possui muitas tarefas!**

  ```javascript
    $('seletor').append(texto);
  ```

10. Se houver 5 ou menos tarefas, não deverá ser exibido nenhum aviso.

11. Não permitir tarefas em branco.

12. Não permita que seja adicionada tarefas repetidas.

13. Se clicar em uma tarefa destacada, ela deverá deixar de estar destacada.




