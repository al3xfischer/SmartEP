# SmartEP

###Existing users after Setup:
    -admin with pw: admin
    -user with pw: user

# Dev Info:

## DB Infos
    - Use: root
    - Pw: smarteppw
    - Database: smartep    

## Backup
docker exec CONTAINER /usr/bin/mysqldump -u root --password=smarteppw smartep | Set-Content backup.sql

## Restore
cat backup.sql | docker exec -i CONTAINER /usr/bin/mysql -u root --password=smarteppw DATABASE