import { _descriptors } from "chart.js/helpers"
import { defineStore } from "pinia"

interface UserChoices{
  subject: string,
  topics: string[],
  difficulty: "easy" | "medium" | "hard" | "insane",
  questionsAmount: number,
  quizType: "discursive" | "multiple-choice",
  description?: string
}

export const useChoiceStore = defineStore("problemChoices", {
  state: (): UserChoices => ({
    subject: "Math",
    topics: [],
    difficulty: "easy",
    questionsAmount: 1,
    quizType: "discursive",
    description: "",
  }),
  
  actions: {
    setSubject(subject: string){
      this.subject = subject
    },
    addTopic(topic: string) {
      if (!this.topics.includes(topic)) {
        this.topics.push(topic);
      }
    },
    removeTopic(topic: string) {
      this.topics = this.topics.filter(t => t !== topic);
    },
    setDifficulty(level: "easy" | "medium" | "hard"){
      this.difficulty = level
    },
    setQuestionsAmount(amount: number){
      this.questionsAmount = amount
    },
    setQuizType(type: "discursive" | "multiple-choice" ){
      this.quizType = type
    },
    setDescription(description?: string){
      this.description = description
    }
  }
})
