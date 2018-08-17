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
