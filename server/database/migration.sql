-- MIGRATION FILE
DROP TABLE  if exists shoe_inventory CASCADE;

CREATE TABLE shoe_inventory (
  size DECIMAL(3, 1),
  quantity INTEGER
);
