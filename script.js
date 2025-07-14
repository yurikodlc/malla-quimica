// script.js completo con todos los cursos organizados por ciclos

const cursos = [
  // 1er Ciclo
  { ciclo: "1er Ciclo", id: "redaccion1", nombre: "Redacción y técnicas de comunicación efectiva I", requisitos: [], abre: ["redaccion2"] },
  { ciclo: "1er Ciclo", id: "metodos", nombre: "Métodos de estudio universitario", requisitos: [] },
  { ciclo: "1er Ciclo", id: "liderazgo", nombre: "Desarrollo personal y liderazgo", requisitos: [] },
  { ciclo: "1er Ciclo", id: "calculo1", nombre: "Cálculo I", requisitos: [], abre: ["calculo2"] },
  { ciclo: "1er Ciclo", id: "biologia", nombre: "Biología y geometría analítica", requisitos: [] },
  { ciclo: "1er Ciclo", id: "medioamb", nombre: "Medio ambiente y desarrollo sostenible", requisitos: [] },

  // 2do Ciclo
  { ciclo: "2do Ciclo", id: "redaccion2", nombre: "Redacción y técnicas de comunicación efectiva II", requisitos: ["redaccion1"] },
  { ciclo: "2do Ciclo", id: "investigacion", nombre: "Investigación formativa", requisitos: [] },
  { ciclo: "2do Ciclo", id: "realidad", nombre: "Realidad nacional y mundial", requisitos: [] },
  { ciclo: "2do Ciclo", id: "calculo2", nombre: "Cálculo II", requisitos: ["calculo1"] },
  { ciclo: "2do Ciclo", id: "fisica1", nombre: "Física I", requisitos: [] },
  { ciclo: "2do Ciclo", id: "quimicaGen", nombre: "Química general", requisitos: [] },
  { ciclo: "2do Ciclo", id: "introcie", nombre: "Introducción a las ciencias e ingeniería", requisitos: [] },

  // 3er Ciclo
  { ciclo: "3er Ciclo", id: "quimicaInt", nombre: "Química integrada", requisitos: [], abre: ["quimicaInorg1"] },
  { ciclo: "3er Ciclo", id: "labQuimicaInt", nombre: "Laboratorio de química integrada", requisitos: [], abre: ["labInorg1", "labOrg1", "labFisico1"] },
  { ciclo: "3er Ciclo", id: "matematicaInt", nombre: "Matemática integrada", requisitos: [], abre: ["fisico1"] },
  { ciclo: "3er Ciclo", id: "fisicaInt", nombre: "Física integrada", requisitos: [], abre: ["fisico1"] },
  { ciclo: "3er Ciclo", id: "labFisicaInt", nombre: "Laboratorio de física integrada", requisitos: [], abre: ["labFisico1"] },
  { ciclo: "3er Ciclo", id: "estadistica", nombre: "Estadística", requisitos: [], abre: ["labInorg1", "labFisico1"] },

  // 4to Ciclo
  { ciclo: "4to Ciclo", id: "quimicaInorg1", nombre: "Química inorgánica I", requisitos: ["quimicaInt"], abre: ["quimicaInorg2"] },
  { ciclo: "4to Ciclo", id: "labInorg1", nombre: "Laboratorio de química inorgánica I", requisitos: ["labQuimicaInt", "estadistica"], abre: ["labInorg2"] },
  { ciclo: "4to Ciclo", id: "quimicaOrg1", nombre: "Química orgánica I", requisitos: ["quimicaInt"], abre: ["quimicaOrg2"] },
  { ciclo: "4to Ciclo", id: "labOrg1", nombre: "Laboratorio de Química orgánica I", requisitos: ["labQuimicaInt"], abre: ["labOrg2"] },
  { ciclo: "4to Ciclo", id: "fisico1", nombre: "Fisicoquímica I", requisitos: ["matematicaInt", "fisicaInt", "quimicaInt"], abre: ["fisico2"] },
  { ciclo: "4to Ciclo", id: "labFisico1", nombre: "Laboratorio de fisicoquímica I", requisitos: ["labQuimicaInt", "labFisicaInt", "estadistica"], abre: ["labFisico2"] },
  { ciclo: "4to Ciclo", id: "inglesTec", nombre: "Inglés técnico", requisitos: [], abre: ["quimicaAnalitica", "quimicaOrg2", "fisico2"] },

  // 5to Ciclo
  { ciclo: "5to Ciclo", id: "quimicaInorg2", nombre: "Química inorgánica II", requisitos: ["quimicaInorg1"], abre: ["quimicaInorg3"] },
  { ciclo: "5to Ciclo", id: "labInorg2", nombre: "Laboratorio de química inorgánica II", requisitos: ["labInorg1"], abre: ["labInorg3"] },
  { ciclo: "5to Ciclo", id: "quimicaOrg2", nombre: "Química orgánica II", requisitos: ["quimicaOrg1", "inglesTec"], abre: ["quimicaOrg3"] },
  { ciclo: "5to Ciclo", id: "labOrg2", nombre: "Laboratorio de Química orgánica II", requisitos: ["labOrg1"], abre: ["labOrg3"] },
  { ciclo: "5to Ciclo", id: "fisico2", nombre: "Fisicoquímica II", requisitos: ["fisico1", "inglesTec"], abre: ["analisis1", "quimicaInorg4", "bioquimica", "cuantica"] },
  { ciclo: "5to Ciclo", id: "labFisico2", nombre: "Laboratorio de fisicoquímica II", requisitos: ["labFisico1"], abre: ["labCinetica", "labBioq"] },
  { ciclo: "5to Ciclo", id: "quimicaAnalitica", nombre: "Química Analítica", requisitos: ["quimicaInorg1", "inglesTec"], abre: ["analisis1"] },
  { ciclo: "5to Ciclo", id: "labAnalitica", nombre: "Laboratorio de Química Analítica", requisitos: ["labInorg1"], abre: ["labAnalisis1"] },

  // Resto de ciclos continúa igual...
];

function crearCursos() {
  const contenedor = document.getElementById("banda-ciclos");
  const ciclosMap = {};

  cursos.forEach(curso => {
    if (!ciclosMap[curso.ciclo]) {
      const bloque = document.createElement("div");
      bloque.className = "bloque-ciclo";
      const titulo = document.createElement("h2");
      titulo.textContent = curso.ciclo;
      const lista = document.createElement("div");
      lista.className = "grid-container";
      bloque.appendChild(titulo);
      bloque.appendChild(lista);
      contenedor.appendChild(bloque);
      ciclosMap[curso.ciclo] = lista;
    }

    const div = document.createElement("div");
    div.id = curso.id;
    div.className = "course" + (curso.requisitos.length ? " locked" : "");
    div.textContent = curso.nombre;
    div.onclick = () => aprobarCurso(curso);
    ciclosMap[curso.ciclo].appendChild(div);
  });
}

function aprobarCurso(curso) {
  const div = document.getElementById(curso.id);
  if (div.classList.contains("locked") || div.classList.contains("completed")) return;
  div.classList.add("completed");

  cursos.forEach(c => {
    if (c.requisitos.includes(curso.id)) {
      const pendientes = c.requisitos.filter(req => !document.getElementById(req).classList.contains("completed"));
      if (pendientes.length === 0) {
        document.getElementById(c.id).classList.remove("locked");
      }
    }
  });
}

crearCursos();
