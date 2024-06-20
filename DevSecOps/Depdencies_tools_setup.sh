#!/bin/bash

#########################################################################
############ Docker Debian Packages ####################################
#########################################################################

# Install 
sudo apt install docker.io -y
sudo apt install docker-compose -y

# Versions
sudo docker --version
sudo docker-compose --version

# status 
sudo systemctl status docker 

#########################################################################
############ Jenkins Debian Packages ####################################
#########################################################################

# This is the Debian package repository of Jenkins to automate installation and upgrade. To use this repository, first add the key to your system (for the Weekly Release Line):
 sudo wget -O /usr/share/keyrings/jenkins-keyring.asc \
    https://pkg.jenkins.io/debian-stable/jenkins.io-2023.key

# Then add a Jenkins apt repository entry:
 echo "deb [signed-by=/usr/share/keyrings/jenkins-keyring.asc]" \
    https://pkg.jenkins.io/debian-stable binary/ | sudo tee \
    /etc/apt/sources.list.d/jenkins.list > /dev/null

# Update your local package index, then finally install Jenkins:
  sudo apt-get update -y
  sudo apt-get install fontconfig openjdk-17-jre -y
  sudo apt-get install jenkins -y
  sudo apt-get upgrade -y
  
# Versions
sudo jenkins --version

# status 
sudo systemctl status jenkins
  