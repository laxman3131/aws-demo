#!/bin/bash
# Copy zip build to EC2 using scp

cd ~
scp -i Downloads/ec2-key-pair.pem ~/Documents/projects/aws-demo/backend/backend.zip ec2-user@18.222.24.142:~/apps

