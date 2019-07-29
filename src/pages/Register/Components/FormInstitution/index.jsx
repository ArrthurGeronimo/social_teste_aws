import React from 'react';
import axios from 'axios';
import { Redirect, Link } from 'react-router-dom';


import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import Store from '@material-ui/icons/Store';
import StoreBorder from '@material-ui/icons/StoreOutlined';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

import Alert from './../Alerts/index';
import TooltipHelp from './../../../../components/TooltipHelp/index';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "100%",
  },
  formControl:{
    textAlign: "justify",
    width: "100%",
  },
  formControlCustom:{
    textAlign: "right",
    width: "100%",
    display: "block",
  },
  checkBox: {
    '& .Mui-checked':{
      color: "#C01C10",
    }
  },
  rowButtonSubmit: {
    '& button' : {
      backgroundColor: "#880000",
      color: "#fff",
      marginTop: "50px",
      float: "right",
      display: "block",
    },
    '& button:hover' : {
      backgroundColor: "#FA533B",
    }
  },
  rowButtonLink :{
    '& a' : {
      float: "right",
      display: "block",
    },
  }
}));

export default function FormInstitutionRegister() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    redirect: false,
    alertOpen: false,
    alertVariant: 'success',
    alertMessage: 'Teste',

    nome: '',
    descricao: '',
    vinculoDoador: false,
    vinculoFornecedor: false,
    enquadramento: '',
    cnpj: '',
    razaoSocial: '',
    registroMunicipal: '',
    registroEstadual: '',
    fone: '',
    email: '',
    site: ''
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };
  const checkboxFornecedor = () => {
    if(values.vinculoFornecedor){
      setValues({ ...values, vinculoFornecedor: false });
    }else{
      setValues({ ...values, vinculoFornecedor: true });
    }
  };
  const checkboxDoador = () => {
    if(values.vinculoDoador){
      setValues({ ...values, vinculoDoador: false });
    }else{
      setValues({ ...values, vinculoDoador: true });
    }
  };

  const submitInsitution = () =>  {
    const obj = {
      dados: {
        nome: values.nome,
        descricao: values.descricao,
        enquadramento: values.enquadramento,
        cnpj: values.cnpj,
        razaoSocial: values.razaoSocial,
        registroMunicipal: values.registroMunicipal,
        registroEstadual: values.registroEstadual,
        fone: values.fone,
        email: values.email,
        site: values.site
      },
      vinculoSocialMe :{
        doador: values.vinculoDoador,
        fornecedor: values.vinculoFornecedor
      }
    };

    if(obj.dados.nome === ''){
      setValues({
        ...values,
        alertOpen: true,
        alertVariant: 'warning',
        alertMessage: 'O Nome está em branco'
      });
    }else if (obj.dados.cnpj === '') {
      setValues({
        ...values,
        alertOpen: true,
        alertVariant: 'warning',
        alertMessage: 'Seu CNPJ é obrigatório'
      });
    }else{
        axios.post('http://localhost:3001/api/institution', obj)
        .then(
          setValues({ 
            redirect: true
          })
        )
    }
  };

  const submitCNPJ = () => {
    if(values.cnpj !== ''){
      axios.get(`https://www.receitaws.com.br/v1/cnpj/${values.cnpj}`)
      .then(res => {
        console.log(res.data);
        setValues({
          ...values,
          alertOpen: true,
          alertVariant: 'warning',
          alertMessage: 'Seu CPF é obrigatório'
        });
      });
    }
  }

  const renderRedirect = () => {
    if (values.redirect) {
      return <Redirect to='/login' />
    }
  }
  const renderAlert = () => {
    if (values.alertOpen) {
      return (
        <Alert 
          open={values.alertOpen}
          variant={values.alertVariant}
          message={values.alertMessage}
        />
      ) 
    }
  }
  const changeAlert = () => {
    if (values.alertOpen) {
      setTimeout(
        function() {
          setValues({...values, alertOpen: false })
        }
      ,5000);
    }
  }

  return (
    <div className={classes.root}>
      {renderRedirect()}
      {renderAlert()}
      {changeAlert()}
      
      

      <Paper className={classes.paper}>
      {/* LINHA 1 (NOME - NOME PÚBLICO) */}
      <Grid container spacing={3}>
        <Grid item xs={12} lg={4}>
          <TextField
            required
            label="Nome"
            value={values.nome}
            onChange={handleChange('nome')}
            className={classes.textField}
          />
        </Grid>
        <Grid item xs={12} lg={5}>
          <TextField
            label="Razão Social"
            value={values.razaoSocial}
            onChange={handleChange('razaoSocial')}
            className={classes.textField}
          />
        </Grid>
        <Grid item xs={12} lg={3}>
        <FormControl component="fieldset" className={classes.formControlCustom}>
            <FormLabel component="legend">Vínculo com a Social Me <TooltipHelp text={'Lorem Ipsum'} /></FormLabel>
            <Tooltip title="Lorem Ipsum" interactive>
              <FormControlLabel
                className={classes.checkBox}
                control={<Checkbox icon={<StoreBorder />} checkedIcon={<Store />} value={values.vinculoFornecedor} onChange={checkboxFornecedor} />}
                label="Fornecedora"
              />
            </Tooltip>
            <Tooltip title="Lorem Ipsum" interactive>
              <FormControlLabel
                className={classes.checkBox}
                control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} value={values.vinculoDoador} onChange={checkboxDoador} />}
                label="Doadora"
              />
            </Tooltip>
          </FormControl>
        </Grid>
        {/* LINHA 2 () */}
        <Grid item xs={6} sm={3} lg={3}>
          <FormControl className={classes.formControl}>
            <TextField
              required
              label="CNPJ"
              value={values.cnpj}
              onChange={handleChange('cnpj')}
              className={classes.textField}
            />
          </FormControl>
        </Grid>
        <Grid item xs={6} sm={3} lg={1}>
          <Tooltip title="Consultar CNPJ" interactive>
            <IconButton className={classes.button} aria-label="Search" onClick={submitCNPJ}>
              <SearchIcon />
            </IconButton>
          </Tooltip>
        </Grid>
        <Grid item xs={6} sm={3} lg={4}>
        <FormControl className={classes.formControl}>
            <InputLabel htmlFor="age-simple">Enquadramento</InputLabel>
            <Select
              value={values.enquadramento}
              onChange={handleChange('enquadramento')}
            >
              <MenuItem value={"Solteiro(a)"}>Solteiro(a)</MenuItem>
              <MenuItem value={"Casado(a)"}>Casado(a)</MenuItem>
              <MenuItem value={"Viúvo(a)"}>Viúvo(a)</MenuItem>
              <MenuItem value={"Separado Judicialmente"}>Separado Judicialmente</MenuItem>
              <MenuItem value={"Divorciado"}>Divorciado</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        {/* LINHA 3 () */}
        <Grid item xs={6} sm={3} lg={2}>
          <FormControl className={classes.formControl}>
            <TextField
              label="Registro Municipal"
              value={values.registroMunicipal}
              onChange={handleChange('registroMunicipal')}
              className={classes.textField}
            />
          </FormControl>
        </Grid>
        <Grid item xs={6} sm={3} lg={2}>
          <FormControl className={classes.formControl}>
            <TextField
              label="Registro Estadual"
              value={values.registroEstadual}
              onChange={handleChange('registroEstadual')}
              className={classes.textField}
            />
          </FormControl>
        </Grid>
        <Grid item xs={6} sm={3} lg={4}>
          <FormControl className={classes.formControl}>
            <TextField
              label="Fone"
              value={values.fone}
              onChange={handleChange('fone')}
              className={classes.textField}
            />
          </FormControl>
        </Grid>
        <Grid item xs={6} sm={3} lg={4}>
          <FormControl className={classes.formControl}>
            <TextField
              label="Email"
              value={values.email}
              onChange={handleChange('email')}
              className={classes.textField}
            />
          </FormControl>
        </Grid>
        <Grid item xs={6} sm={3} lg={4}>
          <FormControl className={classes.formControl}>
            <TextField
              label="Site"
              value={values.site}
              onChange={handleChange('site')}
              className={classes.textField}
            />
          </FormControl>
        </Grid>
        <Grid item xs={6} sm={3} lg={12}>
          <FormControl className={classes.formControl}>
            <TextField
              label="Descrição"
              className={classes.textField}
              onChange={handleChange('descricao')}
              margin="dense"
              multiline
              rowsMax="4"
            />
          </FormControl>
        </Grid>
 
      </Grid>
      </Paper>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} lg={12} className={classes.rowButtonSubmit}>
          <Button variant="contained" onClick={submitInsitution}>
            Criar
          </Button>
        </Grid>
        <Grid item xs={12} sm={12} lg={12} className={classes.rowButtonLink}>
          <Link to={`/login`} >
            Já tem uma conta?
          </Link>
        </Grid>
      </Grid>
      
      
      
    </div>
  );
}
