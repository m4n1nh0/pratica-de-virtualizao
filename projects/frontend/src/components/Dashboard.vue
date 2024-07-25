<template>
    <div class="dashboard">
      <div class="card">
        <h2>Usuários</h2>
        <p>{{ userCount }}</p>
      </div>
      <div class="card">
        <h2>Vendas Hoje</h2>
        <p>{{ salesToday }}</p>
      </div>
      <div class="card">
        <h2>Receita Hoje</h2>
        <p>\${{ revenueToday }}</p>
      </div>
      <div class="card">
        <h2>Novas Mensagens</h2>
        <p>{{ newMessages }}</p>
      </div>
    </div>
  </template>

  <script lang="ts">
  import { defineComponent, ref, onMounted } from 'vue';

  export default defineComponent({
    name: 'Dashboard',
    setup() {
      const userCount = ref(0);
      const salesToday = ref(0);
      const revenueToday = ref(0);
      const newMessages = ref(0);

      onMounted(async () => {
        try {
          const response = await fetch('/api/dashboard');
          const data = await response.json();
          userCount.value = data.userCount;
          salesToday.value = data.salesToday;
          revenueToday.value = data.revenueToday;
          newMessages.value = data.newMessages;
        } catch (error) {
          console.error('Erro ao buscar dados:', error);
        }
      });

      return { userCount, salesToday, revenueToday, newMessages };
    }
  });
  </script>

  <style scoped>
  .dashboard {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }
  .card {
    background: #f4f4f4;
    border-radius: 8px;
    padding: 20px;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
    flex: 1;
    min-width: 200px;
    text-align: center;
  }
  .card h2 {
    margin: 0;
    font-size: 24px;
  }
  .card p {
    font-size: 18px;
  }
  </style>
