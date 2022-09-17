import MySQLdb
from datetime import date
from coletor import coletor
import requests
import os

con = MySQLdb.connect( user="root", password="franca", db="cadastro")
cur = con.cursor()
cur.execute('SELECT nome, email FROM funcionario ORDER BY nome;')
feedback=cur.fetchall()
nomes = []
for i in range(len(feedback)):
    buffer = []
    buffer.append('"'+feedback[i][0].lower()+'"')
    buffer.append(feedback[i][1])
    nomes.append(buffer)
data = str(date.today())
datatext = date.today()
data1 = data.replace('-', '')
data2 = data.replace('-', '.')
data3 = datatext.strftime( '%d/%m/%Y' )
data3parte2 = data3.replace('/', '.')
data4 = data.replace('/', '%2f')

res = []

for n in range(len(nomes)):
    nome = nomes[n][0].replace(' ', '+')
    nome2 = nomes[n][0].replace(' ', '%2b')

    url = (f'http://www.imprensaoficial.com.br/DO/BuscaDO2001Resultado_11_3.aspx?filtropalavraschave=%22{nome}%22&f=xhitlist&xhitlist_vpc=first&xhitlist_x=Advanced&xhitlist_q=%5bfield+%27dc%3adatapubl%27%3a%3e%3d{data3parte2}%3c%3d{data3parte2}%5d({nome2})&filtrogrupos=Cidade+de+SP%2c+Executivo+&xhitlist_mh=9999&filtrodatafimsalvar={data1}&filtroperiodo={data4}+a+{data4}&filtrodatainiciosalvar={data1}&filtrogrupossalvar=Cidade+de+SP%2c+Executivo+&xhitlist_hc=%5bXML%5d%5bKwic%2c3%5d&xhitlist_vps=15&filtrotodosgrupos=False&xhitlist_d=Cidade+de+SP%2c+Executivo+&filtrotipopalavraschavesalvar=UP&xhitlist_s=&xhitlist_sel=title%3bField%3adc%3atamanho%3bField%3adc%3adatapubl%3bField%3adc%3acaderno%3bitem-bookmark%3bhit-context&xhitlist_xsl=xhitlist.xsl')
    res.append(coletor(url, nomes[n]))

dir = (os.getcwd().strip('server')) + 'PDF'
for f in os.listdir(dir):
    os.remove(os.path.join(dir, f))

for links in res:
    #print(links)
    for l in range(len(links[2])):
        r = requests.get(links[2][l], stream = True)
        with open(dir+'/' + links[0][1:-1] + str(l)+'.pdf', "wb") as f:
            f.write(r.content)


filtro = res
res = []
for i in filtro:
    if i[2] :
        res.append(i)

print(res)