#xz_news[id/title/ctime/img_url/point/content]
USE xz;
CREATE TABLE xz_news(
   id  INT PRIMARY KEY AUTO_INCREMENT,
   title  VARCHAR(255),
   ctime  DATETIME,
   img_url VARCHAR(255),
   point   INT,
   content VARCHAR(2000)
);
INSERT INTO xz_news VALUES(null,'1231',now(),
'http://127.0.0.1:3000/1.png',0,'123');
INSERT INTO xz_news VALUES(null,'1232',now(),
'http://127.0.0.1:3000/1.png',0,'123');
INSERT INTO xz_news VALUES(null,'1233',now(),
'http://127.0.0.1:3000/1.png',0,'123');
INSERT INTO xz_news VALUES(null,'1234',now(),
'http://127.0.0.1:3000/1.png',0,'123');
INSERT INTO xz_news VALUES(null,'1235',now(),
'http://127.0.0.1:3000/1.png',0,'123');
INSERT INTO xz_news VALUES(null,'1236',now(),
'http://127.0.0.1:3000/1.png',0,'123');
INSERT INTO xz_news VALUES(null,'1237',now(),
'http://127.0.0.1:3000/1.png',0,'123');
INSERT INTO xz_news VALUES(null,'1238',now(),
'http://127.0.0.1:3000/1.png',0,'1239');
INSERT INTO xz_news VALUES(null,'123',now(),
'http://127.0.0.1:3000/1.png',0,'12310');
INSERT INTO xz_news VALUES(null,'123',now(),
'http://127.0.0.1:3000/1.png',0,'12311');
INSERT INTO xz_news VALUES(null,'123',now(),
'http://127.0.0.1:3000/1.png',0,'12312');
INSERT INTO xz_news VALUES(null,'123',now(),
'http://127.0.0.1:3000/1.png',0,'12313');
INSERT INTO xz_news VALUES(null,'12314',now(),
'http://127.0.0.1:3000/1.png',0,'12314');
INSERT INTO xz_news VALUES(null,'12315',now(),
'http://127.0.0.1:3000/1.png',0,'123');
INSERT INTO xz_news VALUES(null,'12316',now(),
'http://127.0.0.1:3000/1.png',0,'123');
INSERT INTO xz_news VALUES(null,'12317',now(),
'http://127.0.0.1:3000/1.png',0,'123');
INSERT INTO xz_news VALUES(null,'123',now(),
'http://127.0.0.1:3000/1.png',0,'12318');
INSERT INTO xz_news VALUES(null,'123',now(),
'http://127.0.0.1:3000/1.png',0,'12319');
INSERT INTO xz_news VALUES(null,'123',now(),
'http://127.0.0.1:3000/1.png',0,'12320');
INSERT INTO xz_news VALUES(null,'123',now(),
'http://127.0.0.1:3000/1.png',0,'12321');
INSERT INTO xz_news VALUES(null,'12322',now(),
'http://127.0.0.1:3000/1.png',0,'123');




#创建表 xz_comment 评论表
CREATE TABLE xz_comment(
  id INT PRIMARY KEY AUTO_INCREMENT,
  content VARCHAR(2000),
  ctime DATETIME,
  nid   INT
);
INSERT INTO xz_comment VALUES(null,'1',now(),1);
INSERT INTO xz_comment VALUES(null,'2',now(),1);
INSERT INTO xz_comment VALUES(null,'3',now(),1);
INSERT INTO xz_comment VALUES(null,'4',now(),1);
INSERT INTO xz_comment VALUES(null,'5',now(),1);
INSERT INTO xz_comment VALUES(null,'6',now(),1);
INSERT INTO xz_comment VALUES(null,'7',now(),1);
INSERT INTO xz_comment VALUES(null,'8',now(),1);
INSERT INTO xz_comment VALUES(null,'9',now(),1);
INSERT INTO xz_comment VALUES(null,'10',now(),1);
INSERT INTO xz_comment VALUES(null,'11',now(),1);
INSERT INTO xz_comment VALUES(null,'12',now(),1);
INSERT INTO xz_comment VALUES(null,'13',now(),1);
INSERT INTO xz_comment VALUES(null,'14',now(),1);
INSERT INTO xz_comment VALUES(null,'15',now(),1);
INSERT INTO xz_comment VALUES(null,'16',now(),1);
INSERT INTO xz_comment VALUES(null,'17',now(),1);
INSERT INTO xz_comment VALUES(null,'18',now(),1);
INSERT INTO xz_comment VALUES(null,'19',now(),1);
INSERT INTO xz_comment VALUES(null,'20',now(),1);
INSERT INTO xz_comment VALUES(null,'21',now(),1);
INSERT INTO xz_comment VALUES(null,'22',now(),1);










