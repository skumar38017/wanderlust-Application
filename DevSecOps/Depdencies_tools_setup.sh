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
  

##############################################################################################
############################### Trivy #######################################################
##############################################################################################

sudo apt-get install wget apt-transport-https gnupg lsb-release
wget -qO - https://aquasecurity.github.io/trivy-repo/deb/public.key | gpg --dearmor | sudo tee /usr/share/keyrings/trivy.gpg > /dev/null
echo "deb [signed-by=/usr/share/keyrings/trivy.gpg] https://aquasecurity.github.io/trivy-repo/deb generic main" | sudo tee -a /etc/apt/sources.list.d/trivy.list
sudo apt-get update -y
sudo apt-get install trivy -y
sudo apt-get upgrade -y

# Version
Trivy --version