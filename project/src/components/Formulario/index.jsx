import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './Formulario.module.css';

function Forms() {
  const [etapa, setEtapa] = useState(1);
  const [formData, setFormData] = useState({
    etapa: 1,
    nome_completo: '',
    matricula: '',
    curso_frequenta: '',
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
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const verificar_campos_obrigatorios = (campos) => {
    for (const campo of campos) {
      if (!formData[campo]) {
        return false;
      }
    }
    return true;
  };

  const proxima_etapa = () => {
    const campos_obrigatorios = {
      1: ['nome_completo', 'matricula', 'curso_frequenta'],
      2: [
        'professor',
        'conhecimento_professor',
        'disponibilidade_professor',
        'empatia_professor',
        'qualidade_ensino',
      ],
      3: [
        'disciplina',
        'relevancia_disciplina',
        'justica_tarefas',
        'recursos_didaticos',
        'contribuicao_aprendizado',
      ],
      4: [
        'curso_avaliado',
        'organizacao_curso',
        'atende_expectativas',
        'qualidade_recursos',
        'suporte_administrativo',
        'recomendaria_curso',
      ],
    };

    const campos = campos_obrigatorios[etapa];
    if (!verificar_campos_obrigatorios(campos)) {
      toast.error('Preencha todos os campos obrigatórios desta etapa.', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      return;
    }

    setEtapa(etapa + 1);
  };

  const etapa_anterior = () => {
    setEtapa(etapa - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Dados do formulário:', formData);
  };

  return (
    <div className={styles.formulario}>
      <h1>Formulário de Avaliação</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.etapa}>
          {etapa === 1 && <h2>Etapa 1: Informações do Aluno</h2>}
          {etapa === 2 && <h2>Etapa 2: Avaliação do Professor</h2>}
          {etapa === 3 && <h2>Etapa 3: Avaliação de Disciplinas</h2>}
          {etapa === 4 && <h2>Etapa 4: Avaliação de Cursos</h2>}
          {etapa === 1 && (
            <>
              <label>
                Nome Completo:
                <input
                  type="text"
                  name="nome_completo"
                  value={formData.nome_completo}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                Matrícula:
                <input
                  type="text"
                  name="matricula"
                  value={formData.matricula}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                Curso que Frequenta:
                <select
                  name="curso_frequenta"
                  value={formData.curso_frequenta}
                  onChange={handleInputChange}
                >
                  <option value="" disabled>
                    Selecione um curso
                  </option>
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
                <select
                  name="professor"
                  value={formData.professor}
                  onChange={handleInputChange}
                >
                  <option value="" disabled>
                    Selecione um professor
                  </option>
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
                <select
                  name="conhecimento_professor"
                  value={formData.conhecimento_professor}
                  onChange={handleInputChange}
                >
                  <option value="" disabled>
                    Selecione uma opção
                  </option>
                  <option value="Excelente">Excelente</option>
                  <option value="Bom">Bom</option>
                  <option value="Ruim">Ruim</option>
                  <option value="Pessimo">Pessimo</option>
                </select>
              </label>
              <label>
                Como você avaliaria a disponibilidade do professor para tirar dúvidas e fornecer suporte adicional:
                <select
                  name="disponibilidade_professor"
                  value={formData.disponibilidade_professor}
                  onChange={handleInputChange}
                >
                  <option value="" disabled>
                    Selecione uma opção
                  </option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </label>
              <label>
                O professor demonstrou empatia e respeito pelos alunos:
                <select
                  name="empatia_professor"
                  value={formData.empatia_professor}
                  onChange={handleInputChange}
                >
                  <option value="" disabled>
                    Selecione uma opção
                  </option>
                  <option value="Sim">Sim, sempre</option>
                  <option value="as_vezes">Às vezes</option>
                  <option value="Raramente">Raramente</option>
                  <option value="nunca">Não, nunca</option>
                </select>
              </label>
              <label>
                Em geral, como você avaliaria a qualidade do ensino fornecido por este professor:
                <select
                  name="qualidade_ensino"
                  value={formData.qualidade_ensino}
                  onChange={handleInputChange}
                >
                  <option value="" disabled>
                    Selecione uma opção
                  </option>
                  <option value="Excelente">Excelente</option>
                  <option value="Bom">Bom</option>
                  <option value="Ruim">Ruim</option>
                  <option value="Pessimo">Pessimo</option>
                </select>
              </label>
              <label>
                Observações sobre o Professor (opcional):
                <textarea
                  name="observacoes_professor"
                  value={formData.observacoes_professor}
                  onChange={handleInputChange}
                ></textarea>
              </label>
            </>
          )}
          {etapa === 3 && (
            <>
              <label>
                Qual é o nome da disciplina que você está avaliando:
                <select
                  name="disciplina"
                  value={formData.disciplina}
                  onChange={handleInputChange}
                >
                  <option value="" disabled>
                    Selecione uma disciplina
                  </option>
                  <option value="Disciplina 1">Disciplina 1</option>
                  <option value="Disciplina 2">Disciplina 2</option>
                </select>
              </label>
              <label>
                Em uma escala de 1 a 5, como você avaliaria a relevância desta disciplina para o seu programa de estudos:
                <select
                  name="relevancia_disciplina"
                  value={formData.relevancia_disciplina}
                  onChange={handleInputChange}
                >
                  <option value="" disabled>
                    Selecione uma opção
                  </option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </label>
              <label>
                As avaliações e tarefas dessa disciplina foram justas e apropriadas:
                <select
                  name="justica_tarefas"
                  value={formData.justica_tarefas}
                  onChange={handleInputChange}
                >
                  <option value="" disabled>
                    Selecione uma opção
                  </option>
                  <option value="Sim">Sim</option>
                  <option value="No">Não</option>
                  <option value="Parcialmente">Parcialmente</option>
                </select>
              </label>
              <label>
                Como você avaliaria os recursos didáticos utilizados no curso (livros, materiais online, etc.):
                <select
                  name="recursos_didaticos"
                  value={formData.recursos_didaticos}
                  onChange={handleInputChange}
                >
                  <option value="" disabled>
                    Selecione uma opção
                  </option>
                  <option value="Excelente">Excelente</option>
                  <option value="Bom">Bom</option>
                  <option value="Satisfatório">Satisfatório</option>
                  <option value="Ruim">Ruim</option>
                  <option value="Pessimo">Pessimo</option>
                </select>
              </label>
              <label>
                Você sentiu que esta disciplina contribuiu positivamente para o seu aprendizado:
                <select
                  name="contribuicao_aprendizado"
                  value={formData.contribuicao_aprendizado}
                  onChange={handleInputChange}
                >
                  <option value="" disabled>
                    Selecione uma opção
                  </option>
                  <option value="Sim">Sim</option>
                  <option value="Nao">Não</option>
                  <option value="Parcialmente">Parcialmente</option>
                </select>
              </label>
              <label>
                Observações sobre a Disciplina (opcional):
                <textarea
                  name="observacoes_disciplina"
                  value={formData.observacoes_disciplina}
                  onChange={handleInputChange}
                ></textarea>
              </label>
            </>
          )}
          {etapa === 4 && (
            <>
              <label>
                Qual é o nome do curso que você está avaliando:
                <select
                  name="curso_avaliado"
                  value={formData.curso_avaliado}
                  onChange={handleInputChange}
                >
                  <option value="" disabled>
                    Selecione um curso
                  </option>
                  <option value="ADS">Análise e Desenvolvimento de Sistemas</option>
                  <option value="Fis">Física</option>
                  <option value="GAb">Gestão Ambiental</option>
                  <option value="Mat">Matemática</option>
                </select>
              </label>
              <label>
                Como você avaliaria a organização geral do curso e sua estrutura curricular:
                <select
                  name="organizacao_curso"
                  value={formData.organizacao_curso}
                  onChange={handleInputChange}
                >
                  <option value="" disabled>
                    Selecione uma opção
                  </option>
                  <option value="Boa">Boa</option>
                  <option value="Excelente">Excelente</option>
                  <option value="Satisfatória">Satisfatória</option>
                  <option value="Ruim">Ruim</option>
                  <option value="Pessima">Pessima</option>
                </select>
              </label>
              <label>
                O curso atendeu às suas expectativas e objetivos de aprendizado:
                <select
                  name="atende_expectativas"
                  value={formData.atende_expectativas}
                  onChange={handleInputChange}
                >
                  <option value="" disabled>
                    Selecione uma opção
                  </option>
                  <option value="Sim">Sim</option>
                  <option value="Nao">Não</option>
                  <option value="Parcialmente">Parcialmente</option>
                </select>
              </label>
              <label>
                Como você classificaria a qualidade das instalações e recursos disponíveis para o curso:
                <select
                  name="qualidade_recursos"
                  value={formData.qualidade_recursos}
                  onChange={handleInputChange}
                >
                  <option value="" disabled>
                    Selecione uma opção
                  </option>
                  <option value="Excelente">Excelente</option>
                  <option value="Bom">Bom</option>
                  <option value="Satisfatório">Satisfatório</option>
                  <option value="Ruim">Ruim</option>
                  <option value="Pessimo">Pessimo</option>
                </select>
              </label>
              <label>
                O suporte administrativo e acadêmico fornecido durante o curso foi satisfatório:
                <select
                  name="suporte_administrativo"
                  value={formData.suporte_administrativo}
                  onChange={handleInputChange}
                >
                  <option value="" disabled>
                    Selecione uma opção
                  </option>
                  <option value="Sim">Sim</option>
                  <option value="Nao">Não</option>
                  <option value="Parcialmente">Parcialmente</option>
                </select>
              </label>
              <label>
                Você recomendaria este curso para outros estudantes:
                <select
                  name="recomendaria_curso"
                  value={formData.recomendaria_curso}
                  onChange={handleInputChange}
                >
                  <option value="" disabled>
                    Selecione uma opção
                  </option>
                  <option value="Sim">Sim</option>
                  <option value="Nao">Não</option>
                </select>
              </label>
              <label>
                Observações sobre o Curso (opcional):
                <textarea
                  name="observacoes_curso"
                  value={formData.observacoes_curso}
                  onChange={handleInputChange}
                ></textarea>
              </label>
            </>
          )}
        </div>
        <div>
          <button type="button" onClick={etapa_anterior} disabled={etapa === 1}>
            Etapa Anterior
          </button>
          {etapa < 4 && (
            <button type="button" onClick={proxima_etapa}>
              Próxima Etapa
            </button>
          )}
          {etapa === 4 && <button type="submit">Enviar Avaliação</button>}
        </div>
      </form>
      <ToastContainer />
    </div>
  );
}

export default Forms;
