## Face Recognition Brain

### Description: Recognising and drawing a box around the faces detected in an image

### Technologies Used: React, Redux

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).


### Encrypting the API keys, DB keys, and other confidential files before pushing on to the repositories (using [Blackbox by StackExchange](https://github.com/StackExchange/blackbox)):

#### Make a new file and register it:
`rm -f foo.txt.gpg foo.txt`
`echo This is a test. >foo.txt`
`blackbox_register_new_file foo.txt`

#### Decrypt it:
`blackbox_edit_start foo.txt.gpg`
`cat foo.txt`
`echo This is the new file contents. >foo.txt`

#### Re-encrypt it:
`blackbox_edit_end foo.txt.gpg`
`ls -l foo.txt*`
`You should only see foo.txt.gpg as foo.txt should be gone.`
