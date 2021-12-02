import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs'
import { App } from './App';

createServer({
  models: {
    transaction: Model,

  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Freelance App',
          type: 'deposit',
          category: 'Desenvolvimento',
          amount: 85000,
          createdAt: new Date('2021-02-12 09:30:00')
        },
        {
          id: 2,
          title: 'Gasolina',
          type: 'withdraw',
          category: 'Carro',
          amount: 3000,
          createdAt: new Date('2021-02-12 09:30:00')
        },
        {
          id: 3,
          title: 'Cimento',
          type: 'withdraw',
          category: 'Obra',
          amount: 20000,
          createdAt: new Date('2021-02-12 09:30:00')
        },
        {
          id: 4,
          title: 'Gestão de Paginas',
          type: 'deposit',
          category: 'Marketing Digital',
          amount: 3600,
          createdAt: new Date('2021-02-12 09:30:00')
        }
      ]
    })
  },

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create('transaction', data)
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

