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

5. Quando se digitar uma tarefa na caixa de texto `tarefa`, e for apertada a tecla enter, o texto escrito seja 
   adicionado na lista `tarefas`

> https://css-tricks.com/snippets/javascript/javascript-keycodes/

```javascript
$("seletor").keypress(function(e) {
  var tecla = e.which;
})
```

6. Quando clicar com o botão da esquerda do mouse em um item da lista, o mesmo deve ter seu fundo destacado.

```javascript
  $(this).css({background: 'lightgrey'});
```

7. Quando clicar com o botao da direita, o item deve ser removido da lista.

```javascript
  e.which == 3 // botao da direita
```

8. Se existirem mais do que 5 tarefas, deve ser exibido um aviso, após o `h1`: **Você possui muitas tarefas!**

```javascript
  $('seletor').append(texto);
```

9. Se houver 5 ou menos tarefas, não deverá ser exibido nenhum aviso.
10. Não permitir tarefas em branco. 
11. Não permita que seja adicionada tarefas repetidas.
12. Se clicar em uma tarefa destacada, ela deverá deixar de estar destacada.




