let valores = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

/*

for (let pos = 0; pos < valores.length; pos++){
    console.log(`Na posição ${pos} tem ${valores[pos]}`)
}
*/

for (let pos in valores) {
    console.log(`Na posição ${pos} tem ${valores[pos]}`)
}