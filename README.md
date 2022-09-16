Manage Toppings
As a pizza store owner I should be able to manage toppings available for my pizza chefs.

<!-- create a store owner section that will be able to manage the toppings of the pizza. CRUD functionailty for the toppings -->

It should allow me to see a list of available toppings$
<!-- add state for each crud operation -->
It should allow me to add a new topping$
It should allow me to delete an existing topping
It should allow me to update an existing topping
It should not allow me to enter duplicate toppings
<!-- add in middleware here later -->

<!-- table for toppings, table for pizzas  -->
Manage Pizzas
As a pizza chef I should be able to create new pizza master pieces

<!--  create a -->

It should allow me to see a list of existing pizzas and their toppings$
It should allow me to create a new pizza and add toppings to it
It should allow me to delete an existing pizza
It should allow me to update an existing pizza
It should allow me to update toppings on an existing pizza
It should not allow me to enter duplicate pizzas
Deployment
Your project should be deployed to a service of your choice. If you need some references to free web resources for development try https://free-for.dev



'
commands:
npx knex migrate:make 
migrate:rollback

npx knex seed:run