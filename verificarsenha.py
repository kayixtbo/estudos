tentativas: int = 0 

while True:
    senhaDigitada: str = input("Digite sua senha: ")

    if senhaDigitada == "1234":
        print("Acesso Permitido")
        break
    else: 
        tentativas = tentativas + 1 

    if tentativas == 3:
        print("Acesso Negado") 
        break
    
    
