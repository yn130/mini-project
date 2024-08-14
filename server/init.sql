show databases;

use codingon;

drop table if exists Todo;

create table Todo (
id int not null primary key auto_increment,
title varchar(100) not null,
done boolean not null default false
);

desc Todo;

select * from todo;

insert into Todo values (null, 'my todo1', 0);
insert into Todo values (null, 'my todo2', 1);
insert into Todo values (null, 'my todo3', 0);
insert into Todo values (null, 'my todo4', 0);
insert into Todo values (null, 'my todo5', 1);
insert into Todo values (null, 'my todo6', 0);

update todo set title = '내가 할일 2번' where id = 2;

delete from todo where id = 3;


-- 유저 변경
select * from mysql.user;

create user 'user'@'%' identified with mysql_native_password by '1234';


flush privileges;
