export function itensDeLista1EstaoEmLista2(
  lista1: unknown[],
  lista2: unknown[]
) {
  for (const searchIng of lista1) {
    if (lista2.includes(searchIng)) {
      return true;
    }
  }
}
