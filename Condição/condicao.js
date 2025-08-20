function podeDirigir(idade) {
    if (idade >= 18) {
        console.log("Você pode dirigir!");
    } else {
        console.log("Você NÃO pode dirigir!");
    }
}

// Testando a função
podeDirigir(20); // Vai mostrar "Você pode dirigir!"
podeDirigir(15); // Vai mostrar "Você NÃO pode dirigir!"
