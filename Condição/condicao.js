function podeDirigir(idade) {
    if (idade >= 18) {
        console.log("Você pode dirigir!");//alterado frase 01
    } else {
        console.log("Você NÃO pode dirigir!");//alterado frase 02
    }
}

// Testando a função
podeDirigir(20); // Vai mostrar "Você pode dirigir!"
podeDirigir(15); // Vai mostrar "Você NÃO pode dirigir!"
