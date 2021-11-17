docker build -t github-user-activity-app .
docker tag github-user-activity-app:latest YOUR_AWS_ACCOUNT_NUMBER.dkr.ecr.YOUR_AWS_REGION.amazonaws.com/github-user-activity-app:latest
aws ecr get-login-password --region YOUR_AWS_REGION | docker login --username AWS --password-stdin YOUR_AWS_ACCOUNT_NUMBER.dkr.ecr.YOUR_AWS_REGION.amazonaws.com
docker push YOUR_AWS_ACCOUNT_NUMBER.dkr.ecr.YOUR_AWS_REGION.amazonaws.com/github-user-activity-app:latest
aws ecs update-service --cluster github-user-activity-app --service github-user-activity-app --force-new-deployment
