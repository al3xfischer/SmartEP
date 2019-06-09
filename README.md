# SmartEP

### Existing users after Setup:
    -admin with pw: admin
    -user with pw: user

# Start services
    Change directory to SmartEP
    execute command "docker-compose up" to start all necessary services or
    execute "docker-compose up --build" to create clean services 
    open browser with url: localhost:4000

# Develop App:
    The compiled files of the webpage (e.g from <ProjectName>/dist/<ProjectName>/*) must be copied into the folder "webserver/page"
    For use without docker change the host in the webserver/ormconfig.json to your hostname (e.g. localhost)

## DB Infos
    - Use: root
    - Pw: smarteppw
    - Database: smartep    