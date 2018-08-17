### Face Recognition Brain
###### Description:
Recognising and drawing a box around the faces detected in an image
###### Technologies Used: 
React, Redux

###### This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
<br>
* * *
<br>
#### Encrypting the API keys, DB keys, and other confidential files before pushing on to the repositories (using [Blackbox by StackExchange](https://github.com/StackExchange/blackbox)):
+ ##### Make a new file and register it: <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; `rm -f foo.txt.gpg foo.txt` <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; `echo This is a test. >foo.txt` <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; `blackbox_register_new_file foo.txt` <br>
+ ##### Decrypt it: <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; `blackbox_edit_start foo.txt.gpg`
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; `cat foo.txt`
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; `echo This is the new file contents. >foo.txt`
+ ##### Re-encrypt it: <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; `blackbox_edit_end foo.txt.gpg`
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; `ls -l foo.txt*`
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; `You should only see foo.txt.gpg as foo.txt should be gone.`
