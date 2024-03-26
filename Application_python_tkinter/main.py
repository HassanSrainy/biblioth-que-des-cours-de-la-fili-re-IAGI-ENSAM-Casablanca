
from function import *

root = Tk()
root.title("Welcome")
root.resizable(False, False)
icone=PhotoImage(file="pl.png")
root.iconphoto(False,icone)

welcome_page = resize_image('welcome.jpg')
label = Label(root, image=welcome_page)
label.pack()



frame = Frame(root, width="200", height="200", bg="#fff")
frame.place(x=190, y=280)

login_button_image = resize_image('loginbtn.jpg', (150, 80))
login_button = Button(frame, image=login_button_image, activebackground="#fff", bd=0, bg="#fff", command=lambda: login(root))
login_button.place(x=20, y=10)

signUp_button_image = resize_image('signupbtn.jpg', (150, 80))
signUp_button = Button(frame, image=signUp_button_image, activebackground="#fff", bd=0, bg="#fff", command=lambda: signup(root))
signUp_button.place(x=20, y=100)

container(root)

root.mainloop()





