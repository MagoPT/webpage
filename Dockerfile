FROM denoland/deno:2.0.2

# The port that your application listens to.
EXPOSE 8000

WORKDIR /app

COPY code/ .
RUN deno task build

## Prefer not to run as root.
#USER deno

CMD [ "deno", "task", "start" ]
