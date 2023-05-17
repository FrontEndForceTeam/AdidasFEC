-- MIGRATION FILE
DROP TABLE shoe_inventory;

CREATE TABLE shoe_inventory (
  size DECIMAL(3, 1),
  quantity INTEGER
);
