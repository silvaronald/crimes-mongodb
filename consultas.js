use judiciario;

// Retorna as sentenças em que os culpados foram uma quadrilha
db.sentencas.find({criminosos: {$size: 4}}, {_id: 0})

// Retorna a quantidade de sentenças que envolveram mais de um criminoso
db.sentencas.find({'criminosos.1': {$exists: true}}).count()

// Retorna os criminosos alemães
db.criminosos.aggregate([
  {$match: {nacionalidade: 'Alemão'}}, {
    $project: {
      _id: 0,
      nome: 1,
      faixa_etaria:
          {$cond: {if: {$gte: ['$idade', 50]}, then: 'Idoso', else: 'Jovem'}}
    }
  }
])

// Conta a quantidade de criminosos com mais de 50 anos
db.criminosos.find({idade: {$gte: 50}}).count()

// Parabéns ao ladrãozinho de corações Pep Guardiola que acaba de completar mais
// um ano de vida
db.criminosos.updateOne({nome: 'Pep Guardiola'}, {$set: {idade: 51}})

// Mostra as juízas com alto grau de competência ordenadas por nome
db.juizas.find({grau_de_competencia: 'Alta'}, {_id: 0, grau_de_competencia: 0}).sort({nome: 1})

// Mostra uma prisão de segurança máxima
db.prisoes.findOne({grauSeguranca: 'Máxima'}, {_id: 0})

// Pega a média de idade dos criminosos
db.criminosos.aggregate([
  {$group: {_id: null, media_idade: {$avg: '$idade'}}}, {$project: {_id: 0}}
])

// Conta as nacionalidades das juízas
db.juizas.aggregate([{$group: {_id: '$nacionalidade', total: {$sum: 1}}}])

// Retorna a maior pena aplicada em uma sentença
db.sentencas.aggregate(
    [{$group: {_id: null, maxPenaAplicada: {$max: '$pena'}}}])

// Retorna os crimes com a pena mínima maior que 36 meses
db.crimes.find(
    {
      $where: function() {
        return this.pena_minima > 36
      }
    },
    {_id: 0}).pretty()

// Seleciona o criminoso mais novo
db.criminosos.find().sort({idade: 1}).limit(1)

// Retorna a quantidade de vezes em que a duplinha Pep e Klopp foram pegos juntos 
db.sentencas.find({ criminosos: { $all: ["Pep Guardiola", "Jurgen Klopp"] } }).count()

// Procura os crimes que têm a ver com 'violência'
db.crimes.createIndex({ descricao: "text" })
db.crimes.find({ $text: { $search: "violência" } })

// Retorna todas as sentenças com o campo "juiza" preenchido por todas as informaçãoes da juíza
db.sentencas.aggregate([
  {
    $lookup: {
      from: "juizas",
      localField: "juiza",
      foreignField: "nome",
      as: "juiza"
    }
  }
]);

//Descobrimos agora que Pep Guardiola liderou todos os crimes de pichação na cidade
//Insere o nome do criminoso na lista de criminosos de cada setença de um crime de pichação
db.sentencas.updateMany(
  { crime: "Pichação" },
  { $addToSet: { criminosos: "Pep Guardiola" } }
);


// Cria a collection "crime_count" que conta o número de sentenças (value) para cada tipo de crime (_id)
var mapFunction = function() {
  emit(this.crime, 1);
};
var reduceFunction = function(key, values) {
  return Array.sum(values);
};
db.sentencas.mapReduce(
  mapFunction,
  reduceFunction,
  {
    out: "crime_count"
  }
)

// Retorna as setenças nos quais o crime cometido é o furto e a lista de criminosos envolvidos expõe apenas o nome de Diego Simeone, se ele estiver envolvido
db.sentencas.aggregate([
  {
    $match: {
      crime: "Furto"
    }
  },
  {
    $project: {
      _id: 0,
      juiza: 1,
      pena: 1,
      criminosos: {
        $filter: {
          input: "$criminosos",
          as: "criminoso",
          cond: { $eq: [ "$$criminoso", "Diego Simeone" ] }
        }
      }
    }
  }
])

// Parece que os rapazes deixaram de ser criminosos e agora são "cidadãos de bem", o que não parece fazer muito sentido
db.criminosos.renameCollection("cidadaosDeBem")

