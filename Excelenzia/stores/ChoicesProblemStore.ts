import { defineStore } from "pinia";

interface UserChoices {
  subject: string;
  topics: string[];
  questionsAmount: number;
  quizType: "discursive" | "multiple-choice"; // Tipo corrigido
  description?: string;
}

export const useChoiceStore = defineStore("problemChoices", {
  state: (): UserChoices => ({
    subject: "Math",
    topics: [],
    questionsAmount: 1,
    quizType: "multiple-choice", // Valor padrão corrigido
    description: "",
  }),

  actions: {
    setSubject(subject: string) {
      this.subject = subject;
    },
    addTopic(topic: string) {
      if (!this.topics.includes(topic)) {
        this.topics.push(topic);
      }
    },
    removeTopic(topic: string) {
      this.topics = this.topics.filter((t) => t !== topic);
    },
    setQuestionsAmount(amount: number) {
      this.questionsAmount = amount;
    },
    setQuizType(type: "discursive" | "multiple-choice") { // Tipo corrigido
      this.quizType = type;
    },
    setDescription(description?: string) {
      this.description = description;
    },
  },
});
