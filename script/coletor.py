from bs4 import BeautifulSoup
import requests



def coletor(url, nome):
    r = requests.get(url)
    start = r.text.find('<div class="card shadow-sm resultadoBuscaItem">')
    end = r.text.find('<div class="rodape">')
    recorte = r.text[start:end]
    final = 0
    com_ex = '<a class="bg-light text-dark" style="text-decoration: none;" href="/DO/BuscaDO2001Documento'
    fin_ex = len('" target="_blank">')
    links = [nome]
    c = 0
    while True:
        começo = recorte.find(com_ex) + len(com_ex) + 5
        if começo == 95:
            break
        for k in recorte[começo:]:
            c+= 1
            if k == '>':
                final = começo+c
                links.append(('http://www.imprensaoficial.com.br/DO/GatewayPDF' + recorte[começo:final-fin_ex]).replace(' ', ''))
                #print('http://www.imprensaoficial.com.br/DO/GatewayPDF' + recorte[começo:final-fin_ex]).replace(' ', '')
                recorte = recorte[final+1:]
                c = 0
                break
    # teste = links[n].replace('oi', 'GatewayPDF.aspx')
    print(links)
    return links

# teste = url 
# print(teste + 'oii')
# tes = teste.replace('BuscaDO2001Documento', 'GatewayPDF')
# print('oi')
# print(tes + 'hello')



# r = requests.get(vai, stream = True)
# for l in range(1, len(links)):
#     # with open(links[0] + str(l)+'.pdf', "wb") as f:
#     #     f.write(links[l])
#     print(links[0] + str(l)+'.pdf')

# r = requests.get(tes, stream = True)
# with open('diar.pdf', "wb") as f:
#     f.write(r.content)




#a função recebe o nome da pessoa que esta sendo pesquisada apenas por referencia pois a lista retornada 
#tera o primeiro elemento como o nome assim organizando os links junto com o nome procurado