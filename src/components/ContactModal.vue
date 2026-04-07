<template>
  <Teleport to="body">
    <div v-if="isOpen" class="overlay" @click.self="close">
      <div class="modal">
        <button class="close-btn" @click="close">&times;</button>
        
        <template v-if="!isSent">
          <h2>Связаться со мной:</h2>

          <p class="desc">
            Для коммерческих проектов или приобретения картин
            заполните форму ниже:
            <br /><br />
            Название работы подставляется автоматически
            <br /><br />
            Спасибо!
          </p>

          <form @submit.prevent="submitForm" class="form">
            <input v-model="email" placeholder="Ваш Email" required />
            <input v-model="name" placeholder="Ваше имя" required />
            <textarea v-model="message" placeholder="Ваше сообщение" required></textarea>

            <button type="submit" class="submit" :disabled="isLoading">
              {{ isLoading ? 'Отправка...' : 'Отправить' }}
            </button>
          </form>
        </template>

        <template v-else>
          <div class="success">
            <h2>Спасибо!</h2>
            <p>Ваше сообщение отправлено. Я свяжусь с вами в ближайшее время.</p>
            <button class="submit" @click="close">Закрыть</button>
          </div>
        </template>

      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { watch, ref } from 'vue'

const FORMSPREE_URL = 'https://formspree.io/f/mnjowyjp'

const props = defineProps<{
  isOpen: boolean
  work: { title: string } | null
}>()

const emit = defineEmits(['close'])

const email = ref('')
const name = ref('')
const message = ref('')
const isLoading = ref(false)
const isSent = ref(false)

watch(() => props.work, (newWork) => {
  if (newWork) {
    message.value = `Здравствуйте, хочу приобрести работу "${newWork.title}"`
  }
})

watch(() => props.isOpen, (val) => {
  document.body.style.overflow = val ? 'hidden' : ''
  if (!val) {
    isSent.value = false
  }
})

const close = () => {
  document.body.style.overflow = ''
  emit('close')
}

const submitForm = async () => {
  isLoading.value = true
  
  const formData = {
    email: email.value,
    name: name.value,
    message: message.value,
    work: props.work?.title || ''
  }
  
  try {
    const response = await fetch(FORMSPREE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    
    if (response.ok) {
      isSent.value = true
    }
  } catch (error) {
    console.error('Error sending form:', error)
  } finally {
    isLoading.value = false
  }
}
</script>

<style scoped>
.overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal {
  background: #fff;
  padding: 30px;
  width: 90%;
  max-width: 500px;
  border-radius: 12px;
  position: relative;
  color: #000;
}

.close-btn {
  position: absolute;
  top: 15px;
  right: 15px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #666;
}

.modal h2 {
  margin: 0 0 1rem;
  font-family: var(--font-serif);
  font-size: 1.5rem;
  font-weight: 400;
}

.desc {
  font-size: 0.875rem;
  line-height: 1.6;
  margin: 0 0 1.5rem;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

input, textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 0.875rem;
  font-family: var(--font-sans);
  box-sizing: border-box;
}

input:focus, textarea:focus {
  outline: none;
  border-color: #000;
}

textarea {
  min-height: 100px;
  resize: vertical;
}

.submit {
  margin-top: 10px;
  background: #000;
  color: #fff;
  padding: 12px 20px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-family: var(--font-sans);
  font-size: 0.875rem;
  letter-spacing: 0.05em;
  transition: opacity 0.3s ease;
}

.submit:hover {
  opacity: 0.8;
}

.submit:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.success {
  text-align: center;
  padding: 2rem 0;
}

.success h2 {
  margin: 0 0 1rem;
}

.success p {
  margin: 0 0 1.5rem;
  color: #666;
}
</style>
