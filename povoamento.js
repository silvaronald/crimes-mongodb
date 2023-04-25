var dbName = "judiciario";
var db = db.getSiblingDB(dbName);

// Criminosos
db.createCollection("criminosos");

db.criminosos.insertOne({
  nome: "José Mourinho",
  idade: 58,
  nacionalidade: "Português",
});

db.criminosos.insertOne({
  nome: "Pep Guardiola",
  idade: 50,
  nacionalidade: "Espanhol",
});

db.criminosos.insertOne({
  nome: "Jurgen Klopp",
  idade: 53,
  nacionalidade: "Alemão",
});

db.criminosos.insertOne({
  nome: "Zinedine Zidane",
  idade: 49,
  nacionalidade: "Francês",
});

db.criminosos.insertOne({
  nome: "Carlo Ancelotti",
  idade: 61,
  nacionalidade: "Italiano",
});

db.criminosos.insertOne({
  nome: "Diego Simeone",
  idade: 51,
  nacionalidade: "Argentino",
});

db.criminosos.insertOne({
  nome: "Ole Gunnar Solskjær",
  idade: 48,
  nacionalidade: "Norueguês",
});

db.criminosos.insertOne({
  nome: "Thomas Tuchel",
  idade: 47,
  nacionalidade: "Alemão",
});

db.criminosos.insertOne({
  nome: "Antonio Conte",
  idade: 52,
  nacionalidade: "Italiano",
});

db.criminosos.insertOne({
  nome: "Julian Nagelsmann",
  idade: 33,
  nacionalidade: "Alemão",
});

// Crimes
db.createCollection("crimes");

db.crimes.insertOne({
  nome: "Homicídio",
  descricao: "Matar alguém com intenção ou por negligência grave",
  gravidade: "Grave",
  pena_minima: 120,
});

db.crimes.insertOne({
  nome: "Assalto à mão armada",
  descricao: "Roubo usando uma arma ou ameaça de violência",
  gravidade: "Grave",
  pena_minima: 48,
});

db.crimes.insertOne({
  nome: "Sonegação",
  descricao: "Ato de não prestar o serviço tributário cidadão obrigatório",
  gravidade: "Grave",
  pena_minima: 72,
});

db.crimes.insertOne({
  nome: "Roubo",
  descricao: "Roubo de propriedade sem o uso de violência ou ameaça",
  gravidade: "Moderada",
  pena_minima: 24,
});

db.crimes.insertOne({
  nome: "Tráfico de drogas",
  descricao: "Venda, distribuição ou posse de drogas ilegais",
  gravidade: "Moderada",
  pena_minima: 36,
});

db.crimes.insertOne({
  nome: "Furto",
  descricao: "Roubo despercebido de propriedade sem o uso de violência ou ameaça",
  gravidade: "Leve",
  pena_minima: 12,
});

db.crimes.insertOne({
  nome: "Difamação",
  descricao: "Dizer falsidades prejudiciais sobre outra pessoa",
  gravidade: "Leve",
  pena_minima: 6,
});

db.crimes.insertOne({
  nome: "Fraude",
  descricao: "Obter vantagem financeira por meio de mentiras ou engano",
  gravidade: "Moderada",
  pena_minima: 24,
});

db.crimes.insertOne({
  nome: "Pichação",
  descricao: "Pintar ou marcar propriedade pública ou privada sem permissão",
  gravidade: "Leve",
  pena_minima: 3,
});

db.crimes.insertOne({
  nome: "Calúnia",
  descricao: "Atribuir falsamente a alguém um crime ou falta grave",
  gravidade: "Moderada",
  pena_minima: 12,
});

// Juízas
db.createCollection("juizas");

db.juizas.insertOne({
  nome: "Beyoncé",
  grau_de_competencia: "Alta",
  grau_de_autoridade: "Média",
  nacionalidade: "Estados Unidos",
});

db.juizas.insertOne({
  nome: "Rihanna",
  grau_de_competencia: "Média",
  grau_de_autoridade: "Alta",
  nacionalidade: "Barbados",
});

db.juizas.insertOne({
  nome: "Lady Gaga",
  grau_de_competencia: "Média",
  grau_de_autoridade: "Alta",
  nacionalidade: "Estados Unidos",
});

db.juizas.insertOne({
  nome: "Ariana Grande",
  grau_de_competencia: "Média",
  grau_de_autoridade: "Média",
  nacionalidade: "Estados Unidos",
});

db.juizas.insertOne({
  nome: "Katy Perry",
  grau_de_competencia: "Baixa",
  grau_de_autoridade: "Média",
  nacionalidade: "Estados Unidos",
});

db.juizas.insertOne({
  nome: "Taylor Swift",
  grau_de_competencia: "Média",
  grau_de_autoridade: "Alta",
  nacionalidade: "Estados Unidos",
});

db.juizas.insertOne({
  nome: "Adele",
  grau_de_competencia: "Alta",
  grau_de_autoridade: "Média",
  nacionalidade: "Reino Unido",
});

