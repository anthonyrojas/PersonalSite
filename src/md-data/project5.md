---
title: "Secure Chat App"
featuredImage: "../images/projects/secure-chat-app.webp"
date: "2019-09-09"
category: "projects"
order: 4
---
This application was built using a NodeJS backend with a React Native frontend. The application enables users to send encrypted messages to each other. Messages are encrypted using AES encryption. The AES keys generated for this encryption is stored in an RSA object, along with an HMAC key. An HMAC tag is added to each message for integrity checks. The RSA keys are generated upon account creation, where each user only has access to his or her own private key, while people they chat with have access to their public keys so that they may encrypt their messages. Messages are stored in a MongoDB database as objects containing the RSA cipher text, AES encrypted message, and HMAC tag. This application was deployed to an AWS EC2 instance running a load balaned environment on Nginx.