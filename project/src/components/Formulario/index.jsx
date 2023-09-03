import React, { Component } from 'react';
import styles from './Formulario.module.css';

class Forms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      etapa: 1,
      nomeCompleto: '',
      matricula: '',
      curso: '',
      professor: '',
      conhecimentoProfessor: '',
      disponibilidadeProfessor: '',
      empatiaProfessor: '',
      qualidadeEnsino: '',
      observacoesProfessor: '',
      disciplina: '',
      relevanciaDisciplina: '',
      justicaTarefas: '',
      recursosDidaticos: '',
      contribuicaoAprendizado: '',
      observacoesDisciplina: '',
      cursoAvaliado: '',
      organizacaoCurso: '',
      atendeExpectativas: '',
      qualidadeRecursos: '',
      suporteAdministrativo: '',
      recomendariaCurso: '',
      observacoesCurso: '',
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  proximaEtapa = () => {
    this.setState((prevState) => ({ etapa: prevState.etapa + 1 }));
  };

  etapaAnterior = () => {
    this.setState((prevState) => ({ etapa: prevState.etapa - 1 }));
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('Dados do formulário:', this.state);
  };

  render() {
    const { etapa } = this.state;

    return (
      <div className={styles.formulario}>
        <h1>Formulário de Avaliação</h1>
        <form onSubmit={this.handleSubmit}>
          <div className={styles.etapa}>
            {etapa === 1 && <h2>Etapa 1: Informações do Aluno</h2>}
            {etapa === 2 && <h2>Etapa 2: Avaliação do Professor</h2>}
            {etapa === 3 && <h2>Etapa 3: Avaliação de Disciplinas</h2>}
            {etapa === 4 && <h2>Etapa 4: Avaliação de Cursos</h2>}
            {etapa === 1 && (
              <>
                <label>
                  Nome Completo:
                  <input type="text" name="nomeCompleto" value={this.state.nomeCompleto} onChange={this.handleInputChange} />
                </label>
                <label>
                  Matrícula:
                  <input type="text" name="matricula" value={this.state.matricula} onChange={this.handleInputChange} />
                </label>
                <label>
                  Curso que Frequenta:
                  <input type="text" name="curso" value={this.state.curso} onChange={this.handleInputChange} />
                </label>
              </>
            )}
            {etapa === 2 && (
              <>
                <label>
                  Qual é o nome do professor que você está avaliando:
                  <select name="professor" value={this.state.professor} onChange={this.handleInputChange}>
                    <option value="" disabled>Selecione um professor</option>
                    <option value="Alan Silva">Alan Silva</option>
                    <option value="Carlos Estevão">Carlos Estevão</option>
                    <option value="Edson Cavalcante">Edson Cavalcante</option>
                    <option value="Eutino Sirqueira">Eutino Sirqueira</option>
                    <option value="Felipe Gonçalves">Felipe Gonçalves</option>
                    <option value="Karl Alelaf">Karl Alelaf</option>
                  </select>
                </label>
                <label>
                  Como você avaliaria o conhecimento do professor sobre o assunto:
                  <select name="conhecimentoProfessor" value={this.state.conhecimentoProfessor} onChange={this.handleInputChange}>
                    <option value="" disabled>Selecione uma opção</option>
                    <option value="Excelente">Excelente</option>
                    <option value="Bom">Bom</option>
                    <option value="Ruim">Ruim</option>
                    <option value="Pessimo">Pessimo</option>
                  </select>
                </label>
                <label>
                  Como você avaliaria a disponibilidade do professor para tirar dúvidas e fornecer suporte adicional:
                  <select name="disponibilidadeProfessor" value={this.state.disponibilidadeProfessor} onChange={this.handleInputChange}>
                    <option value="" disabled>Selecione uma opção</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </label>
                <label>
                  O professor demonstrou empatia e respeito pelos alunos:
                  <select name="empatiaProfessor" value={this.state.empatiaProfessor} onChange={this.handleInputChange}>
                    <option value="" disabled>Selecione uma opção</option>
                    <option value="Sim, sempre">Sim, sempre</option>
                    <option value="Às vezes">Às vezes</option>
                    <option value="Raramente">Raramente</option>
                    <option value="Não, nunca">Não, nunca</option>
                  </select>
                </label>
                <label>
                  Em geral, como você avaliaria a qualidade do ensino fornecido por este professor:
                  <select name="qualidadeEnsino" value={this.state.qualidadeEnsino} onChange={this.handleInputChange}>
                    <option value="" disabled>Selecione uma opção</option>
                    <option value="Excelente">Excelente</option>
                    <option value="Bom">Bom</option>
                    <option value="Ruim">Ruim</option>
                    <option value="Pessimo">Pessimo</option>
                  </select>
                </label>
                <label>
                  Observações sobre o Professor (opcional):
                  <textarea name="observacoesProfessor" value={this.state.observacoesProfessor} onChange={this.handleInputChange}></textarea>
                </label>
              </>
            )}
            {etapa === 3 && (
              <>
                <label>
                  Qual é o nome da disciplina que você está avaliando:
                  <select name="disciplina" value={this.state.disciplina} onChange={this.handleInputChange}>
                    <option value="" disabled>Selecione uma disciplina</option>
                    <option value="Disciplina 1">Disciplina 1</option>
                    <option value="Disciplina 2">Disciplina 2</option>
                  </select>
                </label>
                <label>
                  Em uma escala de 1 a 5, como você avaliaria a relevância desta disciplina para o seu programa de estudos:
                  <select name="relevanciaDisciplina" value={this.state.relevanciaDisciplina} onChange={this.handleInputChange}>
                    <option value="" disabled>Selecione uma opção</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </label>
                <label>
                  As avaliações e tarefas dessa disciplina foram justas e apropriadas:
                  <select name="justicaTarefas" value={this.state.justicaTarefas} onChange={this.handleInputChange}>
                    <option value="" disabled>Selecione uma opção</option>
                    <option value="Sim">Sim</option>
                    <option value="Não">Não</option>
                    <option value="Parcialmente">Parcialmente</option>
                  </select>
                </label>
                <label>
                  Como você avaliaria os recursos didáticos utilizados no curso (livros, materiais online, etc.):
                  <select name="recursosDidaticos" value={this.state.recursosDidaticos} onChange={this.handleInputChange}>
                    <option value="" disabled>Selecione uma opção</option>
                    <option value="Excelente">Excelente</option>
                    <option value="Bom">Bom</option>
                    <option value="Satisfatório">Satisfatório</option>
                    <option value="Ruim">Ruim</option>
                    <option value="Pessimo">Pessimo</option>
                  </select>
                </label>
                <label>
                  Você sentiu que esta disciplina contribuiu positivamente para o seu aprendizado:
                  <select name="contribuicaoAprendizado" value={this.state.contribuicaoAprendizado} onChange={this.handleInputChange}>
                    <option value="" disabled>Selecione uma opção</option>
                    <option value="Sim">Sim</option>
                    <option value="Não">Não</option>
                    <option value="Parcialmente">Parcialmente</option>
                  </select>
                </label>
                <label>
                  Observações sobre a Disciplina (opcional):
                  <textarea name="observacoesDisciplina" value={this.state.observacoesDisciplina} onChange={this.handleInputChange}></textarea>
                </label>
              </>
            )}
            {etapa === 4 && (
              <>
                <label>
                  Qual é o nome do curso que você está avaliando:
                  <select name="cursoAvaliado" value={this.state.cursoAvaliado} onChange={this.handleInputChange}>
                    <option value="" disabled>Selecione um curso</option>
                    <option value="Análise e Desenvolvimento de Sistemas">Análise e Desenvolvimento de Sistemas</option>
                    <option value="Física">Física</option>
                    <option value="Gestão Ambiental">Gestão Ambiental</option>
                    <option value="Matemática">Matemática</option>
                  </select>
                </label>
                <label>
                  Como você avaliaria a organização geral do curso e sua estrutura curricular:
                  <select name="organizacaoCurso" value={this.state.organizacaoCurso} onChange={this.handleInputChange}>
                    <option value="" disabled>Selecione uma opção</option>
                    <option value="Boa">Boa</option>
                    <option value="Excelente">Excelente</option>
                    <option value="Satisfatória">Satisfatória</option>
                    <option value="Ruim">Ruim</option>
                    <option value="Pessima">Pessima</option>
                  </select>
                </label>
                <label>
                  O curso atendeu às suas expectativas e objetivos de aprendizado:
                  <select name="atendeExpectativas" value={this.state.atendeExpectativas} onChange={this.handleInputChange}>
                    <option value="" disabled>Selecione uma opção</option>
                    <option value="Sim">Sim</option>
                    <option value="Não">Não</option>
                    <option value="Parcialmente">Parcialmente</option>
                  </select>
                </label>
                <label>
                  Como você classificaria a qualidade das instalações e recursos disponíveis para o curso:
                  <select name="qualidadeRecursos" value={this.state.qualidadeRecursos} onChange={this.handleInputChange}>
                    <option value="" disabled>Selecione uma opção</option>
                    <option value="Excelente">Excelente</option>
                    <option value="Bom">Bom</option>
                    <option value="Satisfatório">Satisfatório</option>
                    <option value="Ruim">Ruim</option>
                    <option value="Pessimo">Pessimo</option>
                  </select>
                </label>
                <label>
                  O suporte administrativo e acadêmico fornecido durante o curso foi satisfatório:
                  <select name="suporteAdministrativo" value={this.state.suporteAdministrativo} onChange={this.handleInputChange}>
                    <option value="" disabled>Selecione uma opção</option>
                    <option value="Sim">Sim</option>
                    <option value="Não">Não</option>
                    <option value="Parcialmente">Parcialmente</option>
                  </select>
                </label>
                <label>
                  Você recomendaria este curso para outros estudantes:
                  <select name="recomendariaCurso" value={this.state.recomendariaCurso} onChange={this.handleInputChange}>
                    <option value="" disabled>Selecione uma opção</option>
                    <option value="Sim">Sim</option>
                    <option value="Não">Não</option>
                  </select>
                </label>
                <label>
                  Observações sobre o Curso(opcional):
                  <textarea name="observacoesCurso" value={this.state.observacoesCurso} onChange={this.handleInputChange}></textarea>
                </label>
              </>
            )}
  
            <button type="button" onClick={this.etapaAnterior} disabled={etapa === 1}>Etapa Anterior</button>
            {etapa < 4 && <button type="button" onClick={this.proximaEtapa}>Próxima Etapa</button>}
            {etapa === 4 && <button type="submit">Enviar Avaliação</button>}
          </div>
        </form>
      </div>
    );
  }
}

export default Forms;
