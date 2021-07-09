// creating an array and passing the number, questions, options, and answers
let questions = [
    {
    numb: 1,
    question: "The metallurgical process in which a metal is obtained in a fused state is called",
    answer: "Smelting",
    options: [
      "Smelting",
      "Roasting",
      "Calcination",
      "Froth floatation"
    ]
  },
    {

    numb: 2,
    question: "Sulphide ore of zinc/copper is concentrated by ",
    answer: "Floatation process",
    options: [
      "Floatation process",
      "Electromagnetic process",
      "Gravity separation",
      "Distillation"
    ]
  },
    {

    numb: 3,
    question: "Cyanide process is used for obtaining",
    answer: "Ag",
    options: [
      "Cr",
      "Ag",
      "Cu",
      "Zn"
    ]
  },
    {

    numb: 4,
    question: "Which of the following is not an ore?",
    answer: "Pig iron",
    options: [
      "Bauxite",
      "Malachite",
      "Zinc blende",
      "Pig iron"
    ]
  },
    {

    numb: 5,
    question: "  Which method of purification is represented by the following equations ? Ti+2I<sub>2</sub> →<sup>773K</sup> TiI<sub>4</sub> →<sup>1675K</sup> Ti+2I<sub>2</sub>",
    answer: "Van Arkel",
    options: [
      "Cupellation",
      "Poling",
      "Van Arkel",
      "Zone refining"
    ]
  },
  {
    numb: 6,
    question: "Which of the following processes involves smelting?",
    answer: "Fe2O3+3C→Heat2Fe+3CO",
    options: [
      "ZnCO<sub>3</sub> →<sup>Heat</sup> ZnO+CO<sub>2</sub>",
      "Fe<sub>2</sub>O<sub>3</sub>+3C→<sup>Heat</sup>2Fe+3CO",
      "2Pbs+3O<sub>2</sub> →<sup>Heat</sup> 2PbO+2SO<sub>2</sub>",
      "Al<sub>2</sub>O<sub>3</sub>.2H<sub>2</sub> O→<sup>Heat</sup> Al<sub>2</sub> O<sub>3</sub>+2H<sub>2</sub>O"
    ]
  },
  {
    numb: 7,
    question: "Among the following groups of oxides, the group that cannot be reduced by carbon to give the respective metals is",
    answer: "CaO,K2O",
    options: [
      "Cu<sub>2</sub>O,SnO<sub>2</sub>",
      "Fe<sub>2</sub>O<sub>3</sub>,ZnO",
      "CaO,K<sub>2</sub>O",
      "PbO,Fe<sub>3</sub>O<sub>4</sub>"
    ]
  },
  {
    numb: 8,
    question: "One of the following metals forms a volatile compound and this property is taken advantage for its extraction. This metal is",
    answer: "Nickel",
    options: [
      "Iron",
      "Nickel",
      "Cobalt",
      "Tungsten"
    ]
  },
  {
    numb: 9,
    question: "Froth floatation process for the concentration of ores is an illustration of the practical application of ",
    answer: "Adsorption",
    options: [
      "Absorption",
      "Adsorption",
      "Coagulation",
      "Sedimentation"
    ]
  },
  {
    numb: 10,
    question: "Electrolytic reduction method is used in the extraction of",
    answer: "Highly electropositive elements",
    options: [
      "Highly electronegative elements",
      "Highly electropositive elements",
      "Transition metals",
      "Noble metals"
    ]
  },
  {
    numb: 11,
    question: "Electrochemical process (electrolysis of fused salt) is employed to extract",
    answer: "Sodium",
    options: [
      "Iron",
      "Lead",
      "Sodium",
      "Silver"
    ]
  },
  {
    numb: 12,
    question: "In the froth floatation process for the purification of ores, the ore particles float because",
    answer: "Their surface is hydrophobic i.e., not easily wetted by water",
    options: [
      "They are light",
      "Their surface is hydrophobic i.e., not easily wetted by water",
      "They bear electrostatic charge",
      "They are insoluble"
    ]
  },
  {
    numb: 13,
    question: "Froth floatation process may be used to increase the concentration of the mineral in",
    answer: "Chalcopyrites",
    options: [
      "Chalcopyrites",
      "Bauxite",
      "Haematite",
      "Calamine"
    ]
  },
  {
    numb: 14,
    question: "In blast furnace iron oxide is reduced by",
    answer: "CO",
    options: [
      "Silica",
      "CO",
      "C",
      "Lime stone"
    ]
  },
  {
    numb: 15,
    question: "The purpose of smelting an ore is to",
    answer: "Reduce it",
    options: [
      "Reduce it",
      "Oxidise it",
      "Obtain an alloy",
      "Separate volatile impurities"
    ]
  },
  {
    numb: 16,
    question: "Of the following, which cannot be obtained by electrolysis of the aqueous solution of their salts?",
    answer: "Mg and Al",
    options: [
      "Ag",
      "Mg and Al",
      "Cu",
      "Cr"
    ]
  },
  {
    numb: 17,
    question: "An ore of tin containing FeCrO4 is concentrated by ",
    answer: "Magnetic separation",
    options: [
      "Magnetic separation",
      "Froth floatation",
      "Electrostatic method",
      "Gravity separation"
    ]
  },
  {
    numb: 18,
    question: "One of the characteristic properties of non-metals is that they",
    answer: "Are reducing agents",
    options: [
      "Are reducing agents",
      "Form basic oxides",
      "Form cations by electron gain",
      "Are electronegative"
    ]
  },
  {
    numb: 19,
    question: "The slag obtained during the extraction of copper pyrites is composed mainly of",
    answer: "FeSiO3",
    options: [
      "Cu<sub>2</sub>S",
      "FeSiO<sub>3</sub>",
      "CuSiO<sub>3</sub>",
      "SiO<sub>2</sub>"
    ]
  },
  {
    numb: 20,
    question: "Which one of the following beneficiation processes is used for the mineral, Al<sub>2</sub>O<sub>3</sub>.2H<sub>2</sub>O?",
    answer: "Leaching",
    options: [
      "Froth floatation",
      "Leaching",
      "Liquation	",
      "Magnetic separation"
    ]
  },
  {
    numb: 21,
    question: "In blast furnace, maximum temperature is in",
    answer: "Zone of combustion",
    options: [
      "Zone of fusion",
      "Zone of combustion",
      "Zone of slag combustion",
      "Zone of reduction"
    ]
  },
  {
    numb: 22,
    question: "Calcination is used in metallergy for removal of ? ",
    answer: "Water  and  CO2",
    options: [
      "Water and sulphide",
      "Water  and  CO<sub>2</sub>",
      "CO<sub>2</sub> and H<sub>2</sub>S",
      "H<sub>2</sub>O and H<sub>2</sub>S"
    ]
  },
  {
    numb: 23,
    question: "Use of electrolysis is ? ",
    answer: "Both (a) and (b) ",
    options: [
      "Electroplating",
      "Electrorefining",
      "Both (a) and (b) ",
      "None of these."
    ]
  },
  {
    numb: 24,
    question: "In electrorefining of copper some gold is deposited as",
    answer: "Anode mud",
    options: [
      "Anode mud",
      "Cathode mud",
      "Cathode",
      "Electrolyte"
    ]
  },
  {
    numb: 25,
    question: "Purification of silicon element used in semiconductors is done by",
    answer: "Zone refining",
    options: [
      "Zone refining",
      "Heating",
      "Froth floatation",
      "Heating in vacuum"
    ]
  },
  {
    numb: 26,
    question: "The chief source of iodine, in which it is present as sodium iodate, is",
    answer: "Caliche",
    options: [
      "Carnallite",
      "Sea weeds",
      "Caliche",
      "Iodine never exists as sodium iodate."
    ]
  },
  {
    numb: 27,
    question: "Among the following statements the incorrect one is",
    answer: "Argentite and cuprite are oxides",
    options: [
      "Calamine and siderite are carbonates",
      "Argentite and cuprite are oxides",
      "Zinc blende and iron pyrites are sulphides",
      "Malachite and azurite are ores of copper."
    ]
  },
  {
    numb: 28,
    question: "The luster of a metal is due to",
    answer: "Presence of free electrons",
    options: [
      "Its high density",
      "Its high polishing",
      "Its chemical inertness",
      "Presence of free electrons"
    ]
  },
  {
    numb: 29,
    question: "In the commercial electrochemical process for aluminium extraction the electrolyte used is",
    answer: "A molten mixture of Al2O3 and Na3AlF6",
    options: [
      "Al(OH)<sub>3</sub> in NaOH solution",
      "An aqueous solution of Al<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub>",
      "A molten mixture of Al<sub>2</sub>O<sub>3</sub> and Na<sub>3</sub>AlF<sub>6</sub>",
      "A molten mixture of Al<sub>2</sub>O<sub>3</sub> and Al(OH)<sub>3</sub>"
    ]
  },
  {
    numb: 30,
    question: "When an aqueous solution of sodium chloride is electrolysed using platinum electrodes, the ions discharged at the electrodes are",
    answer: "Hydrogen and chloride",
    options: [
      "Sodium and hydrogen",
      "Sodium and chloride",
      "Hydrogen and chloride",
      "Hydroxyl and chloride"
    ]
  },
  {
    numb: 31,
    question: "Cassiterite is an ore of",
    answer: "Sn",
    options: [
      "Mn",
      "Ni",
      "Sb",
      "Sn"
    ]
  },
  {
    numb: 32,
    question: "Which of the following element is extracted commercially by the electrolysis of an aqueous solution of its compound?",
    answer: "Chlorine",
    options: [
      "Chlorine",
      "Bromine",
      "Sodium",
      "Aluminium"
    ]
  },
  {
    numb: 33,
    question: "Galena is an ore of",
    answer: "Pb",
    options: [
      "Pb",
      "Hg",
      "Sn",
      "Zn"
    ]
  },
  {
    numb: 34,
    question: "Nickel is purified by thermal decomposition of its ",
    answer: "Carbonyl",
    options: [
      "Hydride",
      "Chloride",
      "Azide",
      "Carbonyl"
    ]
  },
  {
    numb: 35,
    question: "The process of converting hydrated alumina into anhydrous alumina is called",
    answer: "Calcination",
    options: [
      "Roasting",
      "Smelting",
      "Dressing",
      "Calcination"
    ]
  },
  {
    numb: 36,
    question: "Match List I with List II and select the correct answer using the codes given below the lists:<br>"+
   "<table><tr><th>List I</th><th>List II</th></tr><tr><td>I.  Cyanide process</td><td>A. Ultrapure Ge</td></tr><tr><td>II. Floatation process</td><td>B. Pine oil </td></tr><tr><td>III. Electrolytic Reduction</td><td>C. Extraction of Al</td></tr><tr><td>IV. Zone Refining </td><td>D. Extraction of Au</td></tr></table>",
    answer: "I-D, II-B, III-C, IV-A",
    options: [
      "I-C, II-A, III-D, IV-B",
      "I-D, II-B, III-C, IV-A",
      "I-C, II-B, III-D, IV-A",
      "I-D, II-A, III-C, IV-B"
    ]
  },
  {
    numb: 37,
    question: "Which of the following metal is leached by cyanide process?",
    answer: "Ag",
    options: [
      "Ag",
      "Na",
      "Al",
      "Cu"
    ]
  },
  {
    numb: 38,
    question: "The common method of extraction of metals from oxide ores is",
    answer: "Reduction with carbon",
    options: [
      "Reduction with carbon",
      "Reduction with hydrogen",
      "Reduction with aluminium",
      "Electrolytic method"
    ]
  },
  {
    numb: 39,
    question: "Which one of the following ores is not concentrated by froth floatation process?",
    answer: "Pyrolusite",
    options: [
      "Copper pyrites",
      "Pentlandite",
      "Pyrolusite",
      "Zinc blende"
    ]
  },
  {
    numb: 40,
    question: "The method of zone refining of metals is based on the principle of ",
    answer: "Greater solubility of the impurity in the molten state than in the solid.",
    options: [
      "Greater mobility of the pure metal than that of the impurity ",
      "Higher melting point of the impurity than that of the pure metal ",
      "Greater noble character of the solid metal than that of the impurity",
      "Greater solubility of the impurity in the molten state than in the solid."
    ]
  },
  {
    numb: 41,
    question: "In the extraction of copper from its sulphide ore, the metal is formed by reduction of Cu2O with ",
    answer: "Cu2S",
    options: [
      "FeS",
      "CO",
      "Cu<sub>2</sub>S",
      "SO<sub>2</sub>"
    ]
  },
  {
    numb: 42,
    question: "In presence of oxygen, removal of sulphur from an ore is included in",
    answer: "Roasting",
    options: [
      "Calcination",
      "Roasting",
      "Smelting",
      "Fluxing"
    ]
  },
  {
    numb: 43,
    question: "Which of the following acts as an activator in froth floatation process?",
    answer: "Copper sulphate",
    options: [
      "Amyl xanthate",
      "KCN",
      "Copper sulphate",
      "None"
    ]
  },
  {
    numb: 44,
    question: "An ore of tin containing   is concentrated by",
    answer: "Magnetic separation method",
    options: [
      "Froth floatation process",
      "Magnetic separation method",
      "Electrostatic methode",
      "Gravity separation method"
    ]
  },
  {
    numb: 45,
    question: "In a mixture of PbS, Zns and FeS<sub>2</sub> each component is separated from other by using the reagents in the following sequence in froth floatation process",
    answer: "Potassium ethyl xanthate, KCN, NaOH, copper sulphate, acid",
    options: [
      "Potassium ethyl xanthate, KCN",
      "Potassium ethyl xanthate, KCN, NaOH, copper sulphate, acid",
      "KCN, CuSO4, acid",
      "None of the above"
    ]
  },
  {
    numb: 46,
    question: "Gallium arsenide is purified by",
    answer: "Zone-refining method",
    options: [
      "Potassium ethyl xanthate, KCN",
      "Van-Arkel method",
      "Zone-refining method",
      "Electrolytic method"
    ]
  },
  {
    numb: 47,
    question: "PbS can be separated from ZnS by electrostatic separation method. The property utilized in this method is",
    answer: "PbS is a good conductor and ZnS is a poor conductor of electricity",
    options: [
      "PbS is a good conductor and ZnS is a poor conductor of electricity",
      "PbS is a bad conductor and ZnS is a good conductor of electricity",
      "Both PbS and ZnS are good conductors",
      "Both PbS and ZnS are bad conductors"
    ]
  },
  {
    numb: 48,
    question: "Which of the following is correct?",
    answer: "Wolframite is FeWO4",
    options: [
      "Tin stone is magnetic in nature",
      "Wolframite is non-magnetic in nature",
      "Wolframite is FeWO4",
      "Cassiterite and rutile are sulphides of the metals."
    ]
  },
  {
    numb: 49,
    question: "Pick up the incorrect statement ",
    answer: "Calamine and zincite are the minerals of calcium.",
    options: [
      "Asbestos and willemite are silicate minerals",
      "Anglesite and barytes are sulphate minerals",
      "Sylvine and fluorspar are halide minerals",
      "Calamine and zincite are the minerals of calcium."
    ]
  },
];