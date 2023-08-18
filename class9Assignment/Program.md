## Create a Rest API using ExpressJS and Typescript, which has five endpoints of 
 ## type:
- POST – Create a user and save it into a JSON file.
- PUT – Update a user on the basis of its email.
- GET– Get a specific user detail on the basis of email from JSON File.
- DELETE – Delete a specific user on the basis of email.
- Get – A Get request for getting all the available user in JSON file.
Note:
- If there is already an email exist in JSON file, User can not add the user 
with duplicate email.
- The JSON File will contain an array of Users.
## - User Type Example: 
o {
name: “Jhon Doe”,
age: 34,
 email: jhon@gmail.com,
 Gender: “Male”
}
- Here Gender Will be an `enum`.
## TIP:
- Use The `fs` Module to Read and Write Data into JSO

