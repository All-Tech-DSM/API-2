from csv import reader
import PyPDF2
import os

def leitor(nome):
    trecho = ''
    dir = (os.getcwd().strip('server')) + 'script/src/PDF' 
    pastas = [f for f in os.listdir(dir)]
    for i in pastas:
        dirpastas = (os.getcwd().strip('server')) + 'script/src/PDF/' + f'{i}'
        with open(f'{dirpastas}/merger.pdf', 'rb') as pdf:
            reader = PyPDF2.PdfFileReader(pdf)
            for x in range(reader.getNumPages()):
                pagina = reader.getPage(x)
                texto = pagina.extractText()
                for paragrafo in texto.replace('"',"'").split('\n'):
                        if nome.upper() in paragrafo.upper():
                            trecho = trecho + paragrafo
                            
    return trecho.lower()