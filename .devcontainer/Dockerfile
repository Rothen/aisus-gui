# Image metadata and config.
# Ideally, the Node.js version should match what we use on CI.
FROM cimg/node:22.8.0


LABEL name="Angular dev environment" \
    description="This image can be used to create a dev environment for building Angular." \
    vendor="angular" \
    version="1.0"

EXPOSE 4000 4200 4433 8080 9876
# EXPOSE 4200


# Switch to `root`.
USER root


# Configure `Node.js`/`npm`.
RUN npm install -g @angular/cli@18.2.12


# Go! (And keep going.)
CMD ["tail", "--follow", "/dev/null"]