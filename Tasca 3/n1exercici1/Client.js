db.createCollection('Client', {validator: {$jsonSchema: {bsonType: 'object',title: 'Client',required: ['nom','adreça','telefon','correuElectronic','dataRegistre','ultimaCompra'],properties:{nom:{bsonType: 'string'},adreça:{bsonType: 'object',title: 'object',required: ['carrer','número','ciutat','codiPostal','pais'],properties:{carrer:{bsonType: 'string'},número:{bsonType: 'string'},pìs:{bsonType: 'string'},porta:{bsonType: 'string'},ciutat:{bsonType: 'string'},codiPostal:{bsonType: 'string'},pais:{bsonType: 'string'}}},telefon:{bsonType: 'string'},correuElectronic:{bsonType: 'string'},dataRegistre:{bsonType: 'date'},recomanatPer:{bsonType: 'objectId'},ultimaCompra:{bsonType: 'object',title: 'object',required: ['clientID','venedorID','ulleresID','dataCompra','producte'],properties:{clientID:{bsonType: 'objectId'},venedorID:{bsonType: 'objectId'},ulleresID:{bsonType: 'objectId'},dataCompra:{bsonType: 'date'},producte:{bsonType: 'object',title: 'object',required: ['ulleres'],properties:{ulleres:{bsonType: 'object',title: 'object',required: ['marca','graduació','colorVidre','tipusMontura','preu'],properties:{marca:{bsonType: 'object',title: 'object',required: ['nom','proveïdor'],properties:{nom:{bsonType: 'string'},proveïdor:{bsonType: 'object',title: 'object',required: ['nom','adreça','telefon','nif'],properties:{nom:{bsonType: 'string'},adreça:{bsonType: 'object',title: 'object',required: ['carrer','número','ciutat','codiPostal','país'],properties:{carrer:{bsonType: 'string'},número:{bsonType: 'int'},pis:{bsonType: 'string'},porta:{bsonType: 'string'},ciutat:{bsonType: 'string'},codiPostal:{bsonType: 'int'},país:{bsonType: 'string'}}},telefon:{bsonType: 'string'},fax:{bsonType: 'string'},nif:{bsonType: 'string'}}}}},graduació:{bsonType: 'object',title: 'object',required: ['esquerra','dreta'],properties:{esquerra:{bsonType: 'double'},dreta:{bsonType: 'double'}}},colorVidre:{bsonType: 'object',title: 'object',required: ['esquerra','dret'],properties:{esquerra:{bsonType: 'string'},dret:{bsonType: 'string'}}},tipusMontura:{
  bsonType: 'array',items:{bsonType: 'enum'}},preu:{bsonType: 'double'}}}}}}}}}}});