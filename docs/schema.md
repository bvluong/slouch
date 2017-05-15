# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
image_url       | string    | not null

## messages
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
body        | text      | not null
channel_id  | string    | not null
user_id     | integer   | not null, foreign key

## channels
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null
name        | string    | not null, indexed, unique
description | string    | not null
private     | boolean   | not null, default: false

## subscription
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key
channel_id  | integer   | not null, foreign key
