from email.message import EmailMessage
import ssl
import smtplib

email_envio = 'alltech.bot@gmail.com'
email_senha = 'dkoyyogysrnicelo'
email_recebe = ['cavendishsophia@gmail.com', 'lucascumuru@gmail.com']
mensagem = ['para sophia', 'para lucas']


def enviar(pessoa, msg, nome):
    subject = 'Suas ocorrencias no Diário oficial de São Paulo'
    body = f''' Olá {nome}, somos da All Tech e você foi citado(a) no Diário Oficial. 
    Confira o trecho:

    {msg}
    
    '''
    em = EmailMessage()
    em['From'] = email_envio
    em['To'] = pessoa
    em['Subject'] = subject
    em.set_content(body)

    context = ssl.create_default_context()

    with smtplib.SMTP_SSL('smtp.gmail.com', 465, context=context) as smtp:
        smtp.login(email_envio, email_senha)
        smtp.sendmail(email_envio, pessoa, em.as_string())

    print(f'E-mail enviado com sucesso à {pessoa}')