db.juizas.insertOne({
  nome: "Dua Lipa",
  grau_de_competencia: "Média",
  grau_de_autoridade: "Média",
  nacionalidade: "Reino Unido",
});

db.juizas.insertOne({
  nome: "Billie Eilish",
  grau_de_competencia: "Média",
  grau_de_autoridade: "Média",
  nacionalidade: "Estados Unidos",
});

db.juizas.insertOne({
  nome: "Shakira",
  grau_de_competencia: "Média",
  grau_de_autoridade: "Alta",
  nacionalidade: "Colômbia",
});

// Prisões
db.createCollection("prisoes");

db.prisoes.insertOne({
  nome: "Alcatraz",
  localizacao: "San Francisco, EUA",
  grauSeguranca: "Máxima",
});

db.prisoes.insertOne({
  nome: "Ilha de Poveglia",
  localizacao: "Veneza, Itália",
  grauSeguranca: "Máxima",
});

db.prisoes.insertOne({
  nome: "ADX Florence",
  localizacao: "Colorado, EUA",
  grauSeguranca: "Máxima",
});

db.prisoes.insertOne({
  nome: "Bang Kwang Central Prison",
  localizacao: "Bangkok, Tailândia",
  grauSeguranca: "Máxima",
});

db.prisoes.insertOne({
  nome: "Black Dolphin Prison",
  localizacao: "Rússia",
  grauSeguranca: "Máxima",
});

db.prisoes.insertOne({
  nome: "Al-Hadba prison",
  localizacao: "Mosul, Iraque",
  grauSeguranca: "Máxima",
});

db.prisoes.insertOne({
  nome: "La Modelo",
  localizacao: "Bogotá, Colômbia",
  grauSeguranca: "Média",
});

db.prisoes.insertOne({
  nome: "San Quentin State Prison",
  localizacao: "California, EUA",
  grauSeguranca: "Média",
});

db.prisoes.insertOne({
  nome: "Carandiru",
  localizacao: "São Paulo, Brasil",
  grauSeguranca: "Média",
});

db.prisoes.insertOne({
  nome: "HMP Belmarsh",
  localizacao: "Londres, Reino Unido",
  grauSeguranca: "Média",
});

// Sentenças
db.createCollection("sentencas");

db.sentencas.insertOne({
  juiza: "Beyoncé",
  prisao: "Alcatraz",
  criminosos: ["Diego Simeone", "Pep Guardiola"],
  crime: "Roubo",
  pena: 36,
});
db.sentencas.insertOne({
  juiza: "Rihanna",
  prisao: "ADX Florence",
  criminosos: ["Julian Nagelsmann", "Zinedine Zidane", "Antonio Conte"],
  crime: "Assalto à mão armada",
  pena: 241,
});
db.sentencas.insertOne({
  juiza: "Lady Gaga",
  prisao: "Carandiru",
  criminosos: ["Carlo Ancelotti", "Thomas Tuchel"],
  crime: "Homicídio",
  pena: 360,
});
db.sentencas.insertOne({
  juiza: "Ariana Grande",
  prisao: "HMP Belmarsh",
  criminosos: ["Jurgen Klopp", "Ole Gunnar Solskjær"],
  crime: "Sonegação",
  pena: 112,
});
db.sentencas.insertOne({
  juiza: "Katy Perry",
  prisao: "La Modelo",
  criminosos: ["Zinedine Zidane"],
  crime: "Tráfico de drogas",
  pena: 100,
});
db.sentencas.insertOne({
  juiza: "Taylor Swift",
  prisao: "Black Dolphin Prison",
  criminosos: ["Diego Simeone", "Thomas Tuchel", "Pep Guardiola"],
  crime: "Furto",
  pena: 13,
});
db.sentencas.insertOne({
  juiza: "Adele",
  prisao: "San Quentin State Prison",
  criminosos: ["Carlo Ancelotti"],
  crime: "Difamação",
  pena: 7,
});
db.sentencas.insertOne({
  juiza: "Dua Lipa",
  prisao: "Ilha de Poveglia",
  criminosos: ["Antonio Conte", "Julian Nagelsmann"],
  crime: "Fraude",
  pena: 48,
});
db.sentencas.insertOne({
  juiza: "Billie Eilish",
  prisao: "Bang Kwang Central Prison",
  criminosos: ["Zinedine Zidane", "Jurgen Klopp"],
  crime: "Pichação",
  pena: 6,
});
db.sentencas.insertOne({
  juiza: "Shakira",
  prisao: "Al-Hadba prison",
  criminosos: ["Ole Gunnar Solskjær", "Diego Simeone"],
  crime: "Calúnia",
  pena: 12,
});
db.sentencas.insertOne({
  juiza: "Beyoncé",
  prisao: "Alcatraz",
  criminosos: ["Zinedine Zidane", "Diego Simeone"],
  crime: "Homicídio",
  pena: 242,
});

