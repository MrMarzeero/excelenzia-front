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
      topics: ["matemática", "equações", "álgebra"],
      questions:"15"
    },
    {
      id: "2",
      name: "Problemas de Física Clássica",
      topics: ["física", "cinemática", "dinâmica"],
      questions:"12"
    },
    {
      id: "3",
      name: "Lógica de Programação Avançada",
      topics: ["programação", "algoritmos", "recursão"],
      questions:"10"
    }
  ];

  const carregarSimulados = () => {
    simulados.value = dadosMockados; // Apenas adiciona os dados mockados
    carregando.value = false; // Marca como carregado
  };
  
  

  onMounted(carregarSimulados);

  return { simulados, carregando };
}

