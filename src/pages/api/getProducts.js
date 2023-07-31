const products = [
  {
      "hs_slug_code": "adv-fced",
      "md_codigo_carrera": "ADV-FCED",
      "hs_nombre_producto": "Advance - Certificado de Entrenamiento en Deportes de Equipo",
      "md_id_carrera": "3af5b45a-64fd-ec11-b945-00505689053e",
      "md_tipo_carrera": "PROGRAMAS ESPECIALES",
      "md_nombre_carrera": "Certificado de Entrenamiento en Deportes de Equipo",
      "md_landing_value": "ADV-FCED",
      "modality": "Virtual"
  },
  {
      "hs_slug_code": "adv-fcnd",
      "md_codigo_carrera": "ADV-FCND",
      "hs_nombre_producto": "Advance - Certificado de Nutrición Deportiva",
      "md_id_carrera": "38f5b45a-64fd-ec11-b945-00505689053e",
      "md_tipo_carrera": "PROGRAMAS ESPECIALES",
      "md_nombre_carrera": "Certificado de Nutrición Deportiva",
      "md_landing_value": "ADV-FCND",
      "modality": "Virtual"
  },
  {
      "hs_slug_code": "adv-fcps",
      "md_codigo_carrera": "ADV-FCPS",
      "hs_nombre_producto": "Advance - Certificado de Psicología de Alto Rendimiento Deportivo",
      "md_id_carrera": "36f5b45a-64fd-ec11-b945-00505689053e",
      "md_tipo_carrera": "PROGRAMAS ESPECIALES",
      "md_nombre_carrera": "Certificado de Psicología de Alto Rendimiento Deportivo",
      "md_landing_value": "ADV-FCPS",
      "modality": "Virtual"
  },
  {
      "hs_slug_code": "adv-fcmd",
      "md_codigo_carrera": "ADV-FCMD",
      "hs_nombre_producto": "Advance - Certificado en Marketing y Patrocinio Deportivo",
      "md_id_carrera": "3cf5b45a-64fd-ec11-b945-00505689053e",
      "md_tipo_carrera": "PROGRAMAS ESPECIALES",
      "md_nombre_carrera": "Certificado en Marketing y Patrocinio Deportivo",
      "md_landing_value": "ADV-FCMD",
      "modality": "Virtual"
  },
  {
      "hs_slug_code": "adv-bmex",
      "md_codigo_carrera": "ADV-BMEX",
      "hs_nombre_producto": "Advance - Curso BIM Manager EXPERT",
      "md_id_carrera": "46f5b45a-64fd-ec11-b945-00505689053e",
      "md_tipo_carrera": "PROGRAMAS ESPECIALES",
      "md_nombre_carrera": "Curso BIM Manager EXPERT",
      "md_landing_value": "ADV-BMEX",
      "modality": "Virtual"
  },
  {
      "hs_slug_code": "adv-bmod",
      "md_codigo_carrera": "ADV-BMOD",
      "hs_nombre_producto": "Advance - Curso BIM Modeler",
      "md_id_carrera": "40f5b45a-64fd-ec11-b945-00505689053e",
      "md_tipo_carrera": "PROGRAMAS ESPECIALES",
      "md_nombre_carrera": "Curso BIM Modeler",
      "md_landing_value": "ADV-BMOD",
      "modality": "Virtual"
  },
  {
      "hs_slug_code": "adv-bcbi",
      "md_codigo_carrera": "ADV-BCBI",
      "hs_nombre_producto": "Advance - Curso Coordinación BIM",
      "md_id_carrera": "44f5b45a-64fd-ec11-b945-00505689053e",
      "md_tipo_carrera": "PROGRAMAS ESPECIALES",
      "md_nombre_carrera": "Curso Coordinación BIM",
      "md_landing_value": "ADV-BCBI",
      "modality": "Virtual"
  },
  {
      "hs_slug_code": "adv-c001",
      "md_codigo_carrera": "ADV-BFTD",
      "hs_nombre_producto": "Advance - Curso de Blockchain Fundamentos De Una Tecnología Disruptiva",
      "md_id_carrera": "331e9fce-2c4d-ec11-b945-00505689be00",
      "md_tipo_carrera": "PROGRAMAS ESPECIALES",
      "md_nombre_carrera": "CURSO: BLOCKCHAIN; FUNDAMENTOS DE UNA TECNOLOGÍA DISRUPTIVA",
      "md_landing_value": "Curso BlockChain Fundamentos de Una Tecnología Disruptiva",
      "modality": "Virtual"
  },
  {
      "hs_slug_code": "adv-bmmd",
      "md_codigo_carrera": "ADV-BMMD",
      "hs_nombre_producto": "Advance - Curso MEP BIM Modeler",
      "md_id_carrera": "42f5b45a-64fd-ec11-b945-00505689053e",
      "md_tipo_carrera": "PROGRAMAS ESPECIALES",
      "md_nombre_carrera": "Curso MEP BIM Modeler",
      "md_landing_value": "ADV-BMMD",
      "modality": "Virtual"
  },
  {
      "hs_slug_code": "adv-d023",
      "md_codigo_carrera": "ADV-DDHD",
      "hs_nombre_producto": "Advance - Diplomado Ejecutivo En Desarrollo De Habilidades Directivas",
      "md_id_carrera": "371e9fce-2c4d-ec11-b945-00505689be00",
      "md_tipo_carrera": "PROGRAMAS ESPECIALES",
      "md_nombre_carrera": "DIPLOMADO EN DESARROLLO DE HABILIDADES DIRECTIVAS",
      "md_landing_value": "Diplomado Ejecutivo en Desarrollo de Habilidades Directivas",
      "modality": "Virtual"
  },
  {
      "hs_slug_code": "adv-d022",
      "md_codigo_carrera": "ADV-DEGD",
      "hs_nombre_producto": "Advance - Diplomado Ejecutivo En Gerenciamiento Deportivo",
      "md_id_carrera": "391e9fce-2c4d-ec11-b945-00505689be00",
      "md_tipo_carrera": "PROGRAMAS ESPECIALES",
      "md_nombre_carrera": "DIPLOMADO EJECUTIVO EN GERENCIAMIENTO DEPORTIVO",
      "md_landing_value": "Diplomado Ejecutivo en Gerenciamiento Deportivo",
      "modality": "Virtual"
  },
  {
      "hs_slug_code": "adv-d021",
      "md_codigo_carrera": "ADV-DEGN",
      "hs_nombre_producto": "Advance - Diplomado Ejecutivo En Gestion De Negocios",
      "md_id_carrera": "3b1e9fce-2c4d-ec11-b945-00505689be00",
      "md_tipo_carrera": "PROGRAMAS ESPECIALES",
      "md_nombre_carrera": "DIPLOMADO EJECUTIVO EN GESTIÓN DE NEGOCIOS",
      "md_landing_value": "Diplomado Ejecutivo en Gestión de Negocios",
      "modality": "Virtual"
  },
  {
      "hs_slug_code": "adv-d020",
      "md_codigo_carrera": "ADV-DEIS",
      "hs_nombre_producto": "Advance - Diplomado Ejecutivo Para Incubacion De Startups",
      "md_id_carrera": "3d1e9fce-2c4d-ec11-b945-00505689be00",
      "md_tipo_carrera": "PROGRAMAS ESPECIALES",
      "md_nombre_carrera": "DIPLOMADO EJECUTIVO PARA INCUBACIÓN DE STARTUPS",
      "md_landing_value": "Diplomado Ejecutivo para Inacubación de StartUps",
      "modality": "Virtual"
  },
  {
      "hs_slug_code": "adv-dain",
      "md_codigo_carrera": "adv-dain",
      "hs_nombre_producto": "Advance - Diplomado en Auditoria Interna",
      "md_id_carrera": "7739b232-3d55-ed11-b948-00505689053e",
      "md_tipo_carrera": "PROGRAMAS ESPECIALES",
      "md_nombre_carrera": "DIPLOMADO EN AUDITORIA INTERNA",
      "md_landing_value": "adv-dain",
      "modality": "Virtual"
  },
  {
      "hs_slug_code": "adv-d001",
      "md_codigo_carrera": "ADV-DBD",
      "hs_nombre_producto": "Advance - Diplomado En Big Data",
      "md_id_carrera": "351e9fce-2c4d-ec11-b945-00505689be00",
      "md_tipo_carrera": "PROGRAMAS ESPECIALES",
      "md_nombre_carrera": "DIPLOMADO EN BIG DATA",
      "md_landing_value": "Diplomado en Big data",
      "modality": "Virtual"
  },
  {
      "hs_slug_code": "adv-bmpcp",
      "md_codigo_carrera": "ADV-BMPCP",
      "hs_nombre_producto": "Advance - Diplomado en BIM - Modelado, Procesos y Coordinación de Proyectos",
      "md_id_carrera": "3ef5b45a-64fd-ec11-b945-00505689053e",
      "md_tipo_carrera": "PROGRAMAS ESPECIALES",
      "md_nombre_carrera": "DIPLOMADO EN BIM: Modelado,Procesos y Coordinación de Proyectos",
      "md_landing_value": "ADV-BMPCP",
      "modality": "Virtual"
  },
  {
      "hs_slug_code": "adv-d019",
      "md_codigo_carrera": "ADV-DBA",
      "hs_nombre_producto": "Advance - Diplomado En Business Analytics",
      "md_id_carrera": "1f1e9fce-2c4d-ec11-b945-00505689be00",
      "md_tipo_carrera": "PROGRAMAS ESPECIALES",
      "md_nombre_carrera": "DIPLOMADO EN BUSINESS ANALYTICS",
      "md_landing_value": "Diplomado en Business Analytics",
      "modality": "Virtual"
  },
  {
      "hs_slug_code": "adv-d018",
      "md_codigo_carrera": "ADV-DCOM",
      "hs_nombre_producto": "Advance - Diplomado En Community Management",
      "md_id_carrera": "311e9fce-2c4d-ec11-b945-00505689be00",
      "md_tipo_carrera": "PROGRAMAS ESPECIALES",
      "md_nombre_carrera": "DIPLOMADO EN COMMUNITY MANAGEMENT",
      "md_landing_value": "Diplomado en Community Management",
      "modality": "Virtual"
  },
  {
      "hs_slug_code": "adv-ddrc",
      "md_codigo_carrera": "adv-ddrc",
      "hs_nombre_producto": "Advance - Diplomado en Derecho Registral y Catastral",
      "md_id_carrera": "7539b232-3d55-ed11-b948-00505689053e",
      "md_tipo_carrera": "PROGRAMAS ESPECIALES",
      "md_nombre_carrera": "DIPLOMADO EN DERECHO REGISTRAL Y CATASTRAL",
      "md_landing_value": "adv-ddrc",
      "modality": "Presencial"
  },
  {
      "hs_slug_code": "adv-d024",
      "md_codigo_carrera": "ADVANCE9",
      "hs_nombre_producto": "Advance - Diplomado En Didactica Universitaria",
      "md_id_carrera": "202e6195-ee22-ed11-b96c-0050568952e6",
      "md_tipo_carrera": "PROGRAMAS ESPECIALES",
      "md_nombre_carrera": "DIPLOMADO EN DIDACTICA UNIVERSITARIA",
      "md_landing_value": "DIPLOMADO EN DIDACTICA UNIVERSITARIA - VIRTUAL",
      "modality": "Virtual"
  },
  {
      "hs_slug_code": "adv-d006",
      "md_codigo_carrera": "ADV-DDCE",
      "hs_nombre_producto": "Advance - Diplomado En Diseño, Comunicación Y Estilismo De Moda",
      "md_id_carrera": "571e9fce-2c4d-ec11-b945-00505689be00",
      "md_tipo_carrera": "PROGRAMAS ESPECIALES",
      "md_nombre_carrera": "DIPLOMADO EN DISEÑO, COMUNICACIÓN Y ESTILISMO DE MODA",
      "md_landing_value": "Diplomado en Diseño, Comunicación y Estilo de Moda",
      "modality": "Virtual"
  },
  {
      "hs_slug_code": "adv-d009",
      "md_codigo_carrera": "ADV-DETD",
      "hs_nombre_producto": "Advance - Diplomado En Estadística Para La Toma De Decisiones",
      "md_id_carrera": "171e9fce-2c4d-ec11-b945-00505689be00",
      "md_tipo_carrera": "PROGRAMAS ESPECIALES",
      "md_nombre_carrera": "DIPLOMADO EN ESTADÍSTICA PARA LA TOMA DE DECISIONES",
      "md_landing_value": "Diplomado en Estadística Para la Toma de Decisiones",
      "modality": "Virtual"
  },
  {
      "hs_slug_code": "adv-d005",
      "md_codigo_carrera": "ADV-DGRH",
      "hs_nombre_producto": "Advance - Diplomado En Gestión Estratégica De Los Recursos Humanos",
      "md_id_carrera": "591e9fce-2c4d-ec11-b945-00505689be00",
      "md_tipo_carrera": "PROGRAMAS ESPECIALES",
      "md_nombre_carrera": "DIPLOMADO EN GESTIÓN ESTRATÉGICA DE LOS RECURSOS HUMANOS",
      "md_landing_value": "Diplomado en Gestión Estratégica de los Recursos Humanos",
      "modality": "Virtual"
  },
  {
      "hs_slug_code": "adv-d002",
      "md_codigo_carrera": "ADV-DGIP",
      "hs_nombre_producto": "Advance - Diplomado En Gestión Integral De Proyectos",
      "md_id_carrera": "3f1e9fce-2c4d-ec11-b945-00505689be00",
      "md_tipo_carrera": "PROGRAMAS ESPECIALES",
      "md_nombre_carrera": "DIPLOMADO EN GESTIÓN INTEGRAL DE PROYECTOS",
      "md_landing_value": "Diplomado en Gestión Integral de Proyectos",
      "modality": "Virtual"
  },
  {
      "hs_slug_code": "adv-d017",
      "md_codigo_carrera": "ADV-GMM",
      "hs_nombre_producto": "Advance - Diplomado En Gestión Y Marketing De Moda",
      "md_id_carrera": "1b1e9fce-2c4d-ec11-b945-00505689be00",
      "md_tipo_carrera": "PROGRAMAS ESPECIALES",
      "md_nombre_carrera": "DIPLOMADO EN GESTIÓN Y MARKETING DE MODA",
      "md_landing_value": "Diplomado en Gestión y Marketing de Moda",
      "modality": "Virtual"
  },
  {
      "hs_slug_code": "adv-d015",
      "md_codigo_carrera": "ADV-DGH",
      "hs_nombre_producto": "Advance - Diplomado En Growth Hacking",
      "md_id_carrera": "1d1e9fce-2c4d-ec11-b945-00505689be00",
      "md_tipo_carrera": "PROGRAMAS ESPECIALES",
      "md_nombre_carrera": "DIPLOMADO EN GROWTH HACKING",
      "md_landing_value": "Diplomado en Growth Hacking",
      "modality": "Virtual"
  },
  {
      "hs_slug_code": "adv-d012",
      "md_codigo_carrera": "ADV-DIMA",
      "hs_nombre_producto": "Advance - Diplomado En Inbound Marketing",
      "md_id_carrera": "191e9fce-2c4d-ec11-b945-00505689be00",
      "md_tipo_carrera": "PROGRAMAS ESPECIALES",
      "md_nombre_carrera": "DIPLOMADO EN INBOUND MARKETING",
      "md_landing_value": "Diplomado en Inbound Marketing",
      "modality": "Virtual"
  },
  {
      "hs_slug_code": "adv-dlds",
      "md_codigo_carrera": "adv-dlds",
      "hs_nombre_producto": "Advance - Diplomado en Logística en DFI y Supply Chain Management",
      "md_id_carrera": "b136ac43-feda-ed11-b979-0050568952e6",
      "md_tipo_carrera": "PROGRAMAS ESPECIALES",
      "md_nombre_carrera": "Diplomado en Logística en DFI y Supply Chain Management",
      "md_landing_value": "adv-dlds",
      "modality": "Virtual"
  },
  {
      "hs_slug_code": "adv-d013",
      "md_codigo_carrera": "ADV-DMA",
      "hs_nombre_producto": "Advance - Diplomado En Marketing Analytics",
      "md_id_carrera": "d11e9fce-2c4d-ec11-b945-00505689be00",
      "md_tipo_carrera": "PROGRAMAS ESPECIALES",
      "md_nombre_carrera": "DIPLOMADO EN MARKETING ANALYTICS",
      "md_landing_value": "Diplomado en Marketing Analytics",
      "modality": "Virtual"
  },
  {
      "hs_slug_code": "adv-d010",
      "md_codigo_carrera": "ADV-DMKT",
      "hs_nombre_producto": "Advance - Diplomado En Marketing Y Publicidad Digital",
      "md_id_carrera": "611e9fce-2c4d-ec11-b945-00505689be00",
      "md_tipo_carrera": "PROGRAMAS ESPECIALES",
      "md_nombre_carrera": "DIPLOMADO EN MARKETING Y PUBLICIDAD DIGITAL",
      "md_landing_value": "Diplomado en Marketing y Publicidad Digital",
      "modality": "Virtual"
  },
  {
      "hs_slug_code": "adv-d007",
      "md_codigo_carrera": "ADV-DMM",
      "hs_nombre_producto": "Advance - Diplomado En Mobile Marketing",
      "md_id_carrera": "8b1e9fce-2c4d-ec11-b945-00505689be00",
      "md_tipo_carrera": "PROGRAMAS ESPECIALES",
      "md_nombre_carrera": "DIPLOMADO EN MOBILE MARKETING",
      "md_landing_value": "Diplomado en Mobile Marketing",
      "modality": "Virtual"
  },
  {
      "hs_slug_code": "adv-d003",
      "md_codigo_carrera": "ADV-DOAA",
      "hs_nombre_producto": "Advance - Diplomado En On Line Advertising Analytics",
      "md_id_carrera": "411e9fce-2c4d-ec11-b945-00505689be00",
      "md_tipo_carrera": "PROGRAMAS ESPECIALES",
      "md_nombre_carrera": "DIPLOMADO EN ON LINE ADVERTISING ANALYTICS",
      "md_landing_value": "Diplomado en on Line advertising Analitics",
      "modality": "Virtual"
  },
  {
      "hs_slug_code": "adv-d014",
      "md_codigo_carrera": "ADV-OPPE",
      "hs_nombre_producto": "Advance - Diplomado En Oratoria Y Presentaciones Públicas Efectivas",
      "md_id_carrera": "491e9fce-2c4d-ec11-b945-00505689be00",
      "md_tipo_carrera": "PROGRAMAS ESPECIALES",
      "md_nombre_carrera": "DIPLOMADO EN ORATORIA Y PRESENTACIONES PÚBLICAS EFECTIVAS",
      "md_landing_value": "Diplomado en Oratoria y Presentaciones Públicas Efectivas",
      "modality": "Virtual"
  },
  {
      "hs_slug_code": "adv-dseo",
      "md_codigo_carrera": "ADV-DPB",
      "hs_nombre_producto": "Advance - Diplomado en Posicionamiento en Buscadores (SEO)",
      "md_id_carrera": "a11e9fce-2c4d-ec11-b945-00505689be00",
      "md_tipo_carrera": "PROGRAMAS ESPECIALES",
      "md_nombre_carrera": "DIPLOMADO EN POSICIONAMIENTO DE BUSCADORES (SEO)",
      "md_landing_value": "Diplomado en Posicionamiento en Buscadores (SEO)",
      "modality": "Virtual"
  },
  {
      "hs_slug_code": "adv-d004",
      "md_codigo_carrera": "ADV-SMAT",
      "hs_nombre_producto": "Advance - Diplomado En Social Media Aplicado Al Turismo",
      "md_id_carrera": "151e9fce-2c4d-ec11-b945-00505689be00",
      "md_tipo_carrera": "PROGRAMAS ESPECIALES",
      "md_nombre_carrera": "DIPLOMADO EN SOCIAL MEDIA APLICADO AL TURISMO",
      "md_landing_value": "Diplomado en Social Media Aplicado al Turismo",
      "modality": "Virtual"
  },
  {
      "hs_slug_code": "adv-d016",
      "md_codigo_carrera": "ADV-DSMM",
      "hs_nombre_producto": "Advance - Diplomado En Social Media Management",
      "md_id_carrera": "451e9fce-2c4d-ec11-b945-00505689be00",
      "md_tipo_carrera": "PROGRAMAS ESPECIALES",
      "md_nombre_carrera": "DIPLOMADO EN SOCIAL MEDIA MANAGEMENT",
      "md_landing_value": "Diplomado en Social Media Managment",
      "modality": "Virtual"
  },
  {
      "hs_slug_code": "adv-d008",
      "md_codigo_carrera": "ADV-DSBS",
      "hs_nombre_producto": "Advance - Diplomado En Storytelling Y Brand Storytelling",
      "md_id_carrera": "431e9fce-2c4d-ec11-b945-00505689be00",
      "md_tipo_carrera": "PROGRAMAS ESPECIALES",
      "md_nombre_carrera": "DIPLOMADO EN STORYTELLING Y BRAND STORYTELLING",
      "md_landing_value": "Diplomado en Storytelling y Brand Storytelling",
      "modality": "Virtual"
  },
  {
      "hs_slug_code": "adv-d011",
      "md_codigo_carrera": "ADV-DWA",
      "hs_nombre_producto": "Advance - Diplomado En Web Analytics",
      "md_id_carrera": "471e9fce-2c4d-ec11-b945-00505689be00",
      "md_tipo_carrera": "PROGRAMAS ESPECIALES",
      "md_nombre_carrera": "DIPLOMADO EN WEB ANALYTICS",
      "md_landing_value": "Diplomado en Web Analytics",
      "modality": "Virtual"
  },
  {
      "hs_slug_code": "adv-p001",
      "md_codigo_carrera": "ADV-COP",
      "hs_nombre_producto": "Advance - Programa De Couching Ontológico Profesional",
      "md_id_carrera": "fba69925-a869-ec11-b945-00505689be00",
      "md_tipo_carrera": "PROGRAMAS ESPECIALES",
      "md_nombre_carrera": "COACHING ONTOLÓGICO PROFESIONAL",
      "md_landing_value": "Coaching Ontológico Profesional",
      "modality": "Virtual"
  },
  {
      "hs_slug_code": "eja-dc-etpr",
      "md_codigo_carrera": "eja-dc-etpr",
      "hs_nombre_producto": "Escuela Judicial - Diplomado en Cibercriminalidad: enfoque teórico-práctico",
      "md_id_carrera": "08cfd7ad-b74b-ed11-b948-00505689053e",
      "md_tipo_carrera": "PROGRAMAS ESPECIALES",
      "md_nombre_carrera": "Escuela Judicial - Diplomado en Cibercriminalidad: enfoque teórico-práctico",
      "md_landing_value": "eja-dc-etpr",
      "modality": "Virtual"
  },
  {
      "hs_slug_code": "eja-dd-aepc",
      "md_codigo_carrera": "eja-dd-aepc",
      "hs_nombre_producto": "Escuela Judicial - Diplomado en Derecho Administrativo con énfasis en procedimiento contencioso-administrativo",
      "md_id_carrera": "f6ced7ad-b74b-ed11-b948-00505689053e",
      "md_tipo_carrera": "PROGRAMAS ESPECIALES",
      "md_nombre_carrera": "Escuela Judicial - Diplomado en Derecho Administrativo con énfasis en procedimiento contencioso-administrativo",
      "md_landing_value": "eja-dd-aepc",
      "modality": "Virtual"
  },
  {
      "hs_slug_code": "eja-dd-aeaj",
      "md_codigo_carrera": "eja-dd-aeaj",
      "hs_nombre_producto": "Escuela Judicial - Diplomado en Derecho Ambiental: con énfasis en administración de justicia desde un enfoque ambiental",
      "md_id_carrera": "f8ced7ad-b74b-ed11-b948-00505689053e",
      "md_tipo_carrera": "PROGRAMAS ESPECIALES",
      "md_nombre_carrera": "Escuela Judicial - Diplomado en Derecho Ambiental: con énfasis en administración de justicia desde un enfoque ambiental",
      "md_landing_value": "eja-dd-aeaj",
      "modality": "Virtual"
  },
  {
      "hs_slug_code": "eja-dd-cecr",
      "md_codigo_carrera": "eja-dd-cecr",
      "hs_nombre_producto": "Escuela Judicial - Diplomado en Derecho corporativo y empresarial: control de riesgos legales de la empresa",
      "md_id_carrera": "faced7ad-b74b-ed11-b948-00505689053e",
      "md_tipo_carrera": "PROGRAMAS ESPECIALES",
      "md_nombre_carrera": "Escuela Judicial - Diplomado en Derecho corporativo y empresarial: control de riesgos legales de la empresa",
      "md_landing_value": "eja-dd-cecr",
      "modality": "Virtual"
  },
  {
      "hs_slug_code": "eja-dd-naee",
      "md_codigo_carrera": "eja-dd-naee",
      "hs_nombre_producto": "Escuela Judicial - Diplomado en Derecho de la niñez y la adolescencia: con énfasis en el estudio e implementación de la ley 6486/20",
      "md_id_carrera": "f2ced7ad-b74b-ed11-b948-00505689053e",
      "md_tipo_carrera": "PROGRAMAS ESPECIALES",
      "md_nombre_carrera": "Escuela Judicial - Diplomado en Derecho de la niñez y la adolescencia: con énfasis en el estudio e implementación de la ley 6486/20",
      "md_landing_value": "eja-dd-naee",
      "modality": "Virtual"
  },
  {
      "hs_slug_code": "eja-dd-elec",
      "md_codigo_carrera": "eja-dd-elec",
      "hs_nombre_producto": "Escuela Judicial - Diplomado en Derecho Electoral",
      "md_id_carrera": "fcced7ad-b74b-ed11-b948-00505689053e",
      "md_tipo_carrera": "PROGRAMAS ESPECIALES",
      "md_nombre_carrera": "Escuela Judicial - Diplomado en Derecho Electoral",
      "md_landing_value": "eja-dd-elec",
      "modality": "Virtual"
  },
  {
      "hs_slug_code": "eja-dd-jlan",
      "md_codigo_carrera": "eja-dd-jlan",
      "hs_nombre_producto": "Escuela Judicial - Diplomado en Derecho Laboral: con énfasis en jurisdicción laboral y aplicación de normas internacionales del trabajo",
      "md_id_carrera": "f4ced7ad-b74b-ed11-b948-00505689053e",
      "md_tipo_carrera": "PROGRAMAS ESPECIALES",
      "md_nombre_carrera": "Escuela Judicial - Diplomado en Derecho Laboral: con énfasis en jurisdicción laboral y aplicación de normas internacionales del trabajo",
      "md_landing_value": "eja-dd-jlan",
      "modality": "Virtual"
  },
  {
      "hs_slug_code": "eja-dd-paes",
      "md_codigo_carrera": "eja-dd-paes",
      "hs_nombre_producto": "Escuela Judicial - Diplomado en Derecho Penal Adolescente. Estudio del sistema integral de justicia penal adolescente",
      "md_id_carrera": "feced7ad-b74b-ed11-b948-00505689053e",
      "md_tipo_carrera": "PROGRAMAS ESPECIALES",
      "md_nombre_carrera": "Escuela Judicial - Diplomado en Derecho Penal Adolescente. Estudio del sistema integral de justicia penal adolescente",
      "md_landing_value": "eja-dd-paes",
      "modality": "Virtual"
  },
  {
      "hs_slug_code": "eja-dd-ppci",
      "md_codigo_carrera": "eja-dd-ppci",
      "hs_nombre_producto": "Escuela Judicial - Diplomado en Derecho probatorio en el proceso civil",
      "md_id_carrera": "00cfd7ad-b74b-ed11-b948-00505689053e",
      "md_tipo_carrera": "PROGRAMAS ESPECIALES",
      "md_nombre_carrera": "Escuela Judicial - Diplomado en Derecho probatorio en el proceso civil",
      "md_landing_value": "eja-dd-ppci",
      "modality": "Virtual"
  },
  {
      "hs_slug_code": "eja-dd-prco",
      "md_codigo_carrera": "eja-dd-prco",
      "hs_nombre_producto": "Escuela Judicial - Diplomado en Derecho procesal constitucional",
      "md_id_carrera": "02cfd7ad-b74b-ed11-b948-00505689053e",
      "md_tipo_carrera": "PROGRAMAS ESPECIALES",
      "md_nombre_carrera": "Escuela Judicial - Diplomado en Derecho procesal constitucional",
      "md_landing_value": "eja-dd-prco",
      "modality": "Virtual"
  },
  {
      "hs_slug_code": "eja-dd-rcno",
      "md_codigo_carrera": "eja-dd-rcno",
      "hs_nombre_producto": "Escuela Judicial - Diplomado en Derecho registral, catastral y notarial",
      "md_id_carrera": "04cfd7ad-b74b-ed11-b948-00505689053e",
      "md_tipo_carrera": "PROGRAMAS ESPECIALES",
      "md_nombre_carrera": "Escuela Judicial - Diplomado en Derecho registral, catastral y notarial",
      "md_landing_value": "eja-dd-rcno",
      "modality": "Virtual"
  },
  {
      "hs_slug_code": "eja-dd-ntsj",
      "md_codigo_carrera": "eja-dd-ntsj",
      "hs_nombre_producto": "Escuela Judicial - Diplomado en Derecho y las nuevas tecnologías en el sistema judicial",
      "md_id_carrera": "0ccfd7ad-b74b-ed11-b948-00505689053e",
      "md_tipo_carrera": "PROGRAMAS ESPECIALES",
      "md_nombre_carrera": "Escuela Judicial - Diplomado en Derecho y las nuevas tecnologías en el sistema judicial",
      "md_landing_value": "eja-dd-ntsj",
      "modality": "Virtual"
  },
  {
      "hs_slug_code": "eja-dd-dbbd",
      "md_codigo_carrera": "eja-dd-dbbd",
      "hs_nombre_producto": "Escuela Judicial - Diplomado en Derecho, Diplomado en Bioética, Bioderecho y Derechos fundamentales: aspectos bioéticos y su incidencia actual y futura en la normativa jurídica nacional e internacional",
      "md_id_carrera": "f0ced7ad-b74b-ed11-b948-00505689053e",
      "md_tipo_carrera": "PROGRAMAS ESPECIALES",
      "md_nombre_carrera": "Escuela Judicial - Diplomado en Derecho, Diplomado en Bioética, Bioderecho y Derechos fundamentales: aspectos bioéticos y su incidencia actual y futura en la normativa jurídica nacional e internacional",
      "md_landing_value": "eja-dd-dbbd",
      "modality": "Virtual"
  },
  {
      "hs_slug_code": "eja-dd-pjcp",
      "md_codigo_carrera": "eja-dd-pjcp",
      "hs_nombre_producto": "Escuela Judicial - Diplomado en Derecho: la prueba digital en el proceso Judicial Civil y Penal",
      "md_id_carrera": "f4adaf28-b64b-ed11-b972-0050568952e6",
      "md_tipo_carrera": "PROGRAMAS ESPECIALES",
      "md_nombre_carrera": "Diplomado en Derecho: la prueba digital en el proceso Judicial Civil y Penal",
      "md_landing_value": "eja-dd-pjcp",
      "modality": "Virtual"
  },
  {
      "hs_slug_code": "eja-dm-crac",
      "md_codigo_carrera": "eja-dm-crac",
      "hs_nombre_producto": "Escuela Judicial - Diplomado en mediación, conciliación y resolución alternativa de conflictos",
      "md_id_carrera": "0acfd7ad-b74b-ed11-b948-00505689053e",
      "md_tipo_carrera": "PROGRAMAS ESPECIALES",
      "md_nombre_carrera": "Escuela Judicial - Diplomado en mediación, conciliación y resolución alternativa de conflictos",
      "md_landing_value": "eja-dm-crac",
      "modality": "Virtual"
  },
  {
      "hs_slug_code": "eja-dn-tdpe",
      "md_codigo_carrera": "eja-dn-tdpe",
      "hs_nombre_producto": "Escuela Judicial - Diplomado en nuevas tendencias del Derecho penal económico",
      "md_id_carrera": "0ecfd7ad-b74b-ed11-b948-00505689053e",
      "md_tipo_carrera": "PROGRAMAS ESPECIALES",
      "md_nombre_carrera": "Escuela Judicial - Diplomado en nuevas tendencias del Derecho penal económico",
      "md_landing_value": "eja-dn-tdpe",
      "modality": "Virtual"
  },
  {
      "hs_slug_code": "eja-dr-jtar",
      "md_codigo_carrera": "eja-dr-jtar",
      "hs_nombre_producto": "Escuela Judicial - Diplomado en razonamiento judicial y técnicas argumentativas",
      "md_id_carrera": "10cfd7ad-b74b-ed11-b948-00505689053e",
      "md_tipo_carrera": "PROGRAMAS ESPECIALES",
      "md_nombre_carrera": "Escuela Judicial - Diplomado en razonamiento judicial y técnicas argumentativas",
      "md_landing_value": "eja-dr-jtar",
      "modality": "Virtual"
  },
  {
      "hs_slug_code": "eja-dt-lpap",
      "md_codigo_carrera": "eja-dt-lpap",
      "hs_nombre_producto": "Escuela Judicial - Diplomado en técnicas de litigación penal adversarial y prueba. Estrategias",
      "md_id_carrera": "12cfd7ad-b74b-ed11-b948-00505689053e",
      "md_tipo_carrera": "PROGRAMAS ESPECIALES",
      "md_nombre_carrera": "Escuela Judicial - Diplomado en técnicas de litigación penal adversarial y prueba. Estrategias",
      "md_landing_value": "eja-dt-lpap",
      "modality": "Virtual"
  },
  {
      "hs_slug_code": "eja-dt-ffmr",
      "md_codigo_carrera": "eja-dt-ffmr",
      "hs_nombre_producto": "Escuela Judicial - Diplomado en Tecnología financiera-fintech: con énfasis en marco regulatorio",
      "md_id_carrera": "06cfd7ad-b74b-ed11-b948-00505689053e",
      "md_tipo_carrera": "PROGRAMAS ESPECIALES",
      "md_nombre_carrera": "Escuela Judicial - Diplomado en Tecnología financiera-fintech: con énfasis en marco regulatorio",
      "md_landing_value": "eja-dt-ffmr",
      "modality": "Virtual"
  },
  {
      "hs_slug_code": "eja-dv-pmpp",
      "md_codigo_carrera": "eja-dv-pmpp",
      "hs_nombre_producto": "Escuela Judicial - Diplomado en valoración de la prueba y su motivación en el proceso penal",
      "md_id_carrera": "14cfd7ad-b74b-ed11-b948-00505689053e",
      "md_tipo_carrera": "PROGRAMAS ESPECIALES",
      "md_nombre_carrera": "Escuela Judicial - Diplomado en valoración de la prueba y su motivación en el proceso penal",
      "md_landing_value": "eja-dv-pmpp",
      "modality": "Virtual"
  },
  {
      "hs_slug_code": "gd-adma",
      "md_codigo_carrera": "VADG",
      "hs_nombre_producto": "Grado - Administracion Agraria - Online",
      "md_id_carrera": "991e9fce-2c4d-ec11-b945-00505689be00",
      "md_tipo_carrera": "PREGRADO",
      "md_nombre_carrera": "EDUC. VIRTUAL -LICENCIATURA EN ADMINISTRACIÓN AGRARIA",
      "md_landing_value": "ADMINISTRACIÓN AGRARIA",
      "modality": "Virtual"
  },
  {
      "hs_slug_code": "gd-vadmp",
      "md_codigo_carrera": "VADP",
      "hs_nombre_producto": "Grado - Administración Pública - Online",
      "md_id_carrera": "9d1e9fce-2c4d-ec11-b945-00505689be00",
      "md_tipo_carrera": "PREGRADO",
      "md_nombre_carrera": "EDUC. VIRTUAL - LICENCIATURA EN ADMINISTRACIÓN PÚBLICA",
      "md_landing_value": "Administración Pública",
      "modality": "Virtual"
  },
  {
      "hs_slug_code": "gd-arqu",
      "md_codigo_carrera": "ARQ",
      "hs_nombre_producto": "Grado - Arquitectura",
      "md_id_carrera": "4b1e9fce-2c4d-ec11-b945-00505689be00",
      "md_tipo_carrera": "PREGRADO",
      "md_nombre_carrera": "ARQUITECTURA",
      "md_landing_value": "Arquitectura",
      "modality": "Presencial"
  },
  {
      "hs_slug_code": "gd-ccom",
      "md_codigo_carrera": "PER",
      "hs_nombre_producto": "Grado - Ciencias De La Comunicacion",
      "md_id_carrera": "911e9fce-2c4d-ec11-b945-00505689be00",
      "md_tipo_carrera": "PREGRADO",
      "md_nombre_carrera": "LICENCIATURA EN CIENCIAS DE LA COMUNICACION",
      "md_landing_value": "Ciencias de la Comunicación",
      "modality": "Presencial"
  },
  {
      "hs_slug_code": "gd-vccom",
      "md_codigo_carrera": "VPER",
      "hs_nombre_producto": "Grado - Ciencias De La Comunicacion - Online",
      "md_id_carrera": "d71e9fce-2c4d-ec11-b945-00505689be00",
      "md_tipo_carrera": "PREGRADO",
      "md_nombre_carrera": "EDUCAC. VIRTUAL LIC. EN CIENCIAS DE LA COMUNICACION",
      "md_landing_value": "Ciencias de la Comunicación",
      "modality": "Virtual"
  },
  {
      "hs_slug_code": "gd-cint",
      "md_codigo_carrera": "VCDI",
      "hs_nombre_producto": "Grado - Ciudades Inteligentes - Online",
      "md_id_carrera": "a31e9fce-2c4d-ec11-b945-00505689be00",
      "md_tipo_carrera": "PREGRADO",
      "md_nombre_carrera": "EDUC. VIRTUAL - LICENCIATURA EN CIUDADES INTELIGENTES",
      "md_landing_value": "Ciudades Inteligentes",
      "modality": "Virtual"
  },
  {
      "hs_slug_code": "gd-come",
      "md_codigo_carrera": "ICA",
      "hs_nombre_producto": "Grado - Comercial",
      "md_id_carrera": "6b1e9fce-2c4d-ec11-b945-00505689be00",
      "md_tipo_carrera": "PREGRADO",
      "md_nombre_carrera": "INGENIERIA COMERCIAL",
      "md_landing_value": "Ingeniería Comercial",
      "modality": "Presencial"
  },
  {
      "hs_slug_code": "gd-vcome",
      "md_codigo_carrera": "VICA",
      "hs_nombre_producto": "Grado - Comercial - Online",
      "md_id_carrera": "bb1e9fce-2c4d-ec11-b945-00505689be00",
      "md_tipo_carrera": "PREGRADO",
      "md_nombre_carrera": "EDUC. VIRTUAL - INGENIERIA COMERCIAL",
      "md_landing_value": "Ingeniería Comercial",
      "modality": "Virtual"
  },
  {
      "hs_slug_code": "gd-comi",
      "md_codigo_carrera": "CIN",
      "hs_nombre_producto": "Grado - Comercio Internacional",
      "md_id_carrera": "511e9fce-2c4d-ec11-b945-00505689be00",
      "md_tipo_carrera": "PREGRADO",
      "md_nombre_carrera": "LICENCIATURA EN COMERCIO INTERNACIONAL",
      "md_landing_value": "Comercio Internacional",
      "modality": "Presencial"
  },
  {
      "hs_slug_code": "gd-vcomi",
      "md_codigo_carrera": "VCIN",
      "hs_nombre_producto": "Grado - Comercio Internacional - Online",
      "md_id_carrera": "a71e9fce-2c4d-ec11-b945-00505689be00",
      "md_tipo_carrera": "PREGRADO",
      "md_nombre_carrera": "EDUC. VIRTUAL - COMERCIO INTERNACIONAL",
      "md_landing_value": "Comercio Internacional",
      "modality": "Virtual"
  },
  {
      "hs_slug_code": "gd-caud",
      "md_codigo_carrera": "COA",
      "hs_nombre_producto": "Grado - Comunicacion Audiovisual",
      "md_id_carrera": "531e9fce-2c4d-ec11-b945-00505689be00",
      "md_tipo_carrera": "PREGRADO",
      "md_nombre_carrera": "LICENCIATURA EN COMUNICACION AUDIOVISUAL",
      "md_landing_value": "Comunicación Audiovisual",
      "modality": "Presencial"
  },
  {
      "hs_slug_code": "gd-conp",
      "md_codigo_carrera": "CONTA",
      "hs_nombre_producto": "Grado - Contaduria Pública",
      "md_id_carrera": "551e9fce-2c4d-ec11-b945-00505689be00",
      "md_tipo_carrera": "PREGRADO",
      "md_nombre_carrera": "CONTADURÍA PÚBLICA",
      "md_landing_value": "CONTADURÍA PÚBLICA",
      "modality": "Presencial"
  },
  {
      "hs_slug_code": "gd-vconp",
      "md_codigo_carrera": "VCONTA",
      "hs_nombre_producto": "Grado - Contaduria Pública - Online",
      "md_id_carrera": "a91e9fce-2c4d-ec11-b945-00505689be00",
      "md_tipo_carrera": "PREGRADO",
      "md_nombre_carrera": "EDUC. VIRTUAL - CONTADURIA PÚBLICA",
      "md_landing_value": "CONTADURÍA PÚBLICA",
      "modality": "Virtual"
  },
  {
      "hs_slug_code": "gd-vcrim",
      "md_codigo_carrera": "VCRIS",
      "hs_nombre_producto": "Grado - Criminología - Online",
      "md_id_carrera": "ab1e9fce-2c4d-ec11-b945-00505689be00",
      "md_tipo_carrera": "PREGRADO",
      "md_nombre_carrera": "EDUC. VIRTUAL -LICENCIATURA EN CRIMINOLOGÍA Y SEGURIDAD",
      "md_landing_value": "CRIMINOLOGÍA Y SEGURIDAD",
      "modality": "Virtual"
  },
  {
      "hs_slug_code": "gd-dere",
      "md_codigo_carrera": "DER",
      "hs_nombre_producto": "Grado - Derecho",
      "md_id_carrera": "5b1e9fce-2c4d-ec11-b945-00505689be00",
      "md_tipo_carrera": "PREGRADO",
      "md_nombre_carrera": "DERECHO",
      "md_landing_value": "Derecho",
      "modality": "Presencial"
  },
  {
      "hs_slug_code": "gd-vdere",
      "md_codigo_carrera": "VDER",
      "hs_nombre_producto": "Grado - Derecho - Online",
      "md_id_carrera": "af1e9fce-2c4d-ec11-b945-00505689be00",
      "md_tipo_carrera": "PREGRADO",
      "md_nombre_carrera": "EDUC. VIRTUAL - DERECHO",
      "md_landing_value": "Derecho",
      "modality": "Virtual"
  },
  {
      "hs_slug_code": "gd-dmin",
      "md_codigo_carrera": "DMI",
      "hs_nombre_producto": "Grado - Diseño De Moda E Indumentaria",
      "md_id_carrera": "631e9fce-2c4d-ec11-b945-00505689be00",
      "md_tipo_carrera": "PREGRADO",
      "md_nombre_carrera": "LICENCIATURA EN DISEÑO DE MODA E INDUMENTARIA",
      "md_landing_value": "Diseño de Moda e Indumentaria",
      "modality": "Presencial"
  },
  {
      "hs_slug_code": "gd-digr",
      "md_codigo_carrera": "DIG",
      "hs_nombre_producto": "Grado - Diseño Grafico",
      "md_id_carrera": "5d1e9fce-2c4d-ec11-b945-00505689be00",
      "md_tipo_carrera": "PREGRADO",
      "md_nombre_carrera": "LICENCIATURA EN DISEÑO GRAFICO",
      "md_landing_value": "Diseño Gráfico",
      "modality": "Presencial"
  },
  {
      "hs_slug_code": "gd-dadi",
      "md_codigo_carrera": "VDAD",
      "hs_nombre_producto": "Grado - Diseño Y Animación Digital - Online",
      "md_id_carrera": "ad1e9fce-2c4d-ec11-b945-00505689be00",
      "md_tipo_carrera": "PREGRADO",
      "md_nombre_carrera": "EDUC. VIRTUAL -LICENCIATURA EN DISEÑO Y ANIMACIÓN DIGITAL",
      "md_landing_value": "Diseño y Animación Digital",
      "modality": "Virtual"
  },
  {
      "hs_slug_code": "gd-econ",
      "md_codigo_carrera": "ECO",
      "hs_nombre_producto": "Grado - Economía",
      "md_id_carrera": "651e9fce-2c4d-ec11-b945-00505689be00",
      "md_tipo_carrera": "PREGRADO",
      "md_nombre_carrera": "ECONOMÍA",
      "md_landing_value": "Economía",
      "modality": "Presencial"
  },
  {
      "hs_slug_code": "gd-vecon",
      "md_codigo_carrera": "VECO",
      "hs_nombre_producto": "Grado - Economía - Online",
      "md_id_carrera": "b11e9fce-2c4d-ec11-b945-00505689be00",
      "md_tipo_carrera": "PREGRADO",
      "md_nombre_carrera": "EDUCAC. VIRTUAL - ECONOMÍA.",
      "md_landing_value": "Economía",
      "modality": "Virtual"
  },
  {
      "hs_slug_code": "gd-educ",
      "md_codigo_carrera": "VCED",
      "hs_nombre_producto": "Grado - Educacion - Online",
      "md_id_carrera": "a51e9fce-2c4d-ec11-b945-00505689be00",
      "md_tipo_carrera": "PREGRADO",
      "md_nombre_carrera": "EDUCAC. VIRTUAL - LICENCIATURA EN EDUCACIÓN",
      "md_landing_value": "Educación",
      "modality": "Virtual"
  },
  {
      "hs_slug_code": "gd-grhu",
      "md_codigo_carrera": "GRH",
      "hs_nombre_producto": "Grado - Gestion De Recursos Humanos",
      "md_id_carrera": "691e9fce-2c4d-ec11-b945-00505689be00",
      "md_tipo_carrera": "PREGRADO",
      "md_nombre_carrera": "LICENCIATURA EN GESTIÓN DE RECURSOS HUMANOS",
      "md_landing_value": "Recursos Humanos",
      "modality": "Presencial"
  },
  {
      "hs_slug_code": "gd-vgrhu",
      "md_codigo_carrera": "VGRH",
      "hs_nombre_producto": "Grado - Gestion De Recursos Humanos - Online",
      "md_id_carrera": "b51e9fce-2c4d-ec11-b945-00505689be00",
      "md_tipo_carrera": "PREGRADO",
      "md_nombre_carrera": "EDUC. VIRTUAL - LICENCIATURA EN GESTIÓN DE RECURSOS HUMANOS",
      "md_landing_value": "Recursos Humanos",
      "modality": "Virtual"
  },
  {
      "hs_slug_code": "gd-gtho",
      "md_codigo_carrera": "GHT",
      "hs_nombre_producto": "Grado - Gestion De Turismo Y Hoteleria",
      "md_id_carrera": "671e9fce-2c4d-ec11-b945-00505689be00",
      "md_tipo_carrera": "PREGRADO",
      "md_nombre_carrera": "LICENCIATURA EN GESTION DE TURISMO Y HOTELERIA",
      "md_landing_value": "Turismo & Hotelería",
      "modality": "Presencial"
  },
  {
      "hs_slug_code": "gd-vgtho",
      "md_codigo_carrera": "VGHT",
      "hs_nombre_producto": "Grado - Gestion De Turismo Y Hoteleria - Online",
      "md_id_carrera": "b31e9fce-2c4d-ec11-b945-00505689be00",
      "md_tipo_carrera": "PREGRADO",
      "md_nombre_carrera": "EDUC. VIRTUAL - GESTION DE TURISMO Y HOTELERIA",
      "md_landing_value": "Turismo & Hotelería",
      "modality": "Virtual"
  },
  {
      "hs_slug_code": "gd-indu",
      "md_codigo_carrera": "IND",
      "hs_nombre_producto": "Grado - Industrial",
      "md_id_carrera": "6d1e9fce-2c4d-ec11-b945-00505689be00",
      "md_tipo_carrera": "PREGRADO",
      "md_nombre_carrera": "INGENIERIA INDUSTRIAL",
      "md_landing_value": "Ingeniería Industrial",
      "modality": "Presencial"
  },
  {
      "hs_slug_code": "gd-info",
      "md_codigo_carrera": "INF",
      "hs_nombre_producto": "Grado - Informatica",
      "md_id_carrera": "6f1e9fce-2c4d-ec11-b945-00505689be00",
      "md_tipo_carrera": "PREGRADO",
      "md_nombre_carrera": "INGENIERIA EN INFORMATICA",
      "md_landing_value": "Informática",
      "modality": "Presencial"
  },
  {
      "hs_slug_code": "gd-mktp",
      "md_codigo_carrera": "MAK",
      "hs_nombre_producto": "Grado - Ing. Marketing Y Publicidad",
      "md_id_carrera": "771e9fce-2c4d-ec11-b945-00505689be00",
      "md_tipo_carrera": "PREGRADO",
      "md_nombre_carrera": "INGENIERIA EN MARKETING Y PUBLICIDAD",
      "md_landing_value": "Marketing & Publicidad",
      "modality": "Presencial"
  },
  {
      "hs_slug_code": "gd-vmktp",
      "md_codigo_carrera": "VMAK",
      "hs_nombre_producto": "Grado - Ing. Marketing Y Publicidad - Online",
      "md_id_carrera": "c51e9fce-2c4d-ec11-b945-00505689be00",
      "md_tipo_carrera": "PREGRADO",
      "md_nombre_carrera": "EDUC. VIRTUAL - MARKETING Y PUBLICIDAD",
      "md_landing_value": "Marketing & Publicidad",
      "modality": "Virtual"
  },
  {
      "hs_slug_code": "gd-vides",
      "md_codigo_carrera": "VIDES",
      "hs_nombre_producto": "Grado - Innovación Y Desarrollo - Online",
      "md_id_carrera": "bd1e9fce-2c4d-ec11-b945-00505689be00",
      "md_tipo_carrera": "PREGRADO",
      "md_nombre_carrera": "EDUC. VIRTUAL - LICENCIATURA EN INNOVACIÓN Y DESARROLLO",
      "md_landing_value": "Innovación y Desarrollo",
      "modality": "Virtual"
  },
  {
      "hs_slug_code": "gd-viaro",
      "md_codigo_carrera": "VIAR",
      "hs_nombre_producto": "Grado - Inteligencia Artificial Y Robótica - Online",
      "md_id_carrera": "b91e9fce-2c4d-ec11-b945-00505689be00",
      "md_tipo_carrera": "PREGRADO",
      "md_nombre_carrera": "EDUC. VIRTUAL - LICENCIATURA EN INTELIGENCIA ARTIFICIAL Y ROBÓTICA",
      "md_landing_value": "Inteligencia Artificial y Robótica",
      "modality": "Virtual"
  },
  {
      "hs_slug_code": "gd-adem",
      "md_codigo_carrera": "ADM",
      "hs_nombre_producto": "Grado - Lic. Administracion De Empresas",
      "md_id_carrera": "131e9fce-2c4d-ec11-b945-00505689be00",
      "md_tipo_carrera": "PREGRADO",
      "md_nombre_carrera": "LICENCIATURA EN ADMINISTRACION DE EMPRESAS",
      "md_landing_value": "Administración de Empresas",
      "modality": "Presencial"
  },
  {
      "hs_slug_code": "gd-vadem",
      "md_codigo_carrera": "VADM",
      "hs_nombre_producto": "Grado - Lic. Administracion De Empresas - Online",
      "md_id_carrera": "9b1e9fce-2c4d-ec11-b945-00505689be00",
      "md_tipo_carrera": "PREGRADO",
      "md_nombre_carrera": "EDUCAC. VIRTUAL - ADMINISTRACION DE EMPRESAS",
      "md_landing_value": "Administración de Empresas",
      "modality": "Virtual"
  },
  {
      "hs_slug_code": "gd-ians",
      "md_codigo_carrera": "VASI",
      "hs_nombre_producto": "Grado - Lic. Análisis de Sistema - Online",
      "md_id_carrera": "9f1e9fce-2c4d-ec11-b945-00505689be00",
      "md_tipo_carrera": "PREGRADO",
      "md_nombre_carrera": "EDUC. VIRTUAL - LIC. INFORMATICA",
      "md_landing_value": "Análisis de Sistemas",
      "modality": "Virtual"
  },
  {
      "hs_slug_code": "gd-vlglo",
      "md_codigo_carrera": "VLOG",
      "hs_nombre_producto": "Grado - Logística Global - Online",
      "md_id_carrera": "bf1e9fce-2c4d-ec11-b945-00505689be00",
      "md_tipo_carrera": "PREGRADO",
      "md_nombre_carrera": "EDUC. VIRTUAL - LICENCIATURA EN LOGÍSTICA GLOBAL",
      "md_landing_value": "Logística Global",
      "modality": "Virtual"
  },
  {
      "hs_slug_code": "gd-psil",
      "md_codigo_carrera": "VPSI",
      "hs_nombre_producto": "Grado - Psicología - Online",
      "md_id_carrera": "d91e9fce-2c4d-ec11-b945-00505689be00",
      "md_tipo_carrera": "PREGRADO",
      "md_nombre_carrera": "EDUC. VIRTUAL - LICENCIATURA EN PSICOLOGÍA",
      "md_landing_value": "Psicología",
      "modality": "Virtual"
  },
  {
      "hs_slug_code": "gd-psip",
      "md_codigo_carrera": "VPDG",
      "hs_nombre_producto": "Grado - Psicopedagogia - Online",
      "md_id_carrera": "d51e9fce-2c4d-ec11-b945-00505689be00",
      "md_tipo_carrera": "PREGRADO",
      "md_nombre_carrera": "EDUC. VIRTUAL -LICENCIATURA EN PSICOPEDAGOGÍA",
      "md_landing_value": "PSICOPEDAGOGÍA",
      "modality": "Virtual"
  },
  {
      "hs_slug_code": "gd-rein",
      "md_codigo_carrera": "RIN",
      "hs_nombre_producto": "Grado - Relaciones Internacionales",
      "md_id_carrera": "951e9fce-2c4d-ec11-b945-00505689be00",
      "md_tipo_carrera": "PREGRADO",
      "md_nombre_carrera": "LICENCIATURA EN RELACIONES INTERNACIONALES",
      "md_landing_value": "Relaciones Internacionales",
      "modality": "Presencial"
  },
  {
      "hs_slug_code": "gd-vrein",
      "md_codigo_carrera": "VRIN",
      "hs_nombre_producto": "Grado - Relaciones Internacionales - Online",
      "md_id_carrera": "db1e9fce-2c4d-ec11-b945-00505689be00",
      "md_tipo_carrera": "PREGRADO",
      "md_nombre_carrera": "EDUCAC. VIRTUAL - RELACIONES INTERNACIONALES.",
      "md_landing_value": "Relaciones Internacionales",
      "modality": "Virtual"
  },
  {
      "hs_slug_code": "gd-rppr",
      "md_codigo_carrera": "VRRPP",
      "hs_nombre_producto": "Grado - Relaciones Públicas Y Protocolo - Online",
      "md_id_carrera": "dd1e9fce-2c4d-ec11-b945-00505689be00",
      "md_tipo_carrera": "PREGRADO",
      "md_nombre_carrera": "EDUC. VIRTUAL - LICENCIATURA EN RELACIONES PÚBLICAS Y PROTOCOLO",
      "md_landing_value": "Relaciones Públicas & Protocolo",
      "modality": "Virtual"
  },
  {
      "hs_slug_code": "pg-dltr",
      "md_codigo_carrera": "pg-dltr",
      "hs_nombre_producto": "Posgrado - Diplomado Liderazgo para la Transformación 2.0 - CAF",
      "md_id_carrera": "b96f2fc9-feda-ed11-b979-0050568952e6",
      "md_tipo_carrera": "PROGRAMAS ESPECIALES",
      "md_nombre_carrera": "Diplomado Liderazgo para la Transformación 2.0",
      "md_landing_value": "pg-dltr",
      "modality": "Presencial"
  },
  {
      "hs_slug_code": "pg-dc-admi",
      "md_codigo_carrera": "pg-dc-admi",
      "hs_nombre_producto": "Posgrado - Doctorado en Administración",
      "md_id_carrera": "7339b232-3d55-ed11-b948-00505689053e",
      "md_tipo_carrera": "POSGRADO",
      "md_nombre_carrera": "DOCTORADO EN ADMINISTRACIÓN",
      "md_landing_value": "pg-dc-admi",
      "modality": "Presencial"
  },
  {
      "hs_slug_code": "pg-dcjs",
      "md_codigo_carrera": "DCJN",
      "hs_nombre_producto": "Posgrado - Doctorado En Ciencias Jurídicas, Sociales Y Notariales",
      "md_id_carrera": "d78872f5-a769-ec11-b945-00505689be00",
      "md_tipo_carrera": "POSGRADO",
      "md_nombre_carrera": "DOCTORADO EN CIENCIAS JURÍDICAS Y NOTARÍALES",
      "md_landing_value": "DOCTORADO EN CIENCIAS JURÍDICAS Y NOTARÍALES",
      "modality": "Presencial"
  },
  {
      "hs_slug_code": "pg-dc-edus",
      "md_codigo_carrera": "pg-dc-edus",
      "hs_nombre_producto": "Posgrado - Doctorado en Educación con Énfasis en Educación Superior",
      "md_id_carrera": "7139b232-3d55-ed11-b948-00505689053e",
      "md_tipo_carrera": "POSGRADO",
      "md_nombre_carrera": "DOCTORADO EN EDUCACIÓN CON ÉNFASIS EN EDUCACIÓN SUPERIOR",
      "md_landing_value": "pg-dc-edus",
      "modality": "Presencial"
  },
  {
      "hs_slug_code": "pg-dnco",
      "md_codigo_carrera": "DNCC",
      "hs_nombre_producto": "Posgrado - Doctorado En Neurociencia Cognitiva - Online",
      "md_id_carrera": "b71e9fce-2c4d-ec11-b945-00505689be00",
      "md_tipo_carrera": "POSGRADO",
      "md_nombre_carrera": "DOCTORADO EN NEUROCIENCIA COGNITIVA",
      "md_landing_value": "DOCTORADO EN NEUROCIENCIA COGNITIVA",
      "modality": "Virtual"
  },
  {
      "hs_slug_code": "pg-made",
      "md_codigo_carrera": "MADE",
      "hs_nombre_producto": "Posgrado - Maestría En Administración Y Dirección De Empresas",
      "md_id_carrera": "731e9fce-2c4d-ec11-b945-00505689be00",
      "md_tipo_carrera": "POSGRADO",
      "md_nombre_carrera": "MAESTRIA EN ADMINISTRACIÓN Y DIRECCIÓN DE EMPRESAS",
      "md_landing_value": "MAESTRÍA EN ADMINISTRACIÓN Y DIRECCIÓN DE EMPRESAS",
      "modality": "Presencial"
  },
  {
      "hs_slug_code": "pg-vmade",
      "md_codigo_carrera": "VMADE",
      "hs_nombre_producto": "Posgrado - Maestría En Administración Y Dirección De Empresas - Online",
      "md_id_carrera": "c31e9fce-2c4d-ec11-b945-00505689be00",
      "md_tipo_carrera": "POSGRADO",
      "md_nombre_carrera": "MAESTRIA EN ADMINISTRACION Y DIRECCION DE EMPRESAS - VIRTUAL",
      "md_landing_value": "MAESTRÍA EN ADMINISTRACIÓN Y DIRECCIÓN DE EMPRESAS",
      "modality": "Virtual"
  },
  {
      "hs_slug_code": "pg-mact",
      "md_codigo_carrera": "MACyT",
      "hs_nombre_producto": "Posgrado - Maestría En Auditoría Contable Y Tributación",
      "md_id_carrera": "711e9fce-2c4d-ec11-b945-00505689be00",
      "md_tipo_carrera": "POSGRADO",
      "md_nombre_carrera": "MAESTRIA EN AUDITORIA CONTABLE Y TRIBUTACIÓN",
      "md_landing_value": "MAESTRÍA EN AUDITORIA CONTABLE Y TRIBUTACIÓN",
      "modality": "Presencial"
  },
  {
      "hs_slug_code": "pg-mdpc",
      "md_codigo_carrera": "MDCYPC",
      "hs_nombre_producto": "Posgrado - Maestría En Derecho Civil Y Procesal Civil",
      "md_id_carrera": "7b1e9fce-2c4d-ec11-b945-00505689be00",
      "md_tipo_carrera": "POSGRADO",
      "md_nombre_carrera": "MÁSTER EN DERECHO CIVIL Y PROCESAL CIVIL",
      "md_landing_value": "MAESTRÍA EN DERECHO CIVIL Y PROCESAL CIVIL",
      "modality": "Presencial"
  },
  {
      "hs_slug_code": "pg-vmdpc",
      "md_codigo_carrera": "VMDCPC",
      "hs_nombre_producto": "Posgrado - Maestría En Derecho Civil Y Procesal Civil - Online",
      "md_id_carrera": "c71e9fce-2c4d-ec11-b945-00505689be00",
      "md_tipo_carrera": "POSGRADO",
      "md_nombre_carrera": "MAESTRIA EN DERECHO CIVIL Y PROCESAL CIVIL",
      "md_landing_value": "MAESTRÍA EN DERECHO CIVIL Y PROCESAL CIVIL",
      "modality": "Virtual"
  },
  {
      "hs_slug_code": "pg-mdpp",
      "md_codigo_carrera": "MDPyPP",
      "hs_nombre_producto": "Posgrado - Maestría En Derecho Penal Y Procesal Penal",
      "md_id_carrera": "7d1e9fce-2c4d-ec11-b945-00505689be00",
      "md_tipo_carrera": "POSGRADO",
      "md_nombre_carrera": "MAESTRIA EN DERECHO PENAL Y PROCESAL PENAL",
      "md_landing_value": "MAESTRÍA EN DERECHO PENAL Y PROCESAL PENAL",
      "modality": "Presencial"
  },
  {
      "hs_slug_code": "pg-vmdpp",
      "md_codigo_carrera": "VMDPYPP",
      "hs_nombre_producto": "Posgrado - Maestría En Derecho Penal Y Procesal Penal - Online",
      "md_id_carrera": "c91e9fce-2c4d-ec11-b945-00505689be00",
      "md_tipo_carrera": "POSGRADO",
      "md_nombre_carrera": "Maestría En Derecho Penal Y Procesal Penal",
      "md_landing_value": "MAESTRIA EN DERECHO PENAL Y PROCESAL PENAL VIRTUAL",
      "modality": "Virtual"
  },
  {
      "hs_slug_code": "pg-vmedu",
      "md_codigo_carrera": "VMEDU",
      "hs_nombre_producto": "Posgrado - Maestría En Educación Con Énfasis En Docencia Universitaria - Online",
      "md_id_carrera": "cb1e9fce-2c4d-ec11-b945-00505689be00",
      "md_tipo_carrera": "POSGRADO",
      "md_nombre_carrera": "MAESTRÍA EN EDUCACIÓN CON ÉNFASIS EN DOCENCIA UNIVERSITARIA",
      "md_landing_value": "MAESTRÍA EN EDUCACIÓN CON ÉNFASIS EN DOCENCIA UNIVERSITARIA",
      "modality": "Virtual"
  },
  {
      "hs_slug_code": "pg-mfin",
      "md_codigo_carrera": "MAFIN",
      "hs_nombre_producto": "Posgrado - Maestría En Finanzas",
      "md_id_carrera": "751e9fce-2c4d-ec11-b945-00505689be00",
      "md_tipo_carrera": "POSGRADO",
      "md_nombre_carrera": "MAESTRIA EN FINANZAS",
      "md_landing_value": "MAESTRÍA EN FINANZAS.",
      "modality": "Presencial"
  },
  {
      "hs_slug_code": "pg-gerh",
      "md_codigo_carrera": "MGERH",
      "hs_nombre_producto": "Posgrado - Maestría En Gerencia Estratégica De Recursos Humanos",
      "md_id_carrera": "851e9fce-2c4d-ec11-b945-00505689be00",
      "md_tipo_carrera": "POSGRADO",
      "md_nombre_carrera": "MAESTRIA EN GERENCIA ESTRATEGICA DE RECURSOS HUMANOS",
      "md_landing_value": "MAESTRIA EN GESTIÓN ESTRATEGICA DE RECURSOS HUMANOS",
      "modality": "Presencial"
  },
  {
      "hs_slug_code": "pg-mgin",
      "md_codigo_carrera": "MGEIN",
      "hs_nombre_producto": "Posgrado - Maestria En Gestión De La Innovación",
      "md_id_carrera": "831e9fce-2c4d-ec11-b945-00505689be00",
      "md_tipo_carrera": "POSGRADO",
      "md_nombre_carrera": "MAESTRÍA EN GESTIÓN DE LA INNOVACIÓN",
      "md_landing_value": "MAESTRÍA EN GESTIÓN DE LA INNOVACIÓN",
      "modality": "Presencial"
  },
  {
      "hs_slug_code": "pg-mgep",
      "md_codigo_carrera": "MGP",
      "hs_nombre_producto": "Posgrado - Maestría En Gestión De Proyecto",
      "md_id_carrera": "891e9fce-2c4d-ec11-b945-00505689be00",
      "md_tipo_carrera": "POSGRADO",
      "md_nombre_carrera": "MAESTRIA EN GESTION DE PROYECTOS",
      "md_landing_value": "MAESTRÍA EN GESTIÓN DE PROYECTOS",
      "modality": "Presencial"
  },
  {
      "hs_slug_code": "pg-mgde",
      "md_codigo_carrera": "MGD",
      "hs_nombre_producto": "Posgrado - Maestria En Gestión Deportiva",
      "md_id_carrera": "811e9fce-2c4d-ec11-b945-00505689be00",
      "md_tipo_carrera": "POSGRADO",
      "md_nombre_carrera": "MAESTRIA EN GESTION DEPORTIVA",
      "md_landing_value": "MAESTRIA EN GESTIÓN DEPORTIVA",
      "modality": "Presencial"
  },
  {
      "hs_slug_code": "pg-mgrh",
      "md_codigo_carrera": "VMGETH",
      "hs_nombre_producto": "Posgrado - Maestría En Gestión Estratégica De Recursos Humanos - Online",
      "md_id_carrera": "cd1e9fce-2c4d-ec11-b945-00505689be00",
      "md_tipo_carrera": "POSGRADO",
      "md_nombre_carrera": "MAESTRÍA EN GESTIÓN ESTRATÉGICA DEL TALENTO HUMANO",
      "md_landing_value": "MAESTRIA EN GESTIÓN ESTRATEGICA DE RECURSOS HUMANOS",
      "modality": "Virtual"
  },
  {
      "hs_slug_code": "pg-mggp",
      "md_codigo_carrera": "MGGP",
      "hs_nombre_producto": "Posgrado - Maestría En Gobierno Y Gerencia Pública",
      "md_id_carrera": "5f1e9fce-2c4d-ec11-b945-00505689be00",
      "md_tipo_carrera": "POSGRADO",
      "md_nombre_carrera": "MÁSTER EN GOBIERNO Y GERENCIA PÚBLICA",
      "md_landing_value": "MAESTRÍA EN GOBIERNO Y GERENCIA PÚBLICA",
      "modality": "Presencial"
  },
  {
      "hs_slug_code": "pg-vmggp",
      "md_codigo_carrera": "VMGGP",
      "hs_nombre_producto": "Posgrado - Maestría En Gobierno Y Gerencia Pública - Online",
      "md_id_carrera": "cf1e9fce-2c4d-ec11-b945-00505689be00",
      "md_tipo_carrera": "POSGRADO",
      "md_nombre_carrera": "MAESTRIA VIRTUAL EN GOBIERNO Y GERENCIA PUBLICA",
      "md_landing_value": "MAESTRÍA EN GOBIERNO Y GERENCIA PÚBLICA",
      "modality": "Virtual"
  },
  {
      "hs_slug_code": "pg-vmmgv",
      "md_codigo_carrera": "MMYGEV",
      "hs_nombre_producto": "Posgrado - Maestría En Marketing Y Gestión Estratégica De Ventas",
      "md_id_carrera": "d31e9fce-2c4d-ec11-b945-00505689be00",
      "md_tipo_carrera": "POSGRADO",
      "md_nombre_carrera": "MAESTRIA EN MARKETING Y GESTIÓN ESTRATEGICA DE VENTAS",
      "md_landing_value": "MAESTRIA EN MARKETING Y GESTIÓN ESTRATEGICA DE VENTAS",
      "modality": "Presencial"
  },
  {
      "hs_slug_code": "pg-mmgv",
      "md_codigo_carrera": "VMMYGEV",
      "hs_nombre_producto": "Posgrado - Maestría En Marketing Y Gestión Estratégica De Ventas - Online",
      "md_id_carrera": "8d1e9fce-2c4d-ec11-b945-00505689be00",
      "md_tipo_carrera": "POSGRADO",
      "md_nombre_carrera": "MAESTRIA EN MARKETING Y GESTION ESTRATEGICA DE VENTAS",
      "md_landing_value": "MAESTRÍA EN MARKETING Y GESTIÓN ESTRATÉGICA DE VENTAS",
      "modality": "Virtual"
  },
  {
      "hs_slug_code": "pg-mspu",
      "md_codigo_carrera": "MSAP",
      "hs_nombre_producto": "Posgrado - Maestría En Salud Pública",
      "md_id_carrera": "8f1e9fce-2c4d-ec11-b945-00505689be00",
      "md_tipo_carrera": "POSGRADO",
      "md_nombre_carrera": "MAESTRIA EN SALUD PUBLICA",
      "md_landing_value": "Maestría en Salud Pública",
      "modality": "Presencial"
  },
  {
      "hs_slug_code": "pg-mbad",
      "md_codigo_carrera": "MBA",
      "hs_nombre_producto": "Posgrado - Master In Business Administration - Global MBA",
      "md_id_carrera": "791e9fce-2c4d-ec11-b945-00505689be00",
      "md_tipo_carrera": "POSGRADO",
      "md_nombre_carrera": "MASTER IN BUSINESS ADMINISTRATION",
      "md_landing_value": "MASTER IN BUSINESS ADMINISTRATION",
      "modality": "Presencial"
  },
  {
      "hs_slug_code": "wz-kids-cn",
      "md_codigo_carrera": "wz-kids-cn",
      "hs_nombre_producto": "Wizard - Kids - Generico - Connections",
      "md_id_carrera": "b4d7430d-23fe-ec11-b945-00505689053e",
      "md_tipo_carrera": "IDIOMAS",
      "md_nombre_carrera": "Wizard-Kids-Generico-Conection",
      "md_landing_value": "wz-kids-cn",
      "modality": "Presencial"
  },
  {
      "hs_slug_code": "wz-kids-in",
      "md_codigo_carrera": "wz-kids-in",
      "hs_nombre_producto": "Wizard - Kids - Generico - Interactive",
      "md_id_carrera": "b6d7430d-23fe-ec11-b945-00505689053e",
      "md_tipo_carrera": "IDIOMAS",
      "md_nombre_carrera": "Wizard-Kids-Generico-Interactive",
      "md_landing_value": "wz-kids-in",
      "modality": "Presencial"
  },
  {
      "hs_slug_code": "wz-kids-on",
      "md_codigo_carrera": "wz-kids-on",
      "hs_nombre_producto": "Wizard - Kids - Generico - Online",
      "md_id_carrera": "b8d7430d-23fe-ec11-b945-00505689053e",
      "md_tipo_carrera": "IDIOMAS",
      "md_nombre_carrera": "Wizard-Kids-Generico-Online",
      "md_landing_value": "wz-kids-on",
      "modality": "Virtual"
  },
  {
      "hs_slug_code": "wz-teens-cn",
      "md_codigo_carrera": "wz-teens-cn",
      "hs_nombre_producto": "Wizard - Teens - Generico - Connections",
      "md_id_carrera": "bad7430d-23fe-ec11-b945-00505689053e",
      "md_tipo_carrera": "IDIOMAS",
      "md_nombre_carrera": "Wizard-Teens-Generico-Conection",
      "md_landing_value": "wz-teens-cn",
      "modality": "Presencial"
  },
  {
      "hs_slug_code": "wz-teens-in",
      "md_codigo_carrera": "wz-teens-in",
      "hs_nombre_producto": "Wizard - Teens - Generico - Interactive",
      "md_id_carrera": "bcd7430d-23fe-ec11-b945-00505689053e",
      "md_tipo_carrera": "IDIOMAS",
      "md_nombre_carrera": "Wizard-Teens-Generico-Interactive",
      "md_landing_value": "wz-teens-in",
      "modality": "Presencial"
  },
  {
      "hs_slug_code": "wz-teens-on",
      "md_codigo_carrera": "wz-teens-on",
      "hs_nombre_producto": "Wizard - Teens - Generico - Online",
      "md_id_carrera": "bed7430d-23fe-ec11-b945-00505689053e",
      "md_tipo_carrera": "IDIOMAS",
      "md_nombre_carrera": "Wizard-Teens-Generico-Online",
      "md_landing_value": "wz-teens-on",
      "modality": "Virtual"
  },
  {
      "hs_slug_code": "wz-tots-cn",
      "md_codigo_carrera": "wz-tots-cn",
      "hs_nombre_producto": "Wizard - Tots - Generico - Connections",
      "md_id_carrera": "aed7430d-23fe-ec11-b945-00505689053e",
      "md_tipo_carrera": "IDIOMAS",
      "md_nombre_carrera": "Wizard-Tots-Generico-Conection",
      "md_landing_value": "wz-tots-cn",
      "modality": "Presencial"
  },
  {
      "hs_slug_code": "wz-tots-in",
      "md_codigo_carrera": "wz-tots-in",
      "hs_nombre_producto": "Wizard - Tots - Generico - Interactive",
      "md_id_carrera": "b0d7430d-23fe-ec11-b945-00505689053e",
      "md_tipo_carrera": "IDIOMAS",
      "md_nombre_carrera": "Wizard-Tots-Generico-Interactive",
      "md_landing_value": "wz-tots-in",
      "modality": "Presencial"
  },
  {
      "hs_slug_code": "wz-tots-on",
      "md_codigo_carrera": "wz-tots-on",
      "hs_nombre_producto": "Wizard - Tots - Generico - Online",
      "md_id_carrera": "b2d7430d-23fe-ec11-b945-00505689053e",
      "md_tipo_carrera": "IDIOMAS",
      "md_nombre_carrera": "Wizard-Tots-Generico-Online",
      "md_landing_value": "wz-tots-on",
      "modality": "Virtual"
  },
  {
      "hs_slug_code": "wz-w-cn",
      "md_codigo_carrera": "wz-w-cn",
      "hs_nombre_producto": "Wizard - W - Generico - Connections",
      "md_id_carrera": "c0d7430d-23fe-ec11-b945-00505689053e",
      "md_tipo_carrera": "IDIOMAS",
      "md_nombre_carrera": "Wizard-W-Generico-Conection",
      "md_landing_value": "wz-w-cn",
      "modality": "Presencial"
  },
  {
      "hs_slug_code": "wz-w-in",
      "md_codigo_carrera": "wz-w-in",
      "hs_nombre_producto": "Wizard - W - Generico - Interactive",
      "md_id_carrera": "c2d7430d-23fe-ec11-b945-00505689053e",
      "md_tipo_carrera": "IDIOMAS",
      "md_nombre_carrera": "Wizard-W-Generico-Interactive",
      "md_landing_value": "wz-w-in",
      "modality": "Presencial"
  },
  {
      "hs_slug_code": "wz-w-on",
      "md_codigo_carrera": "wz-w-on",
      "hs_nombre_producto": "Wizard - W - Generico - Online",
      "md_id_carrera": "c4d7430d-23fe-ec11-b945-00505689053e",
      "md_tipo_carrera": "IDIOMAS",
      "md_nombre_carrera": "Wizard-W-Generico-Online",
      "md_landing_value": "wz-w-on",
      "modality": "Virtual"
  }
];

export default function handler(req, res) {
  res.status(200).json(products);
}
