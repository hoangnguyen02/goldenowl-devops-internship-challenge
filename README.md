# 🦉 Golden Owl DevOps Internship - Technical Test

This repository is my submission for the **Golden Owl DevOps Internship Technical Test**.  
It demonstrates a complete CI/CD pipeline built with **GitHub Actions**, **Docker**, and **Google Cloud Run**.

---

## 🌟 Mission Overview

The objective of this challenge is to:
1. **Fork** the original repository:  
   [https://github.com/hoangnguyen02/goldenowl-devops-internship-challenge](https://github.com/hoangnguyen02/goldenowl-devops-internship-challenge)
2. **Dockerize** a Node.js application.
3. **Implement an automated CI/CD pipeline** using **GitHub Actions**.
4. **Run CI tests** automatically when changes are pushed to any `feature/*` branch.
5. **Deploy automatically (CD)** to **Google Cloud Run** when merged into the `master` branch.

---

## 🐳 Dockerization

The application was containerized using the following `Dockerfile`:

```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY src/package*.json ./
RUN npm install --production

COPY src .

EXPOSE 3000
CMD ["npm", "start"]

✅ To build & run locally:
docker build -t goldenowl-app .
docker run -p 3000:3000 goldenowl-app


Then test with:

curl http://localhost:3000
# → {"message":"Welcome warriors to Golden Owl!"}

⚙️ CI/CD Workflow

The CI/CD pipeline is implemented using GitHub Actions
(file: .github/workflows/deployment.yml).

🔄 Workflow Breakdown
Job	    Description	                                                    Trigger
Build	Build Docker image from Dockerfile and push to DockerHub	    On every push
Test	Run npm test to validate application endpoints	                On every push
Deploy	Deploy image to Google Cloud Run	                            Only when pushing/merging to master

🧠 Branch Logic
feature/* → CI only (Build + Test)
master → Full CI/CD (Build + Test + Deploy)

☁️ Deployment

The app is deployed using Google Cloud Run, a fully managed service by Google Cloud that provides:
Built-in Load Balancing
Auto Scaling (from 0 to N instances)
Public HTTPS endpoint

Live App URL:
🔗 https://goldenowl-app-981542288355.us-west4.run.app/

Expected Response:

{"message": "Welcome warriors to Golden Owl!"}