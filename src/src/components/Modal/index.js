import './style.css';

function Modal({conteudo, close}) {
    return (
        <div className='modal'>
            <div className='container'>
                <button className='close' onClick={close}>/>
                    Voltar
                </button>

                <div>
                    <p>Consulta</p>

                    <div className='row>'>
                        {/*<p>Nome: <a>{conteudo.nome}</a></p>*/}
                        <p>Nome: </p>
                    </div>

                    <div className='row>'>
                        <p>Email: </p>
                    </div>

                    {conteudo.complemento !== '' && (
                        <>
                            <p>
                                {conteudo.complemento}
                            </p>
                        </>
                    )}
                </div>
            </div>
        </div>

    )
}

export default Modal;