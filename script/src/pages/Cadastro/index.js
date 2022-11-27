import './style.css';
import Header from "../../components/Header";
import { IMaskInput } from "react-imask";
import React, { useState } from "react";
import Axios from "axios";
import { toast } from 'react-toastify';
import { cpf } from 'cpf-cnpj-validator';

function Cadastro() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [cpfe, setCpf] = useState('');
  const [nasc, setNasc] = useState('');
  const [tel, setTel] = useState('');
  const [cel, setCel] = useState('');
  const [cep, setCep] = useState('');
  const [num, setNum] = useState('');
  const [rua, setRua] = useState('');
  const [bairro, setBairro] = useState('');
  const [comp, setComp] = useState('');
  const [city, setCity] = useState('');
  const [estado, setEstado] = useState('');

  const [formValue, setFormValue] = useState([{ escolas: "" }])
  

  let handleChange = (i, e) => {
    let newFormValue = [...formValue];
    newFormValue[i][e.target.name] = e.target.value;
    setFormValue(newFormValue);
  }

  let addFormField = () => {
    setFormValue([...formValue, { escolas: "" }])
  }

  let removeFormField = (i) => {
    let newFormValue = [...formValue];
    newFormValue.splice(i, 1);
    setFormValue(newFormValue)
  }

  let clearAreas = (i, e) => {
    setNome('')
    setEmail('')
    setCpf('')
    setNasc('')
    setTel('')
    setCel('')
    setCep('')
    setNum('')
    setRua('')
    setBairro('')
    setCity('')
    setEstado('')
    setComp('')
    setFormValue('')
  }

  const checkCEP = (e) => {
    const cep = e.target.value.replace(/\D/g, '');
    console.log(cep);
    fetch(`https://viacep.com.br/ws/${cep}/json/`).then(res => res.json()).then(data => {
      console.log(data);
      // register({ name: 'address', value: data.logradouro });
      setRua(data.logradouro);
      setBairro(data.bairro);
      setCity(data.localidade);
      setEstado(data.uf);
    }).catch((err) => console.log(err));
  }

  const checkCpf = (e) => {
    const cpfe = e.target.value.replace(/\D/g, '');
    if (cpf.isValid(cpfe) == false){
      toast.error("CPF invalido")
      setTimeout(1000);
    }
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (cpf.isValid(cpfe) == true){
    toast.success('Cadastrado feito com sucesso!');

    Axios.post("http://localhost:3001/register", {
      nome: nome,
      email: email,
      cpf: cpfe,
      nas_data: nasc,
      tel_fixo: tel,
      tel_celular: cel,
      cep: cep,
      numero: num,
      rua: rua,
      bairro: bairro,
      cidade: city,
      estado: estado,
      complemento: comp,
      escolas: formValue
    }).then((res)=>{
      console.log(res)      
    })    
  }
  }

  return (
    <div>
    <Header/>
    <div className="container">

      <div className='content'>
        <p>Cadastro</p>

        <form onSubmit={handleSubmit}>

          <div className='dados'>
            <input placeholder='Nome completo' maxLength="60" value={nome} onChange={(e) => setNome(e.target.value)} required />
            <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>

          <div className='metade'>
            <IMaskInput mask="000.000.000-00" placeholder="CPF" value={cpfe} onBlur={checkCpf} onChange={(e) => setCpf(e.target.value)} />
            <IMaskInput mask="00/00/0000" placeholder='Data de nascimento' value={nasc} onChange={(e) => setNasc(e.target.value)} />
            <IMaskInput mask="(00) 00000-0000" placeholder='Telefone' value={tel} onChange={(e) => setTel(e.target.value)} />
            <IMaskInput mask="(00) 00000-0000" placeholder='Celular' value={cel} onChange={(e) => setCel(e.target.value)} />
            <IMaskInput mask="00.000-000" placeholder='CEP' value={cep} onBlur={checkCEP} onChange={(e) => setCep(e.target.value)} />
            <input placeholder='Número' value={num} onChange={(e) => setNum(e.target.value)} />
          </div>

          <div className='dados'>
            <input placeholder='Logradouro' value={rua} onChange={(e) => setRua(e.target.value)} />
            <input placeholder='Bairro' value={bairro} onChange={(e) => setBairro(e.target.value)} />
            <input placeholder='Complemento' value={comp} onChange={(e) => setComp(e.target.value)} />
            <input placeholder='Cidade' value={city} onChange={(e) => setCity(e.target.value)} />
            <input placeholder='Estado' maxLength='2' value={estado} onChange={(e) => setEstado(e.target.value)} />
          </div>

          {formValue.map((e, index) => (
            <>

              <div className='school' key={index}>
                <input placeholder='Escolas atuantes' name='escolas' value={e.escolas} onChange={e => handleChange(index, e)} />
                {index ?
                  <button type="button" className='del' onClick={() => removeFormField(index)}>Deletar</button>
                  : null}
              </div>

            </>
          ))}

          <div className='submits'>
            <button className="add" type="button" onClick={() => addFormField()}>Adicionar escola</button>
            <button type='submit' className='submit' onClick={() => handleSubmit()}>Enviar</button>
          </div>

        </form>
      </div>
    </div>
    </div>
  );
}

export default Cadastro;