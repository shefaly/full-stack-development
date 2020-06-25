CREATE DEFINER='root'@'localhost' PROCEDURE 'getorderDetails'()
BEGIN
    select orderNumber,orderDate,status,customerNumber from orders;
    END
