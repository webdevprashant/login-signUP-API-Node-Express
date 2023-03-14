Start App =  npm run dev
Go to .env -> Change MongoDB Atlas URL, port no accordingly

Get  Data - curl http://localhost:3000/register 
Post Data - curl -X POST localhost:3000/register -d "firstname=Alberto&lastname=delrio&email=alberto@gmail.com&gender=male&phone=987242221&age=23&password=123456&confirmpassword=123456" 

Patch  - curl -X PATCH localhost:3000/register/640dfa1ee46a79a3311e585e -d "email=ram@prakash.com"
Delete - curl -X DELETE localhost:3000/register/640dfa1ee46a79a3311e585e 
Login - curl -X POST http://localhost:3000/login -d "email=prash@gmail.com&password=123"