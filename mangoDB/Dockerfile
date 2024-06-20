# Use an official MongoDB image as a parent image
FROM mongo:latest

# Optionally, set environment variables
ENV MONGO_INITDB_ROOT_USERNAME=admin
ENV MONGO_INITDB_ROOT_PASSWORD=password

# Optionally, copy MongoDB configuration file if needed
# COPY ./mongod.conf /etc/mongod.conf

# Expose the default MongoDB port
EXPOSE 27017

# Start MongoDB service when the container launches
CMD ["mongod"]
