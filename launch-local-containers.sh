#!/usr/bin/env bash

set -e

function main() {
    cd "$(dirname "$(readlink -f "$0")")/docker"
    ./generate_docker_compose
    docker compose up --build --force-recreate
    docker compose down
}

main $@
