exports.seed = function(knex, Promise) {
  var cats = [
    knex('cat').insert({
      name: 'Kitty',
      age: 12
    }),
    knex('cat').insert({
      name: 'GURL',
      age: 5
    })
  ];
  return knex('cat').del().then(function (){
      return Promise.all(cats);
    });
};
