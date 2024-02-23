import { Usuario } from "./Usuario";

export class Professor extends Usuario {
    disciplina: string

    constructor(nome: string, email: string, senha: string, disciplina: string) {
        super(nome, email, senha)
        this.disciplina = disciplina
    }

    private verificarLogin(): void {
        if (!this.logado) {
            throw new Error("Professor não autenticado")
        }
    }
}