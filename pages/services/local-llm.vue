<template>
  <AiServicePage ns="landings.localLlm" path="/services/local-llm" service-type="On-premise LLM deployment" :default-interest="2" :min-price="1000000">
    <template #visual>
      <LocalLlmDiagram />
    </template>
  </AiServicePage>
</template>
