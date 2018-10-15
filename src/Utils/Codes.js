const myCode = 
    [
        '1    >>>      from contacts import email', 
        '2    >>>      yourName = input( " Hello, who are you ? " )', 
        '3    >>>      client = Client( yourName )', 
        '4    >>>      question = input( " Can i help you with your project, {0} ? ".format( client.name ) )', 
        "5    >>>      if question == 'Yes':", 
        "6    >>>          print( ' Great! ' )", 
        '7    >>>          information = input( " Tell me more about your projects: " )', 
        '8    >>>          print( " Now you should contact me " )', 
        '9    >>>          emai.sendMe( information, client.email )', 
        "10   >>>      elif question == 'No':", 
        '11   >>>          print( " I\'m Sorry :[ " )', 
        '12   >>>          print( " Please, save my contact in case you need it in the future. " )', 
        '13   >>>          print( " Bye :] " )', 
        '14   >>>      else:', 
        '15   >>>          print( " Continue looking my website. " )', 
        '16   >>>          print( " One of my skills bellow may interest you. " )', 
    ];
export default myCode;