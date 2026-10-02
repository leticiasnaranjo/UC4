// Aqui combinaremos duas classes

class Autor{
    // O metodo constructor - monta o objeto 
    constructor(nome, nacionalidade){
        this.nome= nome
        this.nacionalidade = nacionalidade
    }

    // o metodo apresentar (lembrando que funções dentro de classe sao chamadas de 'metodos')
    apresentar(){
    
        console.log("Sou " + this.nome + " e sou " + this.nacionalidade)
    }
}

class Livro{
    constructor(titulo, ano, autor){
        this.titulo = titulo
        this.autor = autor
        this.ano = ano
        this.genero =genero
    }
    mostrarInformacoes(){
        // interpolação = mostrar variaveis  no meio da string
        // usamos acento grave no lugar de aspas
        // e para mostrar a variavel usamos : ${}
        console.log(`Titulo ${this.titulo}`)
        console.log(`Ano ${this.ano}`)
        console.log(`Autor ${this.autor.nome} - ${this.autor.nacionalidade}`) 
        console.log(`Genero ${this.genero}`)
    }
}


// criando objetos da classe
let autor1 = new Autor ("JK  Rowling", "Britânica")


let autor2 = new Autor ("Brandon Sanderson", "Norte Americano")


let livro1 = new Livro("Harry Potter e o Prisioneiro de Askaban", 2000, autor1, "Fantasia")
let livro2 = new Livro ("O Chamado do Cuco", 2013, autor1, "Misterio")
let livro3 = new Livro("O Caminho dos Reis", 2010, autor2, "Fantasia")


autor1.apresentar()
livro1.mostrarInformacoes()
livro2.mostrarInformacoes()
livro3.mostrarInformacoes()