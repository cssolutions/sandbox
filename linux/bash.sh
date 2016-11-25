#!/bin/bash
MYVAR="ezt írd ki faszom"
echo $MYVAR

#backup 
#tar -czf myhome_directory.tar.gz /home/linuxconfig

OF=myhome_directory_$(date +%Y%m%d).tar.gz
echo $OF
#tar -czf $OF /home/linuxconfig 

#running commands
echo `uname -a`

#command line arguments
args=("$@")
#echo arguments to the shell
echo ${args[0]} ${args[1]} ${args[2]}


#echo -e "Hi, please type the word: \c "
#read  word
#echo "The word you entered is: $word"
#echo -e "Can you please enter two words? "
#read word1 word2
#echo "Here is your input: \"$word1\" \"$word2\""
#echo -e "How do you feel about bash scripting? "
## read command now stores a reply into the default build-in variable $REPLY
#read
#echo "You said $REPLY, I'm glad to hear that! "
#echo -e "What are your favorite colours ? "
## -a makes read command to read into an array
#read -a colours
#echo "My favorite colours are also ${colours[0]}, ${colours[1]} and ${colours[2]}:-)" 


#trap bashtrap INT
#clear;
#bashtrap()
#{
#    echo "CTRL+C Detected !...executing bash trap !"
#}
## for loop from 1/10 to 10/10
#for a in `seq 1 10`; do
#    echo "$a/10 to Exit." 
#    sleep 1;
#done
#echo "Exit Bash Trap Example!!!"


#Declare simple bash array
ARRAY=( 'Debian Linux' 'Redhat Linux' Ubuntu Linux )
ELEMENTS=${#ARRAY[@]}
for (( i=0;i<$ELEMENTS;i++)); do
    echo ${ARRAY[${i}]}
done 