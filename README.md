# SmartEP

### Existing users after Setup:
    -admin with pw: admin
    -user with pw: user

# Start services
    Change directory to SmartEP
    execute command "docker-compose up" to start all necessary services or
    execute "docker-compose up --build" to create clean services after they were used
    open browser with url: localhost:4000 and use the app

# Develop App:
    The compiled files of the webpage (e.g from <ProjectName>/dist/<ProjectName>/*)
    must be copied into the folder "webserver/page"
    For use without docker change the host of
    the webserver/ormconfig.json to your hostname (e.g. localhost)

## Database Setup
    To create the necessary DB tables use the database/setup.sql 

## Usa without docker 
    - change the directory to ./webserver/ and run "npm install" (only needed once) 
      run "npm start" or "npm run start-dev" for nodemon
    - change the directory to ./frontend/ and run "npm install" (only needed once)
      run "ng build --watch" 
      (angular cli must be installd global)
      (install angular cli global with "npm i -g @angular/cli")

## DB Infos
    - Use: root
    - Pw: smarteppw
    - Database: smartep    