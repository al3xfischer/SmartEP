# SmartEP

# Backup
docker exec CONTAINER /usr/bin/mysqldump -u root --password=smarteppw smartep | Set-Content backup.sql

# Restore
cat backup.sql | docker exec -i CONTAINER /usr/bin/mysql -u root --password=smarteppw DATABASE