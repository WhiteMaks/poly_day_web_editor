FROM whitemaks/web_visualizer:latest

EXPOSE 8080

ENV WEB_EDITOR=/usr/app

COPY ./build $WEB_EDITOR/static/

WORKDIR $WEB_EDITOR

ENTRYPOINT ["java", "-jar", "web_visualizer-1.0.0.jar"]