#!/usr/bin/env bash

set -e

function main() {
    cd "$(dirname "$(readlink -f "$0")")/docker"
    ./generate_docker_compose
    docker compose -f ./docker-compose.yaml -f ./docker-compose-local.yaml up --build --force-recreate
    docker compose -f ./docker-compose.yaml -f ./docker-compose-local.yaml down
}

main $@
