CREATE TABLE IF NOT EXISTS dashboard_data (
  id INT AUTO_INCREMENT PRIMARY KEY,
  userCount INT NOT NULL,
  salesToday INT NOT NULL,
  revenueToday DECIMAL(10, 2) NOT NULL,
  newMessages INT NOT NULL
);

INSERT INTO dashboard_data (userCount, salesToday, revenueToday, newMessages)
VALUES
  (1200, 340, 5600.00, 14),
  (1150, 290, 5200.00, 10),
  (1250, 370, 6000.00, 20),
  (1300, 400, 6300.00, 25),
  (1400, 410, 6500.00, 30),
  (1500, 420, 7000.00, 35),
  (1550, 430, 7200.00, 40),
  (1600, 450, 7400.00, 45),
  (1650, 460, 7600.00, 50),
  (1700, 470, 7800.00, 55)
ON DUPLICATE KEY UPDATE
  userCount = VALUES(userCount),
  salesToday = VALUES(salesToday),
  revenueToday = VALUES(revenueToday),
  newMessages = VALUES(newMessages);
