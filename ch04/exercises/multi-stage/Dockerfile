FROM diamolkor/base AS build-stage
RUN echo 'Building...' > /build.txt

FROM diamolkor/base AS test-stage
COPY --from=build-stage /build.txt /build.txt
RUN echo 'Testing...' >> /build.txt

FROM diamolkor/base
COPY --from=test-stage /build.txt /build.txt
CMD cat /build.txt