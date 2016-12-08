exports.up = function(knex, Promise) {
  return knex.schema.createTable("cat", function(cat){
    cat.increments();
    cat.string("name");
    cat.integer("age");
  }).then(function(){
    return knex.schema.createTable("dog", function(dog){
      dog.increments();
      dog.string("name");
    });
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("cat").then(function(){
    return knex.schema.dropTableIfExists("dog");
  });
};
