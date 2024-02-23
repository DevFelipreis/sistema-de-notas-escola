import { Aluno } from "./Aluno";
import { Usuario } from "./Usuario";

interface IProfessor {
    lancarNota(aluno: Aluno, nota: number): void
}
export class Professor extends Usuario implements IProfessor {
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

    lancarNota(aluno: Aluno, nota: number): void {
        this.verificarLogin()
        aluno.notas.push(nota)
    }
}