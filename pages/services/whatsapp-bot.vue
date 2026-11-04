<template>
  <AiServicePage ns="landings.whatsappBot" path="/services/whatsapp-bot" service-type="AI chatbot for WhatsApp and Telegram" :default-interest="0" :min-price="20000" monthly>
    <template #visual>
      <BotChat />
    </template>
  </AiServicePage>
</template>
