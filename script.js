// script.js

const cursos = [
  // Primer año
  { id: "redaccion1", nombre: "Redacción y técnicas de comunicación efectiva I", requisitos: [], abre: ["redaccion2"] },
  { id: "metodos", nombre: "Métodos de estudio universitario", requisitos: [] },
  { id: "liderazgo", nombre: "Desarrollo personal y liderazgo", requisitos: [] },
  { id: "calculo1", nombre: "Cálculo I", requisitos: [], abre: ["calculo2"] },
  { id: "biologia", nombre: "Biología y geometría analítica", requisitos: [] },
  { id: "medioamb", nombre: "Medio ambiente y desarrollo sostenible", requisitos: [] },

  { id: "redaccion2", nombre: "Redacción y técnicas de comunicación efectiva II", requisitos: ["redaccion1"] },
  { id: "investigacion", nombre: "Investigación formativa", requisitos: [] },
  { id: "realidad", nombre: "Realidad nacional y mundial", requisitos: [] },
  { id: "calculo2", nombre: "Cálculo II", requisitos: ["calculo1"] },
  { id: "fisica1", nombre: "Física I", requisitos: [] },
  { id: "quimicaGen", nombre: "Química general", requisitos: [] },
  { id: "introcie", nombre: "Introducción a las ciencias e ingeniería", requisitos: [] },

  // Segundo año
  { id: "quimicaInt", nombre: "Química integrada", requisitos: [], abre: ["quimicaInorg1"] },
  { id: "labQuimicaInt", nombre: "Laboratorio de química integrada", requisitos: [], abre: ["labInorg1","labOrg1","labFisico1"] },
  { id: "matematicaInt", nombre: "Matemática integrada", requisitos: [], abre: ["fisico1"] },
  { id: "fisicaInt", nombre: "Física integrada", requisitos: [], abre: ["fisico1"] },
  { id: "labFisicaInt", nombre: "Laboratorio de física integrada", requisitos: [], abre: ["labFisico1"] },
  { id: "estadistica", nombre: "Estadística", requisitos: [], abre: ["labInorg1","labFisico1"] },

  { id: "quimicaInorg1", nombre: "Química inorgánica I", requisitos: ["quimicaInt"], abre: ["quimicaInorg2"] },
  { id: "labInorg1", nombre: "Laboratorio de química inorgánica I", requisitos: ["labQuimicaInt","estadistica"], abre: ["labInorg2"] },
  { id: "quimicaOrg1", nombre: "Química orgánica I", requisitos: ["quimicaInt"], abre: ["quimicaOrg2"] },
  { id: "labOrg1", nombre: "Laboratorio de Química orgánica I", requisitos: ["labQuimicaInt"], abre: ["labOrg2"] },
  { id: "fisico1", nombre: "Fisicoquímica I", requisitos: ["matematicaInt", "fisicaInt", "quimicaInt"], abre: ["fisico2"] },
  { id: "labFisico1", nombre: "Laboratorio de fisicoquímica I", requisitos: ["labQuimicaInt", "labFisicaInt", "estadistica"], abre: ["labFisico2"] },
  { id: "inglesTec", nombre: "Inglés técnico", requisitos: [], abre: ["quimicaAnalitica","quimicaOrg2","fisico2"] },

  // Tercer año
  { id: "quimicaInorg2", nombre: "Química inorgánica II", requisitos: ["quimicaInorg1"], abre: ["quimicaInorg3"] },
  { id: "labInorg2", nombre: "Laboratorio de química inorgánica II", requisitos: ["labInorg1"], abre: ["labInorg3"] },
  { id: "quimicaOrg2", nombre: "Química orgánica II", requisitos: ["quimicaOrg1","inglesTec"], abre: ["quimicaOrg3"] },
  { id: "labOrg2", nombre: "Laboratorio de Química orgánica II", requisitos: ["labOrg1"], abre: ["labOrg3"] },
  { id: "fisico2", nombre: "Fisicoquímica II", requisitos: ["fisico1","inglesTec"], abre: ["analisis1","quimicaInorg4","bioquimica","cuantica"] },
  { id: "labFisico2", nombre: "Laboratorio de fisicoquímica II", requisitos: ["labFisico1"], abre: ["labCinetica","labBioq"] },
  { id: "quimicaAnalitica", nombre: "Química Analítica", requisitos: ["quimicaInorg1","inglesTec"], abre: ["analisis1"] },
  { id: "labAnalitica", nombre: "Laboratorio de Química Analítica", requisitos: ["labInorg1"], abre: ["labAnalisis1"] },

  { id: "quimicaInorg3", nombre: "Química inorgánica III", requisitos: ["quimicaInorg2"], abre: ["quimicaInorg4"] },
  { id: "labInorg3", nombre: "Laboratorio de química inorgánica III", requisitos: ["labInorg2"], abre: ["labInorg4"] },
  { id: "quimicaOrg3", nombre: "Química orgánica III", requisitos: ["quimicaOrg2"], abre: ["bioquimica","alimentos"] },
  { id: "labOrg3", nombre: "Laboratorio de Química orgánica III", requisitos: ["labOrg2"], abre: ["labBioq"] },
  { id: "analisis1", nombre: "Análisis instrumental I", requisitos: ["quimicaAnalitica","fisico2"], abre: ["analisis2"] },
  { id: "labAnalisis1", nombre: "Laboratorio de Análisis instrumental I", requisitos: ["labAnalitica"], abre: ["labCinetica","labAnalisis2"] },
  { id: "labCinetica", nombre: "Laboratorio de cinética, catálisis y electroquímica", requisitos: ["labFisico2"], abre: ["labColoidal"] },

  // Cuarto año
  { id: "quimicaInorg4", nombre: "Química Inorgánica IV", requisitos: ["fisico2", "quimicaInorg3"] },
  { id: "labInorg4", nombre: "Laboratorio de química inorgánica IV", requisitos: ["labInorg3"] },
  { id: "bioquimica", nombre: "Bioquímica", requisitos: ["fisico2", "quimicaOrg3"], abre: ["productosNat"] },
  { id: "labBioq", nombre: "Laboratorio de Bioquímica", requisitos: ["labFisico2", "labOrg3"], abre: ["labProductosNat"] },
  { id: "cuantica", nombre: "Química cuántica y termodinámica estadística", requisitos: ["fisico2"], abre: ["coloidal"] },
  { id: "analisis2", nombre: "Análisis instrumental II", requisitos: ["analisis1"], abre: ["metodologia","analisis3","tesis1","alimentos"] },
  { id: "labAnalisis2", nombre: "Laboratorio Análisis instrumental II", requisitos: ["labAnalisis1"], abre: ["labAnalisis3","tesis1","labAlimentos"] },

  { id: "productosNat", nombre: "Química de los productos naturales", requisitos: ["bioquimica"] },
  { id: "labProductosNat", nombre: "Laboratorio de química de los productos naturales", requisitos: ["labBioq"] },
  { id: "metodologia", nombre: "Metodología de la investigación", requisitos: ["analisis2"], abre: ["tesis1","innovacion"] },
  { id: "coloidal", nombre: "Química coloidal y fisicoquímica de interfases", requisitos: ["cuantica"] },
  { id: "labColoidal", nombre: "Laboratorio de Química coloidal e interfases", requisitos: ["labCinetica"] },
  { id: "analisis3", nombre: "Análisis instrumental III", requisitos: ["analisis2"], abre: ["tesis2","investigacion"] },
  { id: "labAnalisis3", nombre: "Laboratorio de Análisis instrumental III", requisitos: ["labAnalisis2"] },

  // Quinto año
  { id: "tesis1", nombre: "Tesis 1", requisitos: ["analisis2","labAnalisis2","metodologia"], abre: ["tesis2","investigacion"] },
  { id: "alimentos", nombre: "Química de los alimentos", requisitos: ["quimicaOrg3","analisis2"] },
  { id: "labAlimentos", nombre: "Laboratorio de análisis químico", requisitos: ["labAnalisis2"] },
  { id: "innovacion", nombre: "Innovación y emprendimiento", requisitos: ["metodologia"] },
  { id: "tesis2", nombre: "Tesis 2", requisitos: ["analisis3","labAnalisis3","tesis1"] },
  { id: "investigacion", nombre: "Trabajo de investigación", requisitos: ["analisis3","labAnalisis3","tesis1"] }
];

function crearCursos() {
  const contenedor = document.getElementById("malla");
  cursos.forEach(curso => {
    const div = document.createElement("div");
    div.id = curso.id;
    div.className = "course" + (curso.requisitos.length ? " locked" : "");
    div.textContent = curso.nombre;
    div.onclick = () => aprobarCurso(curso);
    contenedor.appendChild(div);
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
