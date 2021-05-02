FROM diamolkor/golang AS builder
COPY main.go .
RUN go build -o /gols

# app
FROM diamolkor/base

ENTRYPOINT ["/gols"]
CMD ["/init"]

COPY --from=builder /gols /
RUN chmod +x /gols

WORKDIR /init
COPY ./existing/ .
