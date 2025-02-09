/*import { ref, onMounted } from "vue";
import { useAxios } from "@/composables/useAxios";

export function useSimulados() {
  const { get } = useAxios();
  const simulados = ref([]);
  const loading = ref(false);
  const error = ref(null);

  const fetchSimulados = async () => {
    loading.value = true;
    try {
      const response = await get("/all/");
      simulados.value = response.data;
    } catch (err) {
      error.value = err.message;
    } finally {
      loading.value = false;
    }
  };

  onMounted(fetchSimulados);

  return { simulados, loading, error, fetchSimulados };
}*/
import { ref, onMounted } from "vue";
import { useAxios } from "../composables/useAxios";

export function useSimulados() {
  const { get } = useAxios();
  const simulados = ref([]);
  const carregando = ref(true);

  const dadosMockados = [
    {
      id: "1",
      name: "Desafios de Álgebra",
      topics: ["matemática", "equações", "álgebra"]
    },
    {
      id: "2",
      name: "Problemas de Física Clássica",
      topics: ["física", "cinemática", "dinâmica"]
    },
    {
      id: "3",
      name: "Lógica de Programação Avançada",
      topics: ["programação", "algoritmos", "recursão"]
    }
  ];

  const carregarSimulados = async () => {
    try {
      const response = await get("/all");
      simulados.value = response.data.length ? response.data : dadosMockados;
    } catch (error) {
      console.error("Erro ao buscar simulados:", error);
      simulados.value = dadosMockados; // Usa mock caso a API falhe
    } finally {
      carregando.value = false;
    }
  };

  onMounted(carregarSimulados);

  return { simulados, carregando };
}

