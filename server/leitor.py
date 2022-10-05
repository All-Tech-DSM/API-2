from csv import reader
import PyPDF2
import os

def leitor(nome):
    dir = (os.getcwd().strip('server')) + 'PDF' 
    pastas = [f for f in os.listdir(dir)]
    for i in pastas:
        dirpastas = (os.getcwd().strip('server')) + 'PDF/' + f'{i}'
        pdf = open(f'{dirpastas}/merger.pdf', 'rb')
        reader = PyPDF2.PdfFileReader(pdf)
        for x in range(reader.getNumPages()):
            pagina = reader.getPage(x)
            texto = pagina.extractText()
            for paragrafo in texto.replace('"',"'").split('\n'):
                    if nome.upper() in paragrafo.upper():
                        print(paragrafo)
                        print('-')
                        