from buscador import busca
from datetime import date
from reportlab.pdfgen import canvas
from reportlab.platypus import SimpleDocTemplate
from reportlab.platypus import Paragraph

def relatorio():
    resultado = busca()
    #datatext = date.today()
    datatext2 = '17/09/2022'  #datatext.strftime( '%d/%m/%Y' )
    data = '17092022' #datatext2.replace("/", "")
    doc = SimpleDocTemplate(f"relatorio{data}.pdf")
    titulo = "<font size = '22'><strong>Relatório de Ocorrências</strong></font>"
    subtitulo = f"<font size = '14'><strong>Relatório do dia {datatext2}</strong></font>"
    quebra3linhas = "<br></br><br></br><br></br>"
    quebra2linhas = "<br></br><br></br>"
    linha = "<br></br> -----------------------------------------------------------------------------------------------------------------------------------"

    info = []
    info.append(Paragraph(titulo))
    info.append(Paragraph(quebra3linhas))
    info.append(Paragraph(subtitulo))
    info.append(Paragraph(linha))
    info.append(Paragraph(quebra3linhas))

    for lista in resultado:
        associado= f"<font size = '12'><strong>Nome do associado(a):</strong> {lista[0]} <br></br> <strong> E-mail:</strong> {lista[2]} <br></br>  <strong>CPF: </strong> {lista[3]} <br></br>  <strong>Celular: </strong> {lista[4]} </font>"
        ocorrencia =  f"<font size = '10'>{lista[6]}</font>"
        info.append(Paragraph(associado))
        info.append(Paragraph(quebra2linhas))
        info.append(Paragraph(ocorrencia))
        info.append(Paragraph(quebra2linhas))
        info.append(Paragraph(linha))
        info.append(Paragraph(quebra3linhas))

    doc.build(info)
    print('Relatorio Gerado Com Sucesso!')
    return resultado
relatorio()