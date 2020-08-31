function ordena(ordem, entrada) {
  if (isValid(ordem) && isValid(entrada)) {
    // Organiza similares
    const mapa = entrada.reduce((mapa, e) => {
      const outros = mapa.get(e.id) || [];
      outros.push(e);
      mapa.set(e.id, outros);
      return mapa;
    }, new Map());

    // Ordena
    return ordem.reduce(
      (ordenado, o) => (mapa.get(o) ? ordenado.concat(mapa.get(o)) : ordenado),
      []
    );
  } else return [];
}

function isValid(array) {
  return array && array instanceof Array && array.length > 0;
}
module.exports = { ordena };
