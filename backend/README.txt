# Docker
## Set Up
To install Docker containers just go to __Terminal__ application, followed this operation open __Docker Quickstart Terminal__ and select terminal. You are going to receive the IP of the machine.

```
docker is configured to use the default machine with IP 192.168.99.100
```

Go to the application folder and type:
    
    docker build .

After that you are going to receive the image ID, Save the id `58dd974bb861`({IMAGEID}) that you received at the end of the command output.

```
Removing intermediate container dbf24d06429a
Step 40 : RUN rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*
 ---> Running in 705abe15c8b2
 ---> 58dd974bb861
Removing intermediate container 705abe15c8b2
Successfully built 58dd974bb861
```

Create the mysql docker container(Replace {ROOTPASSWORD} and {PROJECTDATABASE} with the project values)

    docker run -e MYSQL_ROOT_PASSWORD={ROOTPASSWORD} -e MYSQL_DATABASE={PROJECTDATABASE} --name mysql-container -p 3306:3306 -d mysql:5.6

Create the apache container and attach the container with mysql container(Replace {PROJECTPATH} and {IMAGEID} with the project values).
    
    docker run --link mysql-container:mysql-container --name apache-container -d -p 80:80 -v {PROJECTPATH}:/var/www/html/ {IMAGEID}

If exist, execute the database dump(Replace {DATABASEDUMPPATH} with the project values).

    docker exec -i mysql-container mysql -uroot -proot db_optimhealth< {DATABASEDUMPPATH}backup.sql

You can access to your site visiting the ip address that you received at the begin. If you want you can edit your /etc/hosts file to add a domain to your dev project.

# Vagrant + Puppet base(Deprecated)

## Set Up

To install Vagrant Hostmaster just open __Terminal__ application and type:

    vagrant plugin install vagrant-hostsupdater

Clone the entire project.

    git clone ...

Locate the file called __Vagrantfile__ and make sure that you are at the same level.

Start vagrant:

    vagrant up

Everytime you do a __vagrant up__ your computer password could be requested in order to modify your __/etc/hosts__ file.

After *vagrant up* you can access on the browser the following url: http://dev.drupalsinglesite.com/

## Notes

You can edit the IP value, just open __Vagrantfile__ and edit the following line:

    config.vm.network :private_network, ip: "192.168.101.110"

If you want to restore an existing database dump, just place the .sql file on __/vagrant-data/modules/mysql/files/__ with the name __backup.sql__.

This __backup.sql__ will be commited and pushed to the repository everytime is neccesary, so if you do a pull of an updated version of this file, you can update database just running:

    vagrant provision

If you want to connect to the database in the VM server, use the following data:

    host:       192.181.100.123
    user:       root
    password:   root
    database:   db_drupalsinglesite

You can connect SSH to the VM server using:

    vagrant ssh

To shutdown the VM server just type:

    vagrant halt

You can get rid of the VM server using the command:

    vagrant destroy

## Drupal
The drupal user is the following:
    user: admin
    password: Jf3N7REx