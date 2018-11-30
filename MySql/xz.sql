SET NAMES UTF8;
DROP DATABASE  IF EXISTS xz;
CREATE DATABASE xz CHARSET  UTF8;
use xz;
create table xz_user(#用户信息表
    uid         int  primary key not null auto_increment,#用户的ID,为用户的唯一标示,由系统自动生成
    uname   	varchar(32),
    upwd	  	varchar(32),
    email		varchar(64),
    phone		varchar(16) not null unique,#手机号码
    avatar		varchar(128),#头像图片路径
    user_name	varchar(32),#用户名:如王小明
    gender		 bool#用户性别 0女,1男
    
);

create table xz_receiver_address(#用户地址表
	aid				int primary key auto_increment,
    user_id		int,#用户编号
    receiver		varchar(16),#接收人姓名
    province		varchar(16),#省
    city				varchar(16),#市
    county			varchar(16),#县
    address		varchar(128),#详细地址
    cellphone	 	varchar(16),#手机号码
    fixedphone	varchar(16),#固定电话
    postcode		char(6),#邮编
    tag				varchar(16),#标签名
    is_default		boolean#是否为当前用户默认收货地址
);

create table xz_shopping_cart(#用户购物车表
	cid				int primary key auto_increment,
    user_id		int,#用户编号
    product_id	int,#商品编号
    count			int#购买数量
);

create table xz_order(#用户订单表
    aid             int PRIMARY key auto_increment,
    user_id         int,#用户编号
    address_id      int,
    status          int,#订单状态 1-等待付款,2-等待发货,3-运输中,4-已签收,5-已签收
    order_time      bigint,#下单时间
    pay_time        bigint,#付款时间
    deliver_time    bigint,#发货时间
    received_time   bigint#签收时间
);
create table xz_order_detail(#用户订单详情表
    did         int primary key auto_increment,
    order_id    int,#订单编号
    product_id  int,#产品编号
    count       int #购买数量
);

create table xz_laptop_family(#商品类别表
    fid         int PRIMARY key auto_increment,
    name        VARCHAR(32)#类别名称

);

create table xz_laptop(#商品表
    lid         int PRIMARY key auto_increment,
    family_id   int,#所属型号家族编号
    product_id  int,#产品编号
    title       VARCHAR(128),#主标题
    subtitle    VARCHAR(128),#副标题
    price       decimal(10,2),#价格
    promise     varchar(64),#服务承诺
    spec        VARCHAR(64),#规格/颜色
    name        VARCHAR(32),#商品名称
    os          VARCHAR(32),#操作系统
    memory      varchar(32),#内存容量
    resolution  VARCHAR(32),#分辨率
    video_card  VARCHAR(32),#显卡型号
    cpu         VARCHAR(32),#处理器
    video_memory varchar(32),#显存容量
    category    VARCHAR(32),#所属分类
    disk        VARCHAR(32),#硬盘容量及类型
    details     VARCHAR(1024),#产品详细说明
    shelf_time  bigint,#上架时间
    sold_count  int,#已售出的数量
    is_onsale   boolean#是否促销中
);
create table xz_laptop_pic(#商品详情图表
    pid         int PRIMARY key auto_increment,
    laptop_id   int,#笔记本电脑编号
    sm          varchar(128),#小图片路径
    md          VARCHAR(128),#中图片路径
    lg          VARCHAR(128)#大图片路径
);

create table xz_index_carousel(#首页轮播图表
    cid         int PRIMARY KEY auto_increment,
    img         VARCHAR(128),#图片路径
    title       VARCHAR(64),#图片描述
    href        VARCHAR(128)#图片链接
);
create table xz_index_product(#首页商品栏目表
    pid         int PRIMARY key auto_increment,
    title       VARCHAR(64),#商品标题
    details     VARCHAR(128),#详细描述
    pic         VARCHAR(128),#图片
    price       decimal(10,2),#商品价格
    href        VARCHAR(128),
    seq_recommended TINYINT,
    seq_new_arrival TINYINT,
    seq_top_sale    TINYINT
);