from contacts import email
yourName = input( " Hello, who are you ? " )
client = new Client(yourName)
question = input( " Can i help you with your project, {0} ? ".format(client.name) )
if question == 'Yes':
    print( ' Great! ' )
    information = input( " Tell me more about your projects: " )
    print( " Now you should contact me " )
    emai.sendMe(information, client.email)
    
elif question == 'No':
    print( " I'm Sorry :[ " )
    print("Please, save my contact in case you need it in the future.")
    print(" Bye :] ")

else:
    print("Continue looking my website.")
    print("One of my skills bellow may interest you.")


