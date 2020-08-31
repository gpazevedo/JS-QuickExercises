# Ordenação por Chave de Array segundo outro Array

Sort a data array of objects according to an order criteria array.

## Descrição

Ordenação de um array de entrada atendendo a ordem estipulada pelos elementos em outro array de ordenação.
O array retornado deve conter todos os elementos do array de entrada na seguinte ordem: todos os elementos com CHAVE (id) de mesmo valor do primeiro elemento do array de ordenação, depois todos com CHAVE(id) de mesmo valor do próximo elemento do array de ordenação e assim sucessivamente.

## Solução

No primeiro passo o programa agrupa os elementos da entrada, de acordo com seu campo CHAVE(id).
No segundo passo o array de saida é produzido na sequência dos elementos do array de ordenção:
para cada elemento do array de ordenação, acrescentamos ao array de saida, os elementos do array de entrada que pertencem ao grupo correspondente a CHAVE(id), de acordo com os grupos gerados no primeiro passo.
