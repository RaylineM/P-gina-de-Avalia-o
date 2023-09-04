import React, { Component } from 'react';
import styles from './Formulario.module.css';

class Forms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      etapa: 1,
      nome_completo: '',
      matricula: '',
      curso: '',
      professor: '',
      conhecimento_professor: '',
      disponibilidade_professor: '',
      empatia_professor: '',
      qualidade_ensino: '',
      observacoes_professor: '',
      disciplina: '',
      relevancia_disciplina: '',
      justica_tarefas: '',
      recursos_didaticos: '',
      contribuicao_aprendizado: '',
      observacoes_disciplina: '',
      curso_avaliado: '',
      organizacao_curso: '',
      atende_expectativas: '',
      qualidade_recursos: '',
      suporte_administrativo: '',
      recomendaria_curso: '',
      observacoes_curso: '',
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
                  <input type="text" name="nome_completo" value={this.state.nomeCompleto} onChange={this.handleInputChange} />
                </label>
                <label>
                  Matrícula:
                  <input type="text" name="matricula" value={this.state.matricula} onChange={this.handleInputChange} />
                </label>
                <label>
                  Curso que Frequenta:
                  <select name="curso_frequenta" value={this.state.cursoFrequenta} onChange={this.handleInputChange}>
                    <option value="" disabled>Selecione um curso</option>
                    <option value="ADS">Análise e Desenvolvimento de Sistemas</option>
                    <option value="Fis">Física</option>
                    <option value="GAb">Gestão Ambiental</option>
                    <option value="Mat">Matemática</option>
                  </select>
                </label>
              </>
            )}
            {etapa === 2 && (
              <>
                <label>
                  Qual é o nome do professor que você está avaliando:
                  <select name="professor" value={this.state.professor} onChange={this.handleInputChange}>
                    <option value="" disabled>Selecione um professor</option>
                    <option value="prof1">Alan Silva</option>
                    <option value="prof2">Carlos Estevão</option>
                    <option value="prof3">Edson Cavalcante</option>
                    <option value="prof4">Eutino Sirqueira</option>
                    <option value="prof5">Felipe Gonçalves</option>
                    <option value="prof6">Karl Alelaf</option>
                  </select>
                </label>
                <label>
                  Como você avaliaria o conhecimento do professor sobre o assunto:
                  <select name="conhecimento_professor" value={this.state.conhecimentoProfessor} onChange={this.handleInputChange}>
                    <option value="" disabled>Selecione uma opção</option>
                    <option value="Excelente">Excelente</option>
                    <option value="Bom">Bom</option>
                    <option value="Ruim">Ruim</option>
                    <option value="Pessimo">Pessimo</option>
                  </select>
                </label>
                <label>
                  Como você avaliaria a disponibilidade do professor para tirar dúvidas e fornecer suporte adicional:
                  <select name="disponibilidade_professor" value={this.state.disponibilidadeProfessor} onChange={this.handleInputChange}>
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
                  <select name="empatia_professor" value={this.state.empatiaProfessor} onChange={this.handleInputChange}>
                    <option value="" disabled>Selecione uma opção</option>
                    <option value="Sim">Sim, sempre</option>
                    <option value="as_vezes">Às vezes</option>
                    <option value="Raramente">Raramente</option>
                    <option value="nunca">Não, nunca</option>
                  </select>
                </label>
                <label>
                  Em geral, como você avaliaria a qualidade do ensino fornecido por este professor:
                  <select name="qualidade_ensino" value={this.state.qualidadeEnsino} onChange={this.handleInputChange}>
                    <option value="" disabled>Selecione uma opção</option>
                    <option value="Excelente">Excelente</option>
                    <option value="Bom">Bom</option>
                    <option value="Ruim">Ruim</option>
                    <option value="Pessimo">Pessimo</option>
                  </select>
                </label>
                <label>
                  Observações sobre o Professor (opcional):
                  <textarea name="observacoes_professor" value={this.state.observacoesProfessor} onChange={this.handleInputChange}></textarea>
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
                  <select name="relevancia_disciplina" value={this.state.relevanciaDisciplina} onChange={this.handleInputChange}>
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
                  <select name="justica_tarefas" value={this.state.justicaTarefas} onChange={this.handleInputChange}>
                    <option value="" disabled>Selecione uma opção</option>
                    <option value="Sim">Sim</option>
                    <option value="No">Não</option>
                    <option value="Parcialmente">Parcialmente</option>
                  </select>
                </label>
                <label>
                  Como você avaliaria os recursos didáticos utilizados no curso (livros, materiais online, etc.):
                  <select name="recursos_didaticos" value={this.state.recursosDidaticos} onChange={this.handleInputChange}>
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
                  <select name="contribuicao_aprendizado" value={this.state.contribuicaoAprendizado} onChange={this.handleInputChange}>
                    <option value="" disabled>Selecione uma opção</option>
                    <option value="Sim">Sim</option>
                    <option value="Nao">Não</option>
                    <option value="Parcialmente">Parcialmente</option>
                  </select>
                </label>
                <label>
                  Observações sobre a Disciplina (opcional):
                  <textarea name="observacoes_disciplina" value={this.state.observacoesDisciplina} onChange={this.handleInputChange}></textarea>
                </label>
              </>
            )}
            {etapa === 4 && (
              <>
                <label>
                  Qual é o nome do curso que você está avaliando:
                  <select name="curso_avaliado" value={this.state.cursoAvaliado} onChange={this.handleInputChange}>
                    <option value="" disabled>Selecione um curso</option>
                    <option value="ADS">Análise e Desenvolvimento de Sistemas</option>
                    <option value="Fis">Física</option>
                    <option value="GAb">Gestão Ambiental</option>
                    <option value="Mat">Matemática</option>
                  </select>
                </label>
                <label>
                  Como você avaliaria a organização geral do curso e sua estrutura curricular:
                  <select name="organizacao_curso" value={this.state.organizacaoCurso} onChange={this.handleInputChange}>
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
                  <select name="atende_expectativas" value={this.state.atendeExpectativas} onChange={this.handleInputChange}>
                    <option value="" disabled>Selecione uma opção</option>
                    <option value="Sim">Sim</option>
                    <option value="Nao">Não</option>
                    <option value="Parcialmente">Parcialmente</option>
                  </select>
                </label>
                <label>
                  Como você classificaria a qualidade das instalações e recursos disponíveis para o curso:
                  <select name="qualidade_recursos" value={this.state.qualidadeRecursos} onChange={this.handleInputChange}>
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
                  <select name="suporte_administrativo" value={this.state.suporteAdministrativo} onChange={this.handleInputChange}>
                    <option value="" disabled>Selecione uma opção</option>
                    <option value="Sim">Sim</option>
                    <option value="Nao">Não</option>
                    <option value="Parcialmente">Parcialmente</option>
                  </select>
                </label>
                <label>
                  Você recomendaria este curso para outros estudantes:
                  <select name="recomendaria_curso" value={this.state.recomendariaCurso} onChange={this.handleInputChange}>
                    <option value="" disabled>Selecione uma opção</option>
                    <option value="Sim">Sim</option>
                    <option value="Nao">Não</option>
                  </select>
                </label>
                <label>
                  Observações sobre o Curso(opcional):
                  <textarea name="observacoes_curso" value={this.state.observacoesCurso} onChange={this.handleInputChange}></textarea>
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
