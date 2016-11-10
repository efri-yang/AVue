<?php
// 指定允许其他域名访问
header('Access-Control-Allow-Origin:*');

// 响应类型
header('Access-Control-Allow-Methods:GET,POST,PUT');
header('Access-Control-Allow-Headers:x-requested-with,content-type');


$list=array(
array("title"=>"标题01",'time'=>'2015-01-1','tag'=>'工具','author'=>'散崖','desc'=>'描述01！','url'=>' 

http://uedc.nd.tmc/inc/20161109015459.inc'),
array("title"=>"标题02",'time'=>'2015-01-2','tag'=>'工具','author'=>'散崖','desc'=>'描述02！','url'=>'http://uedc.nd.tmc/inc/20161109015459.inc '),
array("title"=>"标题03",'time'=>'2015-01-3','tag'=>'工具','author'=>'散崖','desc'=>'描述03！','url'=>'http://uedc.nd.tmc/inc/20161103202816.inc'),
array("title"=>"标题04",'time'=>'2015-01-4','tag'=>'工具','author'=>'散崖','desc'=>'描述04！','url'=>'http://uedc.nd.tmc/inc/20161103202816.inc'),
array("title"=>"标题05",'time'=>'2015-01-5','tag'=>'工具','author'=>'散崖','desc'=>'描述05！','url'=>'http://uedc.nd.tmc/inc/20161103202816.inc'),
array("title"=>"标题06",'time'=>'2015-01-6','tag'=>'工具','author'=>'散崖','desc'=>'描述06！','url'=>'http://uedc.nd.tmc/inc/20161103202816.inc'),
array("title"=>"标题07",'time'=>'2015-01-7','tag'=>'工具','author'=>'散崖','desc'=>'描述07！','url'=>'http://uedc.nd.tmc/inc/20161103202816.inc'),
array("title"=>"标题08",'time'=>'2015-01-8','tag'=>'工具','author'=>'散崖','desc'=>'描述08！','url'=>'http://uedc.nd.tmc/inc/20161103202816.inc'),
array("title"=>"标题09",'time'=>'2015-01-9','tag'=>'工具','author'=>'散崖','desc'=>'描述09！','url'=>'http://uedc.nd.tmc/inc/20161103202816.inc'),
array("title"=>"标题10",'time'=>'2015-01-10','tag'=>'工具','author'=>'散崖','desc'=>'描述10！','url'=>'http://uedc.nd.tmc/inc/20161103202816.inc')
);
echo json_encode($list)
?>