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

  // 6to Ciclo
  { ciclo: "6to Ciclo", id: "quimicaInorg3", nombre: "Química inorgánica III", requisitos: ["quimicaInorg2"], abre: ["quimicaInorg4"] },
  { ciclo: "6to Ciclo", id: "labInorg3", nombre: "Laboratorio de química inorgánica III", requisitos: ["labInorg2"], abre: ["labInorg4"] },
  { ciclo: "6to Ciclo", id: "quimicaOrg3", nombre: "Química orgánica III", requisitos: ["quimicaOrg2"], abre: ["bioquimica", "alimentos"] },
  { ciclo: "6to Ciclo", id: "labOrg3", nombre: "Laboratorio de Química orgánica III", requisitos: ["labOrg2"], abre: ["labBioq"] },
  { ciclo: "6to Ciclo", id: "analisis1", nombre: "Análisis instrumental I", requisitos: ["quimicaAnalitica", "fisico2"], abre: ["analisis2"] },
  { ciclo: "6to Ciclo", id: "labAnalisis1", nombre: "Laboratorio de Análisis instrumental I", requisitos: ["labAnalitica"], abre: ["labCinetica", "labAnalisis2"] },
  { ciclo: "6to Ciclo", id: "labCinetica", nombre: "Laboratorio de cinética, catálisis y electroquímica", requisitos: ["labFisico2"], abre: ["labColoidal"] },

  // 7mo Ciclo
  { ciclo: "7mo Ciclo", id: "quimicaInorg4", nombre: "Química Inorgánica IV", requisitos: ["fisico2", "quimicaInorg3"] },
  { ciclo: "7mo Ciclo", id: "labInorg4", nombre: "Laboratorio de química inorgánica IV", requisitos: ["labInorg3"] },
  { ciclo: "7mo Ciclo", id: "bioquimica", nombre: "Bioquímica", requisitos: ["fisico2", "quimicaOrg3"], abre: ["productosNat"] },
  { ciclo: "7mo Ciclo", id: "labBioq", nombre: "Laboratorio de Bioquímica", requisitos: ["labFisico2", "labOrg3"], abre: ["labProductosNat"] },
  { ciclo: "7mo Ciclo", id: "cuantica", nombre: "Química cuántica y termodinámica estadística", requisitos: ["fisico2"], abre: ["coloidal"] },
  { ciclo: "7mo Ciclo", id: "analisis2", nombre: "Análisis instrumental II", requisitos: ["analisis1"], abre: ["metodologia", "analisis3", "tesis1", "alimentos"] },
  { ciclo: "7mo Ciclo", id: "labAnalisis2", nombre: "Laboratorio Análisis instrumental II", requisitos: ["labAnalisis1"], abre: ["labAnalisis3", "tesis1", "labAlimentos"] },

  // 8vo Ciclo
  { ciclo: "8vo Ciclo", id: "productosNat", nombre: "Química de los productos naturales", requisitos: ["bioquimica"] },
  { ciclo: "8vo Ciclo", id: "labProductosNat", nombre: "Laboratorio de química de los productos naturales", requisitos: ["labBioq"] },
  { ciclo: "8vo Ciclo", id: "metodologia", nombre: "Metodología de la investigación", requisitos: ["analisis2"], abre: ["tesis1", "innovacion"] },
  { ciclo: "8vo Ciclo", id: "coloidal", nombre: "Química coloidal y fisicoquímica de interfases", requisitos: ["cuantica"] },
  { ciclo: "8vo Ciclo", id: "labColoidal", nombre: "Laboratorio de Química coloidal e interfases", requisitos: ["labCinetica"] },
  { ciclo: "8vo Ciclo", id: "analisis3", nombre: "Análisis instrumental III", requisitos: ["analisis2"], abre: ["tesis2", "investigacion"] },
  { ciclo: "8vo Ciclo", id: "labAnalisis3", nombre: "Laboratorio de Análisis instrumental III", requisitos: ["labAnalisis2"] },

  // 9no Ciclo
  { ciclo: "9no Ciclo", id: "tesis1", nombre: "Tesis 1", requisitos: ["analisis2", "labAnalisis2", "metodologia"], abre: ["tesis2", "investigacion"] },
  { ciclo: "9no Ciclo", id: "alimentos", nombre: "Química de los alimentos", requisitos: ["quimicaOrg3", "analisis2"] },
  { ciclo: "9no Ciclo", id: "labAlimentos", nombre: "Laboratorio de análisis químico", requisitos: ["labAnalisis2"] },

  // 10mo Ciclo
  { ciclo: "10mo Ciclo", id: "innovacion", nombre: "Innovación y emprendimiento", requisitos: ["metodologia"] },
  { ciclo: "10mo Ciclo", id: "tesis2", nombre: "Tesis 2", requisitos: ["analisis3", "labAnalisis3", "tesis1"] },
  { ciclo: "10mo Ciclo", id: "investigacion", nombre: "Trabajo de investigación", requisitos: ["analisis3", "labAnalisis3", "tesis1"] }
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
