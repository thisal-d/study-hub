<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202605061237092a9c168483904ea4%2Fcrop_1_1778042244985.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=tOjvJffTcI0e8UxYepDVi3czhXo%3D&Expires=1778647045' alt='OCR图片'/></div>

<div align="center">

# Faculty of Computing

</div>

<div align="center">

# Year 2 Semester 2 (2026)

</div>

<table border="1"><tr><td>IT2130-Operating Systems and System Administration</td><td>Lab Sheet 9</td></tr></table>

Objective: This practical demonstrates the use of file management in Unix/Linux.

## Activity 1

Unix directory structure

1. Log in to the system and type pwd to print working directory. Note down the absolute path, i.e. pathname starting from /, i.e. root directory.

Absolute path name: ...

2. Now use cd command to change your directory to /. Type ls -l and observe the different fields that can be seen in the output.

How can you recognize file/directory by looking at this output? Do you have the read, write, or execute permission to these files/directories? What do these fields mean?

3. Visit following directories:

/bin, /home, /dev, /etc, /lib

Type ls -l under each directory. Can you interpret the output of ls -l command? Check the very first letter of each line when you type ls -l under /dev directory.

4. Use following methods to go back to your home directory.

cd ~

cd $HOME

Can you distinguish the difference among cd, cd ., cd .. commands?

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202605061237092a9c168483904ea4%2Fcrop_2_1778042245045.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=GlpiF3LNlxcl2VR8vJvVFJm7cew%3D&Expires=1778647045' alt='OCR图片'/></div>

## Activity 2

## File Access permissions

1. Create a new directory by giving your index number as directory name. Use cd (change directory) command to move into new directory. Now create a new file called chkpermission and check default file permissions using ls -l.

2. Change file permissions of chkpermission by giving full access to owner and remove all permissions from others. Write command(s) executed.

3. Change file permission giving full control to owner while others getting read and execute permissions. Write commands and output you are getting.

Repeat step 1, 2 and 3, use octal numbers to change permissions. Make sure to create a new file and start working on it.

4. Now go back to parent directory. (It is your home directory). Check directory permissions which are created with your index number. Write down permission available by defaults for directory.

5. Now change directory permissions by removing all permissions from all others. Write it.

6. Now remove execute and read permissions from owner. Try to see the contents of the directory. Observe the result.

7. Assign read permission to directory and check to see content of the directory. Observe the result.

8. Add read and execute permissions to the directory and try to see the content. Write your observation in order to see directory contents.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202605061237092a9c168483904ea4%2Fcrop_1_1778042245053.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=39gHVVrLHea87Bh7gBTmUxhYiyY%3D&Expires=1778647045' alt='OCR图片'/></div>

## Activity 3

## Changing file/directory modes

1. Create a directory, lab1 in your home directory. Create a text file, idioms with following text.

a. Try, Try, Try, One day you can fly

b. Ideas without action are worthless

c. What doesn't kill me makes me stronger

d. Patience is the companion of wisdom

e. Only those who do nothing make no mistakes

2. Check access permissions by typing ls -l. Type chmod a+rwx idioms and check the access permissions again. Type chmod 644 idioms and re-check the access permissions. Practice chmod command in both modes.

3. Type ls -i to check the i-node number of the idioms file.

4. Check the number of links to idioms file.

## Activity 4

## Hard links and soft links

1. Create a directory, linkdemo in your home directory. Inside that directory, create two directories softln and hardln.

2. Inside hardln directory, create a hard link, hardidioms to idioms file.

3. Check the link count of the idioms file, link count of the hardidioms file, size of the two files, and i-node number of the hardidioms file.

4. Edit the idioms file and observe the changes in hardidioms file and vice versa. Check the size of files after each revision.

5. Create another hard link and check the following properties of the original file and other hard links.

Size of the file, number of links and i-node numbers.

Delete a link file and check the above properties again.

6. Inside softln directory, create a soft link, softidioms to idioms file.

7. Check the link count of the idioms file, link count of the hardidioms file, link count of the softidioms file, size of the files, and i-node number of the softidioms file.

8. Edit the idioms file and observe the changes in softidioms file and vice versa. Check the size of files after each revision.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202605061237092a9c168483904ea4%2Fcrop_1_1778042245059.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=rwk4dqIeHLFJDbWSHD7tlBy3MkI%3D&Expires=1778647045' alt='OCR图片'/></div>

9. Create another soft link from different directory structure of your own and check the following properties of the original file and other soft links.

- Size of the file, number of links and i-node numbers

- Delete a soft link file and check the above properties again.

Write your observations:

...

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202605061237092a9c168483904ea4%2Fcrop_1_1778042245069.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=zKFMLKpst66RIPfHFMw1E7li0o0%3D&Expires=1778647045' alt='OCR图片'/></div>