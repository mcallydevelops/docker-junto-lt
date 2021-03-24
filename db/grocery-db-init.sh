#!/bin/bash
set -e

RUN_INIT_POP="psql -X -U docker --set ON_ERROR_STOP=on --set AUTOCOMMIT=off workshop"

$RUN_INIT_POP <<SQL
  CREATE TABLE IF NOT EXISTS inventory (
    id SERIAL PRIMARY KEY,
    itemName varchar(150) NOT NULL,
    itemPrice money NOT NULL
  );
  INSERT INTO inventory(itemName, itemPrice)
  VALUES
    ('apple', 0.55),
    ('banana', 0.60),
    ('orange', 0.45),
    ('cheese', 0.75),
    ('bread', 1.25),
    ('tomato', 0.30),
    ('lettuce', 0.75),
    ('orange juice', 2.50);
  COMMIT;
SQL