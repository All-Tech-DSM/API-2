from csv import reader
import PyPDF2
import os
from datetime import date
from datetime import datetime

def leitor(nome):
    k = 0
    index = 0
    trecho = ''
    lista = []
    dir = (os.getcwd().strip('server')) + 'PDF' 
    pastas = [f for f in os.listdir(dir)]
    for i in pastas:
        dirpastas = (os.getcwd().strip('server')) + 'PDF/' + f'{i}'
        with open(f'{dirpastas}/merger.pdf', 'rb') as pdf:
            reader = PyPDF2.PdfFileReader(pdf)
            for x in range(reader.getNumPages()):
                pagina = reader.getPage(x)
                texto = pagina.extractText()
                for paragrafo in texto.replace('"',"'").split('\n'):
                    if nome.upper() in paragrafo.upper():
                        ocorrencia = paragrafo[:paragrafo.upper().index(nome.upper()) + 250]
                        ocorrencia = ocorrencia + '...'
                        if trecho != "":
                            trecho = trecho + ocorrencia + "----------------------------------------------------------------------------------------------"
                        else:
                            trecho = trecho + ocorrencia
    
    for letra in trecho:
        if letra == '/':
            lista.append(k)
        k+=1

    prazos = []
    while index < len(lista)-1:
        if lista[index] + 3 == lista[index+1]:
            datatexto = trecho[(lista[index]-2):(lista[index+1]+5)]
            if datatexto[-1] != ' ':
                data = date.today()
                data =f'{data}'
                datatexto =  datatexto[6:] + datatexto[2:6]  + datatexto[:2]
                if int(datatexto[:4]) >= int(data[:4]): 
                    if int(datatexto[5:7]) >= int(data[5:7]):
                        if int(datatexto[8:]) >= int(data[8:]):
                            prazos.append(datatexto)
        index+=1
    if len(prazos) == 0:
        prazos = "Não há prazos"

    
    resultado = [trecho.lower(), prazos]
    return resultado


