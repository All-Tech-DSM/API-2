import requests

def coletor(url):
    def raspa(string):
        comeco = string.find(com_ex)
        if comeco == -1: return -1
        string = string[comeco+len(com_ex):]
        fim = string.find(fin_ex)
        lista_link.append('http://www.imprensaoficial.com.br/DO/GatewayPDF' + string[5:fim].replace(' ', ''))
        return raspa(string[fim:])
    r = requests.get(url)
    start = r.text.find('<div class="card shadow-sm resultadoBuscaItem">')
    end = r.text.find('<div class="rodape">')
    recorte = r.text[start:end]
    com_ex = '<a class="bg-light text-dark" style="text-decoration: none;" href="/DO/BuscaDO2001Documento'
    fin_ex = '" target="_blank">'
    lista_link = []
    raspa(recorte)
    return lista_link
