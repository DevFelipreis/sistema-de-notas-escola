export abstract class Usuario {
    nome: string;
    email: string;
    protected senha: string;
    protected logado: boolean;

    constructor(nome: string, email: string, senha: string) {
        this.nome = nome;
        this.email = email;
        this.senha = senha;
        this.logado = false;
    }

    login(senha: string): void {
        if (this.senha === senha) {
            this.logado = true;
        } else {
            this.logado = false;
            throw new Error("Senha incorreta");
        }
    }
}