<template>
  <div class="container" style="text-align: center; margin-top: 50px;">
    <h1>Invoices</h1>
    
    <table class="table tableInvoices table-th" style="width: 100%;">
      <thead>
        <tr>
          <th>Invoice number</th>
          <th>Contractor</th>
          <th>Issue Date</th>
          <th>Due Date</th>
          <th>Sum</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="invoice in invoices" :key="invoice.number">
          <td>{{ invoice.number }}</td>
          <td>{{ invoice.contractor }}</td>
          <td>{{ invoice.issueDate }}</td>
          <td>{{ invoice.dueDate }}</td>
          <td>{{ invoice.sum }}</td>
        </tr>
      </tbody>
    </table>

    <div class="form-container" style="margin-top: 40px; display: inline-block;">
      <div class="form-group">
        <input
          type="text"
          class="form-control"
          placeholder="Enter a float value"
          v-model="inputValue"
          style="width: 300px; margin: 10px auto;"
        />
      </div>

      <div class="form-group">
        <select
          class="form-control"
          v-model="selectedAccount"
          style="width: 300px; margin: 10px auto;"
        >
          <option value="">Select Account</option>
          <option value="account1">Account 1</option>
          <option value="account2">Account 2</option>
          <option value="account3">Account 3</option>
        </select>
      </div>

      <div>
        <button class="btn btn-primary" @click="calculate" style="margin: 5px;">
          Calculate
        </button>
        <button class="btn btn-secondary" @click="fetchResult" style="margin: 5px;">
          Fetch result
        </button>
        <button class="btn btn-danger" @click="throwError" style="margin: 5px;">
          Error
        </button>
      </div>
    </div>

    <div v-if="result" class="alert alert-info" style="margin-top: 20px;">
      Result: {{ result }}
    </div>

    <div v-if="error" class="alert alert-danger" style="margin-top: 20px;">
      {{ error }}
    </div>
  </div>
</template>

<script>
import ErrorHandlerService from '../services/ErrorHandlerService';

export default {
  name: 'InvoicesView',
  data() {
    return {
      inputValue: '',
      selectedAccount: '',
      result: null,
      error: null,
      invoices: [
        { number: '135/ST/GD/05/2024', contractor: 'BadData LLC', issueDate: '2024-09-06', dueDate: '2024-10-01', sum: '$62986.50' },
        { number: '222/ST/2024', contractor: 'Exceptional LLC', issueDate: '2024-08-29', dueDate: '2024-10-18', sum: '$152615.25' },
        { number: '88/SU/05/2024', contractor: 'Upright S corp', issueDate: '2024-09-11', dueDate: '2024-10-08', sum: '$85078.85' },
        { number: '123/EX/2024', contractor: 'DataCorp', issueDate: '2024-07-14', dueDate: '2024-09-01', sum: '$94500.75' },
        { number: '421/ST/2024', contractor: 'DataExperts', issueDate: '2024-08-01', dueDate: '2024-08-30', sum: '$55000.20' },
      ],
    };
  },
  methods: {
    calculate() {
      this.error = null;
      const floatInput = parseFloat(this.inputValue);
      if (!isNaN(floatInput) && this.selectedAccount) {
        this.result = floatInput * 2;
      } else {
        this.error = 'Please enter a valid float and select an account';
      }
    },
    fetchResult() {
      fetch("http://non-existent/not-found", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ result: this.result }),
      })
        .then(response => response.text())
        .then(data => {
          console.log('Response:', data);
          alert('Result sent and response received: ' + data);
        })
        .catch(error => {
          this.error = 'Error during fetch: ' + error.message;
        });

      alert(`Result was sent: ${this.result}`);
    },
    throwError() {
      try {
        throw new Error('This is a simulated error!');
      } catch (error) {
        ErrorHandlerService.handleError(error);
        this.error = error.message;
      }
    },
  },
};
</script>
