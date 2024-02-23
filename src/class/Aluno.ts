import { Usuario } from "./Usuario";

export class Aluno extends Usuario {
    notas: number[]

    constructor(nome: string, email: string, senha: string, notas: number[]) {
        super(nome, email, senha)
        this.notas = notas
    }

    obterMedia(): string {
        let media = 0

        for (let notas of this.notas) {
            media += notas
        }
        return `Sua média é de  &{media/this.notas.length}`
    }
}