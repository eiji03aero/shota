#!/bin/bash

cmd=${1}

server_url="localhost:3100"

if [ $cmd = 'gochan-crawl' ]; then
  gochan_url="https://tanuki.5ch.net/test/read.cgi/livebase/1693734288"
  curl \
    -G \
    -H 'Content-Type: application/json' \
    --data-urlencode "url=$gochan_url" \
    $server_url/gochan/crawl | jq

elif [ $cmd = 'thread-summaries-index' ]; then
  curl \
    -G \
    -H 'Content-Type: application/json' \
    --data-urlencode "keyword=西武" \
    $server_url/thread-summaries/ | jq

elif [ $cmd = 'thread-summaries-create' ]; then
  curl \
    -X POST \
    -H 'Content-Type: application/json' \
    -d $(printf '%s' $(cat <<- EOF
      {
        "title": "Hoge",
        "url": "https://google.com",
        "posts": [
          {
            "postId": 1,
            "userId": "Userdesuyo",
            "userName": "username here",
            "content": "content comes here",
            "postedAt": "2023-09-08"
          }
        ]
      }
EOF
    )) \
    $server_url/thread-summaries | jq

elif [ $cmd = 'thread-summaries-update' ]; then
  curl \
    -X PUT \
    -H 'Content-Type: application/json' \
    -d $(printf '%s' $(cat <<- EOF
      {

        "title": "Hoge",
        "url": "https://google.com",
        "posts": [
          {
            "postId": 1,
            "userId": "Userdesuyo",
            "userName": "username here",
            "content": "content comes here",
            "postedAt": "2023-09-08"
          }
        ]
      }
EOF
    )) \
    $server_url/thread-summaries/1 | jq

else
  echo "not recognized: ${cmd}"
fi
