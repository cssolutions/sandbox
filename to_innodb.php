<?php

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

// your connection
mysql_connect("localhost","root","");
mysql_select_db("dcommerce");

// convert
$res = mysql_query("SHOW TABLES");
while ($row = mysql_fetch_array($res))
{
    foreach ($row as $key => $table)
    {
        mysql_query("ALTER TABLE " . $table . " TYPE=InnoDB;");
        echo $key . " =&gt; " . $table . " done<br />";
    }
}