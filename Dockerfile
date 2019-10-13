# Dockerfile docker部署。并未实现，项目完成后会实现
FROM node:10.16.3
MAINTAINER afacode afacode@outlook.com
COPY dist/ /usr/node/nestjs
# 启动一些服务。
RUN echo 'hello world'
RUN npm run start:prod 
EXPOSE 3002
CMD [ "executable" ]