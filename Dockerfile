



RUN mkdir /web-app
RUN mongoimport -d rickandmorty-pacosw1 -c characters --file xxxx.json --jsonArray

ADD . /web-app

WORKDIR /web-app


RUN go build -o main .



# ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.2.1/wait /wait
# RUN chmod +x /wait




EXPOSE 8000


CMD ["/web-app/main"]
