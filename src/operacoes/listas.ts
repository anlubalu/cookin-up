export function itensDeLista1EstaoEmLista2(
  lista1: unknown[],
  lista2: unknown[]
) {
  // console.log(lista1);
  // console.log(lista2);

  return lista1.every((itemLista1) => {
    // console.log(itemLista1);

    if (lista2.includes(itemLista1)) {
      break;
    }
  });
}
