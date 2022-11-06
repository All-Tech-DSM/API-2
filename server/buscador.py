import MySQLdb
from datetime import date
from coletor import coletor
from leitor import leitor
import requests
import os
import shutil
from PyPDF2 import PdfFileReader, PdfFileMerger

def busca():
    con = MySQLdb.connect( user="root", password="fatec", db="cadastro")
    cur = con.cursor()
    cur.execute('SELECT nome, fun_cod, email, cpf, tel_celular FROM funcionario ORDER BY nome;')
    feedback=cur.fetchall()
    nomes = []
    for i in range(len(feedback)):
        buffer = []
        buffer.append('"'+feedback[i][0].lower()+'"')
        buffer.append(feedback[i][1])
        buffer.append(feedback[i][2])
        buffer.append(feedback[i][3])
        buffer.append(feedback[i][4])
        nomes.append(buffer)
    data = "2022-09-17"#str(date.today())
    datatext = "17/09/2022"#date.today()
    data1 = data.replace('-', '')
    data3 = datatext #.strftime( '%d/%m/%Y' )
    data3parte2 = data3.replace('/', '.')
    data4 = data.replace('/', '%2f')

    res = []

    for n in range(len(nomes)):
        nome = nomes[n][0].replace(' ', '+')
        nome2 = nomes[n][0].replace(' ', '%2b')

        url = (f'http://www.imprensaoficial.com.br/DO/BuscaDO2001Resultado_11_3.aspx?filtropalavraschave=%22{nome}%22&f=xhitlist&xhitlist_vpc=first&xhitlist_x=Advanced&xhitlist_q=%5bfield+%27dc%3adatapubl%27%3a%3e%3d{data3parte2}%3c%3d{data3parte2}%5d({nome2})&filtrogrupos=Cidade+de+SP%2c+Executivo+&xhitlist_mh=9999&filtrodatafimsalvar={data1}&filtroperiodo={data4}+a+{data4}&filtrodatainiciosalvar={data1}&filtrogrupossalvar=Cidade+de+SP%2c+Executivo+&xhitlist_hc=%5bXML%5d%5bKwic%2c3%5d&xhitlist_vps=15&filtrotodosgrupos=False&xhitlist_d=Cidade+de+SP%2c+Executivo+&filtrotipopalavraschavesalvar=UP&xhitlist_s=&xhitlist_sel=title%3bField%3adc%3atamanho%3bField%3adc%3adatapubl%3bField%3adc%3acaderno%3bitem-bookmark%3bhit-context&xhitlist_xsl=xhitlist.xsl')
        pessoa = []
        pessoa.append(nomes[n][0])
        pessoa.append(nomes[n][1])
        pessoa.append(nomes[n][2])
        pessoa.append(nomes[n][3])
        pessoa.append(nomes[n][4])
        pessoa.append(coletor(url))
        res.append(pessoa)

    filtro = res
    res = []
    for i in filtro:
        if i[-1] != [] :
            i[0] = i[0].replace('"', '')
            res.append(i)


    dir = (os.getcwd().strip('server')) + 'PDF' 
    for f in os.listdir(dir):
        shutil.rmtree(os.path.join(dir, f))
    for p in res:
        pdf_n = 1
        for l in p[-1]:
            r = requests.get(l, stream = True)
            if not os.path.exists(f'{dir}/{p[0]}'):
                os.makedirs(f'{dir}/{p[0]}')
            with open(dir+'/' + p[0] + '/' + p[0] + str(pdf_n)+'.pdf', "wb") as f:
                f.write(r.content)
            pdf_n = pdf_n +1
    pdf_files = [f for f in os.listdir(dir)]
    merger = PdfFileMerger()
    for i in pdf_files:
        dir2 = (os.getcwd().strip('server')) + 'PDF/' + f'{i}'
        pdf_files2 = [f for f in os.listdir(dir2)]
        merger = PdfFileMerger()
        for n in pdf_files2:
            merger.append(PdfFileReader(os.path.join(dir2, n), "rb"))
        for a in pdf_files2:
            os.remove(dir2+'/'+a)
        merger.write(os.path.join(dir2, "merger.pdf"))
    for n in res:
        n.append(leitor(n[0]))
    return res