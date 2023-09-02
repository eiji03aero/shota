#!/bin/bash

cmd=${1:-up}
project_name=""
file_prefix=""
container_name="client"

execute-docker-compose () {
  opts="-f ${file_prefix}docker-compose.yml"

  if [ -n "$project_name" ]; then
    opts="$opts -p $project_name"
  fi

  docker-compose $opts $@
}

stop-docker-compose () {
  execute-docker-compose stop
}

if [ $cmd = 'up' ] && [ $# -le 1 ]; then
  trap 'stop-docker-compose' SIGINT
  execute-docker-compose up

elif [ $cmd = 'stop' ]; then
  stop-docker-compose

elif [ $cmd = 'bash-client' ]; then
  execute-docker-compose exec $container_name /bin/bash

else
  execute-docker-compose $@
fi