db.sentencas.insertOne({
  juiza: "Rihanna",
  prisao: "ADX Florence",
  criminosos: ["Pep Guardiola", "Antonio Conte", "Jurgen Klopp"],
  crime: "Tráfico de drogas",
  pena: 60,
});

db.sentencas.insertOne({
  juiza: "Lady Gaga",
  prisao: "Bang Kwang Central Prison",
  criminosos: ["Carlo Ancelotti", "Julian Nagelsmann"],
  crime: "Furto",
  pena: 12,
});

db.sentencas.insertOne({
  juiza: "Ariana Grande",
  prisao: "Black Dolphin Prison",
  criminosos: ["Thomas Tuchel", "Ole Gunnar Solskjær"],
  crime: "Assalto à mão armada",
  pena: 100,
});

db.sentencas.insertOne({
  juiza: "Katy Perry",
  prisao: "Carandiru",
  criminosos: ["José Mourinho", "Diego Simeone", "Antonio Conte"],
  crime: "Difamação",
  pena: 6,
});

db.sentencas.insertOne({
  juiza: "Taylor Swift",
  prisao: "La Modelo",
  criminosos: ["Zinedine Zidane", "Julian Nagelsmann"],
  crime: "Sonegação",
  pena: 180,
});

db.sentencas.insertOne({
  juiza: "Adele",
  prisao: "Ilha de Poveglia",
  criminosos: ["Pep Guardiola"],
  crime: "Fraude",
  pena: 90,
});

db.sentencas.insertOne({
  juiza: "Dua Lipa",
  prisao: "Al-Hadba prison",
  criminosos: ["Jurgen Klopp", "Carlo Ancelotti"],
  crime: "Pichação",
  pena: 6,
});

db.sentencas.insertOne({
  juiza: "Billie Eilish",
  prisao: "San Quentin State Prison",
  criminosos: ["Thomas Tuchel", "Ole Gunnar Solskjær", "Diego Simeone"],
  crime: "Calúnia",
  pena: 15,
});

db.sentencas.insertOne({
  juiza: "Shakira",
  prisao: "HMP Belmarsh",
  criminosos: [
    "Antonio Conte",
    "Julian Nagelsmann",
    "José Mourinho",
    "Pep Guardiola",
  ],
  crime: "Roubo",
  pena: 30,
});

db.sentencas.insertOne({
  juiza: "Rihanna",
  prisao: "ADX Florence",
  criminosos: ["Diego Simeone", "Zinedine Zidane"],
  crime: "Assalto à mão armada",
  pena: 363,
});

db.sentencas.insertOne({
  juiza: "Taylor Swift",
  prisao: "Alcatraz",
  criminosos: ["Pep Guardiola", "Thomas Tuchel", "Antonio Conte"],
  crime: "Roubo",
  pena: 78,
});

db.sentencas.insertOne({
  juiza: "Dua Lipa",
  prisao: "La Modelo",
  criminosos: ["Julian Nagelsmann", "Carlo Ancelotti", "José Mourinho"],
  crime: "Fraude",
  pena: 24,
});

db.sentencas.insertOne({
  juiza: "Shakira",
  prisao: "Black Dolphin Prison",
  criminosos: ["Jurgen Klopp"],
  crime: "Homicídio",
  pena: 483,
});

db.sentencas.insertOne({
  juiza: "Katy Perry",
  prisao: "Bang Kwang Central Prison",
  criminosos: ["Ole Gunnar Solskjær"],
  crime: "Tráfico de drogas",
  pena: 36,
});

db.sentencas.insertOne({
  juiza: "Billie Eilish",
  prisao: "San Quentin State Prison",
  criminosos: ["Diego Simeone", "Zinedine Zidane", "Carlo Ancelotti"],
  crime: "Assalto à mão armada",
  pena: 65,
});

db.sentencas.insertOne({
  juiza: "Adele",
  prisao: "HMP Belmarsh",
  criminosos: ["Antonio Conte", "Pep Guardiola"],
  crime: "Furto",
  pena: 18,
});

db.sentencas.insertOne({
  juiza: "Lady Gaga",
  prisao: "Al-Hadba prison",
  criminosos: ["Jurgen Klopp", "Thomas Tuchel"],
  crime: "Difamação",
  pena: 6,
});

db.sentencas.insertOne({
  juiza: "Beyoncé",
  prisao: "Carandiru",
  criminosos: [
    "José Mourinho",
    "Julian Nagelsmann",
    "Diego Simeone",
    "Zinedine Zidane",
  ],
  crime: "Sonegação",
  pena: 72,
});

db.sentencas.insertOne({
  juiza: "Ariana Grande",
  prisao: "Ilha de Poveglia",
  criminosos: [
    "Antonio Conte",
    "Pep Guardiola",
    "Thomas Tuchel",
    "Jurgen Klopp",
  ],
  crime: "Calúnia",
  pena: 17,
});
