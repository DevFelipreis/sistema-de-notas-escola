import { Aluno } from "./class/Aluno";
import { Professor } from "./class/Professor";


const aluno = new Aluno("Rafael", "Rafael@.com", "123456", [])

aluno.login("123456")

const professor = new Professor("Rafael", "Rafael@.com", "123456", "Matematica")


professor.login("123456")
professor.lancarNota(aluno, 8)
professor.lancarNota(aluno, 9)
professor.lancarNota(aluno, 8)

console.log(aluno.obterMedia());




