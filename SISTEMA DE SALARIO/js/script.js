class Funcionario {
    constructor(nome, salarioBase) {
        this.nome = nome;
        this.salarioBase = salarioBase;
    }

    calcularSalario() {
        return this.salarioBase;
    }
}

class Gerente extends Funcionario {
    calcularSalario() {
        return this.salarioBase * 1.20; // salarioBase + 20%
    }
}

class Desenvolvedor extends Funcionario {
    calcularSalario() {
        return this.salarioBase * 1.10; // salarioBase + 10%
    }
}

class Departamento {
    constructor(nome) {
        this.nome = nome;
        this.funcionarios = []; // vetor de funcionários
    }

    adicionarFuncionario(funcionario) {
        this.funcionarios.push(funcionario);
    }

    calcularTotalSalarios() {
        let total = 0;
        for (let f of this.funcionarios) {
            total += f.calcularSalario();
        }
        return total;
    }

    // Desafio: listar funcionários e seus salários calculados
    listarFuncionarios() {
        console.log(`Funcionários do departamento ${this.nome}:`);
        for (let f of this.funcionarios) {
            console.log(`- ${f.nome} (${f.constructor.name}): R$ ${f.calcularSalario()}`);
        }
    }
}

// Criando os funcionários
let g = new Gerente("Ana", 5000);
let d = new Desenvolvedor("Carlos", 4000);

// Criando o departamento e adicionando os funcionários
let ti = new Departamento("TI");
ti.adicionarFuncionario(g);
ti.adicionarFuncionario(d);

// Resultados
console.log(`O salário do gerente ${g.nome} é R$ ${g.calcularSalario()}`);
console.log(`O salário do desenvolvedor ${d.nome} é R$ ${d.calcularSalario()}`);

ti.listarFuncionarios();
console.log(`Total de salários do departamento: R$ ${ti.calcularTotalSalarios()}`);