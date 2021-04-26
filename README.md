# Controle de receitas e despesas    

Um CRUD para gerenciar receitas e despesas pessoas
## :heart: Como usar
### :computer: Instale as dependências necessárias:

**No backend é utilizado django, uma virtualenv para um melhor controle dos packages 📦**

Tenha o python instalado na sua máquina e execute os seguintes comandos para criar e ativar a virtualenv.

<li>No Linux

   ```sh
   python -m venv nome_da_virtualenv
   source nome_da_virtualenv/bin/activate
   ```

</li>

<li>No Windows

   ```sh
   python -m venv nome_da_virtualenv
   nome_da_virtualenv\Scripts\activate.bat
   ```

</li>

<li>No Mac
   
   ```sh
   python -m venv nome_da_virtualenv
   source nome_da_virtualenv/bin/activate
   ```

</li>

<li>Por fim

    
    cd backend/ && npm install
    

</li>


### :computer: No diretório onde contenha o arquivo `manage.py`

nele contém todos os packages incluidos necessários para rodar localmente e produção

```sh
(nome_da_virtualenv)pip install -r requirements.txt
```

**Realize o migrate para que o banco de dados crie a tablea**

```sh
(nome_da_virtualenv) python manage.py migrate
```
**Inicie o servidor**

```sh
python manage.py runserver 
```
### Para o frontend foi utilizado React, instale as dependências 📦.

```sh
cd frontend/ && npm install
```

**Após instalar tudo**

```sh
npm run build
```

**Próximo Passo**

Pegue todos os arquivos gerados dentro da pasta build e retorne para a pasta backend, lá há uma pasta chamada `frontend/build`, ela é responsável por renderizar os templates, cole todos os arquivos gerados nela.

## Back-end da API

Você pode visualizar a documentação da API através `localhost:8000/swagger/`.

Os endpoints da API são:
|Rotas| Método | Descrição |
|---|---|---|
|`localhost:8000/api/budget`| `GET` | Retorna todos atletas registrados. |
|`localhost:8000/api/budget/:id`| `GET` | Retorna apenas um atleta. |
|`localhost:8000/api/budget`| `POST` | Cadastra um novo atleta. |
|`localhost:8000/api/budget/:id`| `PUT` | Atualiza os dados de um atleta específico. |
|`localhost:8000/api/budget/:id`| `DELETE` | Deletar um atleta específico. |

+ Exemplo da Resquest/POST (application/json)
    + Body 
        ```text
        {
            "date": "2021-04-24",
            "register_type": "Despesa",
            "category": "Educação",
            "description": "Faculdade",
            "expense": "309",
            "expense_type": "Cartão de Crédito",
        }
        ```

## :notebook: Notas
**Configurando conexão com banco de dados**

Configure o banco de dados no `settings.py` no diretório `backend/`, você pode alterar para mysql ou sqlite.

```text
    DATABASES = {
        'default': {
            'ENGINE': 'django.db.backends.postgresql_psycopg2',
            'NAME': 'DOBANCODEDADOS',
            'USER': 'USUARIO',
            'PASSWORD': 'SUASENHA',
            'HOST': 'localhost',
            'PORT': '5432'
    }
}
```

**Crie um super usuário para logar na aplicação**

Atualmente a aplicação usa um super usuário para logar, para criar um rode o seguinte comando.


```sh
python manage.py createsuperuser
```

This software was created for study purposes only. Feel free to try it out.