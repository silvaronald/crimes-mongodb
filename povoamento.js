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
  descricao: "Roubo de propriedade sem o uso de violência ou ameaça",
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
  criminoso: "José Mourinho",
  crime: "Homicídio",
  pena: 120,
});
db.sentencas.insertOne({
  juiza: "Rihanna",
  prisao: "Ilha de Poveglia",
  criminoso: "Pep Guardiola",
  crime: "Assalto à mão armada",
  pena: 36,
});
db.sentencas.insertOne({
  juiza: "Lady Gaga",
  prisao: "ADX Florence",
  criminoso: "Jurgen Klopp",
  crime: "Sonegação",
  pena: 24,
});
db.sentencas.insertOne({
  juiza: "Ariana Grande",
  prisao: "Bang Kwang Central Prison",
  criminoso: "Zinedine Zidane",
  crime: "Roubo",
  pena: 60,
});
db.sentencas.insertOne({
  juiza: "Katy Perry",
  prisao: "Black Dolphin Prison",
  criminoso: "Carlo Ancelotti",
  crime: "Tráfico de drogas",
  pena: 96,
});
db.sentencas.insertOne({
  juiza: "Taylor Swift",
  prisao: "Al-Hadba prison",
  criminoso: "Diego Simeone",
  crime: "Furto",
  pena: 12,
});
db.sentencas.insertOne({
  juiza: "Adele",
  prisao: "La Modelo",
  criminoso: "Ole Gunnar Solskjær",
  crime: "Difamação",
  pena: 6,
});
db.sentencas.insertOne({
  juiza: "Dua Lipa",
  prisao: "San Quentin State Prison",
  criminoso: "Thomas Tuchel",
  crime: "Fraude",
  pena: 48,
});
db.sentencas.insertOne({
  juiza: "Billie Eilish",
  prisao: "Carandiru",
  criminoso: "Antonio Conte",
  crime: "Pichação",
  pena: 3,
});
db.sentencas.insertOne({
  juiza: "Shakira",
  prisao: "HMP Belmarsh",
  criminoso: "Julian Nagelsmann",
  crime: "Calúnia",
  pena: 18,
});
db.sentencas.insertOne({
  juiza: "Rihanna",
  prisao: "Black Dolphin Prison",
  criminoso: "Zinedine Zidane",
  crime: "Homicídio",
  pena: 60,
});

db.sentencas.insertOne({
  juiza: "Ariana Grande",
  prisao: "Alcatraz",
  criminoso: "Carlo Ancelotti",
  crime: "Tráfico de drogas",
  pena: 120,
});

db.sentencas.insertOne({
  juiza: "Dua Lipa",
  prisao: "Bang Kwang Central Prison",
  criminoso: "Diego Simeone",
  crime: "Roubo",
  pena: 36,
});

db.sentencas.insertOne({
  juiza: "Katy Perry",
  prisao: "HMP Belmarsh",
  criminoso: "Julian Nagelsmann",
  crime: "Assalto à mão armada",
  pena: 72,
});

db.sentencas.insertOne({
  juiza: "Taylor Swift",
  prisao: "ADX Florence",
  criminoso: "Pep Guardiola",
  crime: "Sonegação",
  pena: 48,
});

db.sentencas.insertOne({
  juiza: "Shakira",
  prisao: "San Quentin State Prison",
  criminoso: "Antonio Conte",
  crime: "Difamação",
  pena: 24,
});

db.sentencas.insertOne({
  juiza: "Billie Eilish",
  prisao: "Ilha de Poveglia",
  criminoso: "Ole Gunnar Solskjær",
  crime: "Furto",
  pena: 12,
});

db.sentencas.insertOne({
  juiza: "Lady Gaga",
  prisao: "La Modelo",
  criminoso: "Thomas Tuchel",
  crime: "Fraude",
  pena: 96,
});

db.sentencas.insertOne({
  juiza: "Adele",
  prisao: "Carandiru",
  criminoso: "José Mourinho",
  crime: "Pichação",
  pena: 6,
});

db.sentencas.insertOne({
  juiza: "Beyoncé",
  prisao: "Al-Hadba prison",
  criminoso: "Jurgen Klopp",
  crime: "Calúnia",
  pena: 18,
});
db.sentencas.insertOne({
  juiza: "Taylor Swift",
  prisao: "ADX Florence",
  criminoso: "Antonio Conte",
  crime: "Fraude",
  pena: 36,
});

db.sentencas.insertOne({
  juiza: "Dua Lipa",
  prisao: "Black Dolphin Prison",
  criminoso: "Pep Guardiola",
  crime: "Tráfico de drogas",
  pena: 48,
});

db.sentencas.insertOne({
  juiza: "Shakira",
  prisao: "Ilha de Poveglia",
  criminoso: "Julian Nagelsmann",
  crime: "Homicídio",
  pena: 60,
});

db.sentencas.insertOne({
  juiza: "Beyoncé",
  prisao: "La Modelo",
  criminoso: "Diego Simeone",
  crime: "Assalto à mão armada",
  pena: 72,
});

db.sentencas.insertOne({
  juiza: "Katy Perry",
  prisao: "Alcatraz",
  criminoso: "Carlo Ancelotti",
  crime: "Sonegação",
  pena: 24,
});

db.sentencas.insertOne({
  juiza: "Ariana Grande",
  prisao: "HMP Belmarsh",
  criminoso: "Zinedine Zidane",
  crime: "Difamação",
  pena: 12,
});

db.sentencas.insertOne({
  juiza: "Rihanna",
  prisao: "San Quentin State Prison",
  criminoso: "Ole Gunnar Solskjær",
  crime: "Roubo",
  pena: 84,
});

db.sentencas.insertOne({
  juiza: "Lady Gaga",
  prisao: "Al-Hadba prison",
  criminoso: "José Mourinho",
  crime: "Calúnia",
  pena: 6,
});

db.sentencas.insertOne({
  juiza: "Billie Eilish",
  prisao: "Carandiru",
  criminoso: "Jurgen Klopp",
  crime: "Pichação",
  pena: 18,
});

db.sentencas.insertOne({
  juiza: "Dua Lipa",
  prisao: "Bang Kwang Central Prison",
  criminoso: "Thomas Tuchel",
  crime: "Furto",
  pena: 48,
});
