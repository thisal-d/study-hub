<div align="center">

# IT2130-Operating Systems and System Administration Practical Sheet 10

</div>

## Activity 1

Write down the output for following commands: (Remember Unix is case sensitive, therefore type them as they are.)

echo $PATH ...

echo $HOME ...

echo $USER ...

echo $PWD ...

echo $PS1 ...

a) Did you assign the values that you noted down for the above variables? Yes/No

b) If not, who assigned those values for the above variables? ...

## Activity 2

Assign and print following variables

labclass="This is OSSA Lab Class"

echo $labclass

num=`expr 13+5`

echo $num

num=`expr 13 \* 5`

echo $num

num1=`expr $num \/ 7`

echo num1

num1=`expr $num \% 7`

echo num1

num1=`expr $num1 + 8`

echo num1

Create a shell script usrinfo. Define variables call "name", "address", "country" inside the usrinfo. Assigned your name, address, and country respectively in to the variables. Write statements to print contents of the variables on the screen. Save and quit the script.

Give full permission to the script you created above usrinfo file. Change permission of the same file, so that others have no access to the file. (Hint: You can use chmod command to enable and disable file permissions)

Write down the commands that can be used to execute a shell script,

a) in which user doesn't have execution permission ...

b) in which user has execution permission ...

## Activity 3

9) Make a directory scripts inside your working directory. Change your directory to new directory (by typing cd scripts).

Create a file script1 and enter the following lines to the file script1.

#!/bin/bash

echo Welcome to SLIIT Server

echo Today is : date

Save the file and quit the editor.

Type sh script1 and observe the output.

Why can't you type script1 to run it? (Hint: Type ls -l script1 and check the file permissions.)

Run chmod u+x script1 to enable the rights for