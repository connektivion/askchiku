<?php
$count=0;
$d=0;
if(isset($_GET['query']))
{
	$search=$_GET['query'];
	if(!empty($search))
	 {
	 	$search=strtolower($search);
	 	if(str_word_count($search)>1)
	 	{
	 		$str=strrev($search);
	 		for($i=0;$i<strlen($str);$i++)
	 			{
	 				if($str[$i]==" ")
	 					{
	 						$d=strlen($str)-$i;
	 						//echo $d;
	 						$search=substr($search, $d);
	 						break;
	 					}	
				}
		}
	 	$words= ['is','are','age','sitting','standing','fan','love','gaurav','who','how','what','why','where','which','speed','dixit','sunny','rai','abhay','garvit','abhinay','chenga','arpan','rishabh','ankit','color','shirt','wear','cheeku'];
	 		foreach ($words as $word) 
				{
					if($search==substr($word, 0,strlen($search)))
						{
							if($search!=$word)
							{
								echo "<b>".$word."</b>"." bolenge?";
								$count=1;
								break;
							}
							else
								{
									echo "pehle hi bola ki "."'<b>".$word."</b>'"." type karoge!";
									$count=1;
									break;
								}
						}
					else 
						continue;
				}
				if($count==0)
					echo "<i>toh kya poochiyega?</i>";
	 }
	 else
	 {
		echo "Arrey bhai kuch to pooch lijiyga??";
	}
}
?>